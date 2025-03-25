import Head from 'next/head'
import Link from 'next/link'
import Section from '../../components/Section'
import Intro from '../../components/Intro_v2'
import Menu from '../../components/Menu'
import News from '../../components/News'
import SectionTitle from '../../components/SectionTitle'

export async function getServerSideProps() {

	const res = await fetch('https://main.chavemestra.net/api/articles/index.php', {
		method: 'POST',
		body: JSON.stringify({ 
			token: process.env.API_KEY, 
			group_id: process.env.GROUP_ID,
			action: "articles"
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

	return (<div>

		<Head>
        	<title>News | MadCat Corp.</title>
      	</Head>

		<Menu className="menu small"/>
		<Intro className="intro parallax small" />

        <div className="container">

            <Section className="section center">
				<SectionTitle>News</SectionTitle>
                <News articles={props.articles} />
            </Section>

			<Section>
				<Link href="/"><span className="btn btn-sm"><i class="fas fa-undo"></i> Back to Home</span></Link>
            </Section>

        </div>

		
    </div>)
}