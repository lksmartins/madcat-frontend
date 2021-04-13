import Section from '../components/Section'
import Intro from '../components/Intro_v2'
import Gallery from '../components/Gallery'
import News from '../components/News'

export default function Index() {

	return (<div className="blue">

        <Intro />

        <div className="container">   

            <Section className="section center mb-7">
                <h2 className="title mb-4">Available for Download (Alpha version)</h2>
                <a className="btn btn-lg">Download for Windows</a>
            </Section>

            <Section className="section mb-7">
                <div className="fluid-media">
                    <iframe src="https://www.youtube-nocookie.com/embed/cXWlgP5hZzc" frameBorder="0" allowFullScreen=""></iframe>
                </div>
            </Section>            

            <Section className="section center mb-6">
                <h3 className="mb-2">Gallery</h3>
                <Gallery />
            </Section>

            <Section className="section center">
                <h3 className="mb-2">News</h3>
                <News />
            </Section>

        </div>

		
    </div>)
}