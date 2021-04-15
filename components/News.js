import React from 'react'

export default function News(props){
	
	var newsElements = props.articles ? props.articles : [
		{title: 'Título Exemplo 1', preview: 'lorem ipsum dolor sit amet...', img: 'http://www.firewatchgame.com/screenshots/firewatch-e3-2.jpg'},
		{title: 'Título Exemplo 2', preview: 'lorem ipsum dolor sit amet...', img: 'http://www.firewatchgame.com/screenshots/firewatch-e3-2.jpg'},
		{title: 'Título Exemplo 3', preview: 'lorem ipsum dolor sit amet...', img: 'http://www.firewatchgame.com/screenshots/firewatch-e3-2.jpg'},
		{title: 'Título Exemplo 4', preview: 'lorem ipsum dolor sit amet...', img: 'http://www.firewatchgame.com/screenshots/firewatch-e3-2.jpg'}
	]

    return (
		<div className='news' {...props}>
			
			{
				newsElements.map((news, index)=>{
					return (<div className="news-element" key={index}>
						<div className="img">
							<img src={news.img} />
						</div>
						<div className="date">{news.formatted_date}</div>
						<h3 className="title">{news.title}</h3>
						<p>{news.preview}</p>
					</div>)
				})
			}

		</div>
    )
  
}