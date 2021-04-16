import Section from '../../components/Section'
import Intro from '../../components/Intro_v2'
import Menu from '../../components/Menu'
import News from '../../components/News'
import SectionTitle from '../../components/SectionTitle'

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

		<Menu className="menu small"/>
		<Intro className="intro parallax small" />

        <div className="container">

            <Section className="section center">
				<SectionTitle>News</SectionTitle>
                <News articles={props.articles} />
            </Section>

        </div>

		
    </div>)
}