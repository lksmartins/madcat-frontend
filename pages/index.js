import Section from '../components/Section'
import Intro from '../components/Intro_v2'

export default function Index() {

    // <div id="page-y-offset">0</div>

	return (<div>

        <Intro />

        <div className="container" id="coming-soon">

            <Section className="section center">
                <h2 className="title mb-4">Coming Soon</h2>
            </Section>

            <div className="madcat-logo">
                <img src="/assets/logo-color.png"/>
            </div>

        </div>
		
    </div>)
}