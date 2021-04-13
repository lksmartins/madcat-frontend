import React from 'react'

export async function getStaticProps() {

	const res = await fetch('https://chave-mestra.net/api/articles/index.php', {
		method: 'POST',
		body: JSON.stringify({ 
			token: process.env.API_KEY, 
			action: 'articles',
			group_id: process.env.GROUP_ID
		})
	})

	const response = await res.json()
	
	return {
		props: {articles: response}
	}
}

export default function News(props){

	console.log('articles', props.articles)
	
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