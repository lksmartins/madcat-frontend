import Section from '../../components/Section'
import Intro from '../../components/Intro_v2'
import Menu from '../../components/Menu'
import Gallery from '../../components/Gallery'
import News from '../../components/News'

export default function Articles() {

	return (<div className="blue">

        <Menu />
        <Intro />

        <div className="container grid">

            <div className="main">

                <Section className="section center">
                    <h1 className="title mb-4">Article Title</h1>
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

                <Section className="section center">
                    <h3 className="mb-2">Gallery</h3>
                    <Gallery />
                </Section>

            </div>

            <div className="sidebar">
                sidebar
            </div>

            

        </div>

		
    </div>)
}