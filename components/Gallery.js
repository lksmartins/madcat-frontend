import React from 'react'

export default function News(props){
	
	var images = props.images ? props.images : [
		{title: 'Título Exemplo 1', content: 'lorem ipsum dolor sit amet...', img: 'http://www.firewatchgame.com/screenshots/firewatch-e3-2.jpg'},
		{title: 'Título Exemplo 2', content: 'lorem ipsum dolor sit amet...', img: 'http://www.firewatchgame.com/screenshots/firewatch-e3-2.jpg'},
		{title: 'Título Exemplo 3', content: 'lorem ipsum dolor sit amet...', img: 'http://www.firewatchgame.com/screenshots/firewatch-e3-2.jpg'},
		{title: 'Título Exemplo 4', content: 'lorem ipsum dolor sit amet...', img: 'http://www.firewatchgame.com/screenshots/firewatch-e3-2.jpg'}
	]

    return (
		<div className='news' {...props}>
			
			{
                images.map((el, index)=>{
					return (<div key={index}>
						<img className="popup" href={el.img} src={el.img} />
					</div>)
				})
			}

		</div>
    )
  
}