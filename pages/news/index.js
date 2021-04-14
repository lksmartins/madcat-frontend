import Section from '../../components/Section'
import Intro from '../../components/Intro_v2'
import Menu from '../../components/Menu'
import News from '../../components/News'

export default function Articles() {

	return (<div className="blue">

        <Menu />
        <Intro />

        <div className="container">

            <Section className="section center">
                <h2 className="title mb-4">News</h2>
                <News />
            </Section>

        </div>

		
    </div>)
}