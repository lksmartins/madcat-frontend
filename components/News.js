import React from 'react';
import Link from 'next/link';

export default function News(props) {
	var newsElements = props.articles
		? props.articles
		: [
				{
					title: 'Título Exemplo 1',
					preview: 'lorem ipsum dolor sit amet...',
					img: 'http://www.firewatchgame.com/screenshots/firewatch-e3-2.jpg',
				},
				{
					title: 'Título Exemplo 2',
					preview: 'lorem ipsum dolor sit amet...',
					img: 'http://www.firewatchgame.com/screenshots/firewatch-e3-2.jpg',
				},
				{
					title: 'Título Exemplo 3',
					preview: 'lorem ipsum dolor sit amet...',
					img: 'http://www.firewatchgame.com/screenshots/firewatch-e3-2.jpg',
				},
				{
					title: 'Título Exemplo 4',
					preview: 'lorem ipsum dolor sit amet...',
					img: 'http://www.firewatchgame.com/screenshots/firewatch-e3-2.jpg',
				},
		  ];

	return (
		<div className="news" {...props}>
			{newsElements.map((news, index) => {
				return (
					<div className="news-element" key={index}>
						<div className="img">
							<Link href={`/news/${news.slug}`}>
								<img
									src={
										news.img
											? news.img
											: '/assets/placeholder.png'
									}
								/>
							</Link>
						</div>
						<div className="date">
							<Link href={`/news/${news.slug}`}>
								<span>{news.formatted_date}</span>
							</Link>
						</div>
						<h3 className="title">
							<Link href={`/news/${news.slug}`}>
								<span>{news.title}</span>
							</Link>
						</h3>
						<p>
							<Link href={`/news/${news.slug}`}>
								<span>{news.preview}</span>
							</Link>
						</p>
					</div>
				);
			})}
		</div>
	);
}
