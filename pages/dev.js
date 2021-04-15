import Section from '../components/Section'
import Intro from '../components/Intro_v2'
import Menu from '../components/Menu'
import Gallery from '../components/Gallery'
import News from '../components/News'

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

export default function Index(props) {

    // <div id="page-y-offset">0</div>

	return (<div>

        <Menu />
        <Intro />

        <div className="container">

            <Section className="section center">
                <h2 className="title mb-4">Available for Download (Alpha version)</h2>
                <a className="btn btn-lg">Download for Windows</a>
            </Section>

            <Section className="section">
                <div className="fluid-media">
                    <iframe src="https://www.youtube-nocookie.com/embed/cXWlgP5hZzc" frameBorder="0" allowFullScreen=""></iframe>
                </div>
            </Section>  

            <Section className="section center">
                <h3 className="mb-2">Latest News</h3>
                <News articles={props.articles} />
            </Section>          

            <Section id="about" className="section center">
                <h3 className="mb-2">About the Game</h3>

                <h3 className="mb-2">Screenshots</h3>
                <Gallery />
            </Section>

        </div>

		
    </div>)
}