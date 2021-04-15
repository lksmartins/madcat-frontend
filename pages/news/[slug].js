import Section from '../../components/Section'
import Intro from '../../components/Intro_v2'
import Menu from '../../components/Menu'

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

	const data = await res.json()
	
	return {
		props: {
			article: data.article
		}
	}
}

export default function Article(props) {

    const article = props.article

	return (<div>

        <Menu />
        <Intro />

        <div id="article" className="container grid">

            <div className="main">

                <Section className="section article">
                    <div className="img">
                        <img src={article.img}/>
                    </div>
                    <div className="date">{article.formatted_date}</div>
                    <h1 className="title mb-4">{article.title}</h1>
                </Section>

                <Section className="section">
                    <p>
                        {article.content}
                    </p>
                </Section>

            </div>

            <div className="sidebar">
                sidebar
            </div>

            

        </div>

		
    </div>)
}