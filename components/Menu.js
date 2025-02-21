import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gameVersion } from '../lib/helper';
import { isMobile } from 'react-device-detect';
export default function Menu(props) {
	const items = [
		{
			text: 'News',
			img: 'news.png',
			className: 'menu-news',
			link: '/news',
		},
		{
			text: 'About the Game',
			img: 'about.png',
			className: 'about',
			link: '/#about',
		},
	];

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
									<Image
										quality="100"
										src={`/assets/menu/${item.img}`}
										width={isMobile ? '100' : '200'}
										height={isMobile ? '100' : '200'}
									/>
								</a>
							) : (
								<Link href={item.link}>
									<Image
										quality="100"
										src={`/assets/menu/${item.img}`}
										width={isMobile ? '100' : '200'}
										height={isMobile ? '100' : '200'}
									/>
								</Link>
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
