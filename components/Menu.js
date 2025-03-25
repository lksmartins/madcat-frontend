import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gameVersion } from '../lib/helper';
import styles from './styles/menu.module.scss';

export default function Menu(props) {
	const items = [
		{
			text: 'Press-kit',
			img: 'news.png',
			className: 'menu-news',
			newTab: true,
			link: 'https://impress.games/press-kit/cavylabs/megabattle',
		},
		{
			text: 'About the Game',
			img: 'about.png',
			className: 'about',
			link: '/#about',
		},
	];
	function navigateOrScroll(url, newTab) {
		if (url.includes('#')) {
			const elementId = url.split('#')[1];
			const targetElement = document.getElementById(elementId);

			if (targetElement) {
				targetElement.scrollIntoView({ behavior: 'smooth' });
			}
			if (url === '/#about' && !targetElement) {
				window.location.href = '/#about';
			}
		} else {
			if (newTab) {
				window.open(url, '_blank');
				return;
			}
			window.location.href = url;
		}
	}

	return (
		<div id="menu" className={props.className ? props.className : 'menu'}>
			<div className="menu-container">
				{items.map((item, index) => {
					return (
						<div key={index} className={`${item.className} item`}>
							{item.text == 'Download' ? (
								<a
									href={gameVersion()}
									download="MegaBattle-AlphaDemo.zip"
								>
									<img
										quality="100"
										src={`/assets/menu/${item.img}`}
									/>
								</a>
							) : (
								<div
									className={styles.test}
									onClick={() =>
										navigateOrScroll(item.link, item.newTab)
									}
								>
									<img
										className={styles.image}
										quality="100"
										src={`/assets/menu/${item.img}`}
									/>
								</div>
							)}
							<div className="text">
								<Link href={item.link}>
									<span>{item.text}</span>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
