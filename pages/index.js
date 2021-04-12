import Image from 'next/image'

import Section from '../components/Section'
import News from '../components/News'

export default function Index() {

	return (<div className="blue">

        <div className="container">

            <Section className="section center" id="intro">
                <Image src="/assets/logo-color.png" width="398" height="328" />
                <br/>
                Wow factor
            </Section>

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