import Head from 'next/head'
import Link from 'next/link'
import Section from '../../components/Section'
import Intro from '../../components/Intro_v2'
import Menu from '../../components/Menu'
import HtmlParser from 'react-html-parser'

export async function getServerSideProps(context) {

	const res = await fetch('https://main.chavemestra.net/api/articles/index.php', {
		method: 'POST',
		body: JSON.stringify({ 
			token: process.env.API_KEY, 
			action: 'article',
            slug: context.query.slug,
			group_id: process.env.GROUP_ID
		})
	})

	const article = await res.json()

    const data = await fetch('https://main.chavemestra.net/api/articles/index.php', {
		method: 'POST',
		body: JSON.stringify({ 
			token: process.env.API_KEY, 
			action: 'articles',
			group_id: process.env.GROUP_ID,
            limit: 5
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

	return (<div>

        <Head>
        	<title>{article.title} | MadCat Corp.</title>
      	</Head>

        <Menu className="menu small"/>
        <Intro className="intro parallax small" />

        <div id="article" className="container">

            <div className="grid">

                <div className="main">

                    <Section className="section article">

                        <h1 className="title">{article.title}</h1>
                        <div className="date">{article.formatted_date}</div>
                        
                        { article.status == 200 ? 
                        <div className="img">
                            <img src={ article.img==null && article.status == 200 ? '/assets/placeholder.png' : article.img }/>
                        </div>
                        : '' }

                        <p>
                            { HtmlParser(article.content) }
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
                                            <span>{articleItem.title}</span>
                                        </Link>
                                    </div>
                                    <div className="date">
                                        <Link href={`/news/${articleItem.slug}`}>
                                            <span>{articleItem.formatted_date}</span>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }

                    
                    <div style={{padding:'2rem 0'}}>
                        <Link href="/"><span className="btn btn-sm" style={{fontSize:'0.85rem'}}><i class="fas fa-home"></i> Home</span></Link>
                    </div>
                    <div>
                        <Link href="/news"><span className="btn btn-sm" style={{fontSize:'0.85rem'}}><i class="fas fa-undo"></i> News</span></Link>
                    </div>
                    
                    

                </div>

            </div>
            
            <Section className="section buttons">
                <Link href="/"><span className="btn btn-sm"><i class="fas fa-undo"></i> Back to Home</span></Link>
                <Link href="/news"><span className="btn btn-sm"><i class="fas fa-undo"></i> Back to News</span></Link>
            </Section>

        </div>

		
    </div>)
}