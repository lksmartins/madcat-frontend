import Section from '../../components/Section'
import Intro from '../../components/Intro_v2'
import Menu from '../../components/Menu'
import News from '../../components/News'

export async function getServerSideProps() {

	const res = await fetch('https://chave-mestra.net/api/articles/index.php', {
		method: 'POST',
		body: JSON.stringify({ 
			token: process.env.API_KEY, 
			action: 'articles',
			group_id: process.env.GROUP_ID
		})
	})

	const data = await res.json()
	
	return {
		props: {
			articles: data.articles
		}
	}
}

export default function Articles(props) {

    console.log('articles', props.articles, props)

	return (<div>

        <Menu />
        <Intro />

        <div className="container">

            <Section className="section center">
                <h2 className="title mb-4">News</h2>
                <News articles={props.articles} />
            </Section>

        </div>

		
    </div>)
}