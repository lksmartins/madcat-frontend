import Section from '../components/Section'
import Intro from '../components/Intro'
import News from '../components/News'

export default function Index() {

	return (<div className="blue">

        <Intro />

        <div className="container">   

            <Section className="section center">
                <button className="btn btn-lg">Download</button>
            </Section>

            <Section>
                Demo video & photos
            </Section>            

            <Section>
                News
                <News />
            </Section>

        </div>

		
    </div>)
}