import Link from 'next/link'
import Section from '../components/Section'
import Intro from '../components/Intro_v2'
import Menu from '../components/Menu'
import Gallery from '../components/Gallery'
import News from '../components/News'
import SectionTitle from '../components/SectionTitle'
import {trailerId} from '../lib/helper'

export async function getServerSideProps() {

	const res = await fetch('https://chave-mestra.net/api/articles/index.php', {
		method: 'POST',
		body: JSON.stringify({ 
			token: process.env.API_KEY, 
			action: 'articles',
			group_id: process.env.GROUP_ID,
            limit: 4
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

            <Section className="section center" id="download">
                <p>
                    The final version of the game will be available for download soon.<br/>
                    For now you can check these links below:
                </p>
                <div className="buttons">
                    <a href="https://store.steampowered.com/app/1602030/MegaBattle/" className="btn btn-md" target="_blank"><i className="fab fa-steam"></i> Steam</a>
                </div>
            </Section>

            <Section className="section">
                <div className="fluid-media">
                    <iframe src={`https://www.youtube-nocookie.com/embed/${trailerId()}`} frameBorder="0" allowFullScreen=""></iframe>
                </div>
            </Section>  

            <Section className="section">
                <SectionTitle>Latest News</SectionTitle>
                <News articles={props.articles} />
                <div id="news-ver-mais">
                    <Link href="/news"><a className="btn btn-sm"><i className="fas fa-newspaper"></i> Read More</a></Link>
                </div>
            </Section>          

            <Section id="about">
                <SectionTitle>About the Game</SectionTitle>
                <p className="mb-6">
                MegaBattle is a futuristic roguelike that offers new and innovative mechanics inspired in fight games, delivering a fast-paced strategy game. Build your robot and enter the arena to fight!
                </p>

                <h4>MegaBattle Mechanics</h4>
                <p>
                MegaBattle combines the best of card games with innovative and fun mechanics, such as:
                </p>
                
                <p className="mb-6">
                * Unique Mana System;<br/>
                * Opponing Reading Atack/defense Mechanic;<br/>
                * You Always Have Card On Your hand to Play;<br/>
                * 6 Robots Classes For Building Your Robot;<br/>
                * More than 10k combinations for building your bot;<br/>
                * 6 planets to explore and fight in search for the perfect parts to defeat the evil Megabot.
                </p>

                <h4>MegaBattle story and atmosphere</h4>
                <p>
                The year is 2235. The current human population living on planet Earth is reduced to less then 100K. The survivors live in slavery, dominated by a mysterious alien AI. Elders say that before the war, two choices were offered to Mankind: accept the robotic leader or face an inevitable extermination of the human race. Well, it appears we made the worst of choices.
                </p>
                <p>
                Our entire race is now ruled by an artificial intelligence called <b>Megabot</b>, a perfect war machine from an unknown planet and uncertain origins. This alien tyrant bot believes we don't deserve the planet we live in: Earth, of course.
                </p>

                <p className="mb-6">
                Many planets tried to fight him, and were decimated.<b> Only 6 accepted</b> the Megabot terms and became the largest manufacturers of robot parts: <b>Blastes, Ewall, Freezeltronic, Powertrix, Pyron and Tiltex. </b>These industrial colonies exist  to produce robotic parts to improve Megabot and his huge army of shock troopers.
                </p>

                <h4>Earthans Resists and Pays A Price</h4>
                <p className="mb-6">
                Earth endured for some time, resisting and attracting the Megabot's attention. The AI ​​War, as it was called, took place in 2188 and lasted 28 years until Megabot decided to punish the remaining rebel Terrans. As previously said, the few left are now slaves, forced to build robots and fight in arenas to entertain the higher caste of robots.
                </p>
                
                <h4>Get ready to face an increasing challeng</h4>
                <p className="mb-6">
                The arenas are basically warzones,  and to win you need to understand everything about the machines and be able to build the strongest one. Besides a nice Bot, to defeat your foes you'll need the best battle strategy. 
                </p>

                <h4>You Are the Only Hope</h4>
                <p className="mb-6">
                The best engineers and assemblers on Earth are teaming up to create a very powerful bot, designed to be stronger than Megabot. But the only way to make it happen, is distracting MegaBot and all the leaders by fighting in MegaBattle Arenas. While they watch your struggle for victory, bet and enjoy the show, a scheme is in course to change our faith forever. You are the one with a card up the sleeve. You can be our hero. Are you strong, brave and smart enough? We'll see it soon.
                </p>

                <SectionTitle>Screenshots</SectionTitle>
                <Gallery />
                <div className="mb-6"></div>

                <SectionTitle>About Us</SectionTitle>
                <p className="links">
                    <p>Madcat started as <a target="_blank" href="https://chavemestra.net">Chave-Mestra</a>, an Escape Room from Brazil. We fell in love with making games and from that we decided to expand and start making digital games.</p>
                    <p>We became partners with <a target="_blank" href="https://www.cavylabs.com/">Cavylabs</a>, <a target="_blank" href="https://amoraleite.com">Leonardo Amora Leite</a> and <a target="_blank" href="https://www.linkedin.com/in/fabricio-mazzotti-5b8457104/">Fabricio Mazzotti</a> to make our first game.</p>
                    <p>Hope you enjoy it.</p>
                </p>
            </Section>

        </div>

		
    </div>)
}