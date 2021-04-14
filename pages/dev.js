import Section from '../components/Section'
import Intro from '../components/Intro_v2'
import Menu from '../components/Menu'
import Gallery from '../components/Gallery'
import News from '../components/News'

export default function Index() {

    // <div id="page-y-offset">0</div>

	return (<div className="blue">

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
                <News />
            </Section>          

            <Section id="about" className="section center">
                <h3 className="mb-2">Gallery</h3>
                <Gallery />
            </Section>

            

        </div>

		
    </div>)
}