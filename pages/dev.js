import Section from '../components/Section'
import Intro from '../components/Intro_v2'
import Menu from '../components/Menu'
import Gallery from '../components/Gallery'
import News from '../components/News'
import SectionTitle from '../components/SectionTitle'

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
        <div id="nonparallax">
            <img src="/assets/intro/nonparallax.jpg"/>
        </div>

        <div id="parallax">
            <Intro />
        </div>

        <div className="container">

            <Section className="section center" id="download">
                <p>The game download will be available soon.<br/>
                    For now you can check some of these links below:</p>
                <div className="buttons">
                    <a href="https://store.steampowered.com/app/1602030/MegaBattle/" className="btn btn-md" target="_blank"><i className="fab fa-steam"></i> Steam</a>
                    <a href="https://madcatgames.itch.io/megabattle" className="btn btn-md" target="_blank"><i className="fab fa-itch-io"></i> Itch.io</a>
                </div>
            </Section>

            <Section className="section">
                <div className="fluid-media">
                    <iframe src="https://www.youtube-nocookie.com/embed/H9nIaNLyd3s" frameBorder="0" allowFullScreen=""></iframe>
                </div>
            </Section>  

            <Section className="section">
                <SectionTitle>Latest News</SectionTitle>
                <News articles={props.articles} />
            </Section>          

            <Section id="about">
                <SectionTitle>About the Game</SectionTitle>
                <p>
                Build Robots and enter the arena to battle!
                </p>
                <p>
                MegaBattle is a robot themed collectible card game that offers new and innovative mechanics inspired in fight games, that makes it a fast pace strategic card game.<br/>
                MegaBattle is a free to play game and you can play in multiplayer mode or story mode.
                </p>

                <h4>MegaBattle Mechanics</h4>
                <p>MegaBots combines the best of CCG with innovative and fun mechanics, such as:</p>
                
                <p>
                * Unique mana system;<br/>
                * Opponing reading atack/defense mechanic;<br/>
                * You always have card on your hand to play;<br/>
                * 6 robots classes for building your robot;<br/>
                * More than 30k combinations for building your bot;<br/>
                * 72 battle cards (and more coming!) to build your battle deck;<br/>
                * 6 planets to explore and fight in search for the perfect parts to defeat the evil Megabot.
                </p>

                <h4>MegaBattle story and atmosphere</h4>
                <p>
                The year is 2235 and the current population of human beings remaining on planet Earth is less than 100,000. This is the result of a mysterious AI that appeared on earth, demanding its total domination or the total extermination of the human race. This artificial intelligence is the terrible Megabot, a perfect war machine that nobody knows where it came from. Megabot believes that conscious life forms are a virus that only consume all the resources of the planets they inhabit. That is why it invades planets and makes an offer: either all the inhabitants turn into machines like him, or all will be eliminated. Many planets tried to fight and were decimated, only 6 accepted the terms of the Megabot and of these 6 planets we have the 6 largest manufacturers of robot parts in the universe, they are: Blastes, Ewall, Freezeltronic, Powertrix, Pyron and Tiltex. These industries produce parts such as the characteristics of the extinct inhabitants of their planets and these technologies have helped to make the Megabot even stronger, as it can adapt to any situation. The planet that had the most developed AI and that offered the most resistance to Megabot's plans was Earth. The AI ​​War, as it was called, which took place in 2188 lasted 28 years and ended up making Megabot want to punish the remaining Terrans. The few who are left now are slaves, and are forced to build robots and fight in arenas scattered throughout the universe to entertain the high class of robots.
                </p>
                <p className="mb-6">
                The arena is Megabot's favorite place of fun and to win you need to know everything about the machines and be able to build the strongest Bot and the best battle strategy. Do not miss too many games in the tournaments, as it will be your end. . After the war and almost 20 years of domination, humans are tired of being treated this way and are planning a way to end the machines, starting with the destruction of Megabot. The best assemblers on Earth are teaming up to create a very powerful bot that is stronger than Megabot. During the MegaBattle, which will be the biggest robot fighting event ever seen in the universe, the assemblers will unite in secret and battle to discover the best pieces and in the end be able to form the best bot this galaxy has ever seen.
                Willl it be enough to stop the Megabot?
                </p>

                <SectionTitle>Screenshots</SectionTitle>
                <Gallery />
                <div className="mb-6"></div>

                <SectionTitle>About Us</SectionTitle>
                <p>Text about the company</p>
            </Section>

        </div>

		
    </div>)
}