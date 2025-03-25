import Link from 'next/link';
import Section from '../components/Section';
import Intro from '../components/Intro_v2';
import Menu from '../components/Menu';
import Gallery from '../components/Gallery';
import News from '../components/News';
import SectionTitle from '../components/SectionTitle';
import { trailerId } from '../lib/helper';
import styles from '../styles/index.module.scss';

export async function getServerSideProps() {
	const res = await fetch(
		'https://main.chavemestra.net/api/articles/index.php',
		{
			method: 'POST',
			body: JSON.stringify({
				token: process.env.API_KEY,
				action: 'articles',
				group_id: process.env.GROUP_ID,
				limit: 4,
			}),
		}
	);
	const data = await res.json();
	return {
		props: {
			articles: data.articles,
		},
	};
}

export default function Index(props) {
	// <div id="page-y-offset">0</div>

	return (
		<div>
			<Menu />
			<Intro />

			<div className="container">
				<Section className="section center" id="download">
					<p>
						The final version of the game will be available for
						download soon.
						<br />
						For now you can check these links below:
					</p>
					<div className={styles.wrapperSteam}>
						<iframe
							src="https://store.steampowered.com/widget/1602030/?l=english"
							frameborder="0"
						></iframe>
					</div>
				</Section>

				<Section className="section">
					<div className="fluid-media">
						<iframe
							src={`https://www.youtube-nocookie.com/embed/${trailerId()}`}
							frameBorder="0"
							allowFullScreen=""
						></iframe>
					</div>
				</Section>

				<Section id="about">
					<SectionTitle>About the Game</SectionTitle>
					<p className="mb-6">
						MegaBattle combines the best of deckbuilding and
						fighting games with innovative and fun mechanics, such
						as:
					</p>
					<p className="mb-6">
						* Unique Mana System;
						<br />
						* Opponing Reading Atack/defense Mechanic;
						<br />
						* You Always Have Card On Your hand to Play;
						<br />
						* 6 Robots Classes For Building Your Robot;
						<br />
						* More than 10k combinations for building your bot;
						<br />* 6 planets to explore and fight in search for the
						perfect parts to defeat the evil Megabot.
					</p>

					<h4>MegaBattle story and atmosphere</h4>
					<p>
						The year is 2235. The current human population living on
						planet Earth is reduced to less than 100K. The survivors
						live in slavery, dominated by a mysterious alien AI.
						Elders say that, before the war, two options were
						offered to Mankind: accept the robotic leader or face an
						inevitable extermination of the human race. Well, it
						appears we made the worst of choices.
					</p>
					<p>
						The entire human race is now ruled by an artificial
						intelligence called<b>Megabot</b>, a perfect war machine
						from an unknown planet and uncertain origins. This alien
						tyrant bot believes we don’t deserve the planet we live
						in: Earth, of course.
					</p>

					<p className="mb-6">
						Many planets tried to fight him, and were decimated.
						<b> Only 6 accepted</b> the Megabot terms and became the
						largest manufacturers of robot parts:
						<b>
							Blastes, Ewall, Freezeltronic, Powertrix, Pyron and
							Tiltex.
						</b>
						These industrial colonies exist to produce robotic parts
						to improve Megabot and his huge army of shock troopers.
					</p>

					<h4>Earthans Resists and Pays A Price</h4>
					<p className="mb-6">
						Earth endured for some time, resisting and attracting
						the Megabot’s attention. The AI ​​War, as it was called,
						took place in 2188 and lasted 28 years until Megabot
						decided to punish the remaining rebel Terrans. As
						previously said, the few left are now slaves, forced to
						build robots and fight in arenas to entertain the higher
						caste of robot
					</p>

					<h4>Get Ready to Face Increasing Challenge</h4>
					<p className="mb-6">
						The arenas are basically warzones, and to win you need
						to understand everything about the machines and be able
						to build the strongest one. Besides a nice Bot, to
						defeat your foes you’ll need the best battle strategy.
					</p>

					<h4>You Are the Only Hope</h4>
					<p className="mb-6">
						The best engineers and assemblers on Earth are teaming
						up to create a very powerful bot, designed to be
						stronger than Megabot. But the only way to make it
						happen, is distracting MegaBot and all the leaders by
						fighting in MegaBattle Arenas. While they watch your
						struggle for victory, bet and enjoy the show, a scheme
						is in course to change our faith forever. You are the
						one with a card up the sleeve. You can be our hero. Are
						you strong, brave and smart enough? We'll see it soon.
					</p>
					<h4>History</h4>
					<p className="mb-6">
						Since we're an indie developer, we want a history to our
						game. This paragraph will explain this history in short.
					</p>

					<SectionTitle>Screenshots</SectionTitle>
					<Gallery />
					<div className="mb-6"></div>

					<SectionTitle>About Us</SectionTitle>
					<div className="links">
						<p>
							MadCat is the byproduct of a partnership between
							Chave-Mestra and Cavylabs, two seasoned companies in
							the gaming market. The companies decided to join
							forces due to good synergy and a shared interest of
							creating roguelike card games.
						</p>
					</div>
					<SectionTitle>Social Media</SectionTitle>
					<div className={styles.wrapperLogos}>
						{/* Discord */}
						<a href="https://discord.gg/JJ4sWpAp3x" target="_blank">
							<img
								src="http://invidget.switchblade.xyz/JJ4sWpAp3x"
								alt="Join us on Discord"
							/>
						</a>

						<div className={styles.row}>
							{/* Instagram */}
							<a
								href="https://instagram.com/madcatcorp"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.banner}
							>
								<img
									src="https://img.shields.io/badge/Instagram-Follow%20Us-E1306C?style=for-the-badge&logo=instagram&logoColor=white"
									alt="Instagram"
								/>
							</a>

							{/* X (Twitter) */}
							<a
								href="https://x.com/playmegabattle"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.banner}
							>
								<img
									src="https://img.shields.io/badge/X-Follow%20Us-000000?style=for-the-badge&logo=twitter&logoColor=white"
									alt="X (Twitter)"
								/>
							</a>

							{/* TikTok */}
							<a
								href="https://tiktok.com/@playmegabattle"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.banner}
							>
								<img
									src="https://img.shields.io/badge/TikTok-Follow%20Us-010101?style=for-the-badge&logo=tiktok&logoColor=white"
									alt="TikTok"
								/>
							</a>
						</div>
					</div>
				</Section>
			</div>
		</div>
	);
}
