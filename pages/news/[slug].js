import Section from '../../components/Section'
import Intro from '../../components/Intro_v2'
import Menu from '../../components/Menu'
import Link from 'next/link'

export async function getServerSideProps(context) {

	const res = await fetch('https://chave-mestra.net/api/articles/index.php', {
		method: 'POST',
		body: JSON.stringify({ 
			token: process.env.API_KEY, 
			action: 'article',
            slug: context.query.slug,
			group_id: process.env.GROUP_ID
		})
	})

	const article = await res.json()

    const data = await fetch('https://chave-mestra.net/api/articles/index.php', {
		method: 'POST',
		body: JSON.stringify({ 
			token: process.env.API_KEY, 
			action: 'articles',
			group_id: process.env.GROUP_ID
		})
	})

	const articles = await data.json()

    if( article.status == 400 ){
        return {
            props: {
                article: {
                    title: 'Article not found',
                    formatted_date: ''
                },
                articles: articles.articles
            }
        }
    }
	
	return {
		props: {
			article: { status:article.status, ...article.article},
            articles: articles.articles
		}
	}
}

export default function Article(props) {

    const article = props.article
    const articles = props.articles

    console.log(article)

	return (<div>

        <Menu className="menu small"/>
        <div id="nonparallax">
            <img src="/assets/intro/nonparallax.jpg"/>
        </div>

        <div id="parallax">
			<Intro className="intro parallax small" />
        </div>

        <div id="article" className="container grid">

            <div className="main">

                <Section className="section article">

                    <div className="img">
                        <img src={ article.img==null && article.status == 200 ? '/assets/placeholder.png' : article.img }/>
                    </div>

                    <div className="date">{article.formatted_date}</div>

                    <h1 className="title">{article.title}</h1>

                    <p>
                        {article.content}
                    </p>
                </Section>

            </div>

            <div className="sidebar">

                <div className="title blue">
                    Latest News
                </div>
                
                {
                    articles.map((articleItem, index)=>{
                        return (
                            <div className="article-element" key={index}>
                                <div className="title">
                                    <Link href={`/news/${articleItem.slug}`}>
                                        <a>{articleItem.title}</a>
                                    </Link>
                                </div>
                                <div className="date">
                                    <Link href={`/news/${articleItem.slug}`}>
                                        <a>{articleItem.formatted_date}</a>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

            

        </div>

		
    </div>)
}