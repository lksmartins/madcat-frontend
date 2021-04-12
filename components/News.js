import React from 'react';

export default function News(props){
	
	var newsElements = [
		{title: 'Título Exemplo 1', content: 'lorem ipsum dolor sit amet...', img: 'http://www.firewatchgame.com/screenshots/firewatch-e3-2.jpg'},
		{title: 'Título Exemplo 2', content: 'lorem ipsum dolor sit amet...', img: 'http://www.firewatchgame.com/screenshots/firewatch-e3-2.jpg'},
		{title: 'Título Exemplo 3', content: 'lorem ipsum dolor sit amet...', img: 'http://www.firewatchgame.com/screenshots/firewatch-e3-2.jpg'},
		{title: 'Título Exemplo 4', content: 'lorem ipsum dolor sit amet...', img: 'http://www.firewatchgame.com/screenshots/firewatch-e3-2.jpg'}
	]

    return (
		<div className='news' {...props}>
			
			{
				newsElements.map((news, index)=>{
					return (<div key={index}>
						<img src={news.img} />
						<h3 className="title">{news.title}</h3>
						<p>{news.content}</p>
					</div>)
				})
			}

		</div>
    )
  
}