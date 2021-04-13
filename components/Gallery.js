import React, { useState } from 'react'

export default function News(props){
	
	var images = props.images ? props.images : [
		{title: 'Título Exemplo 1', content: 'lorem ipsum dolor sit amet...', img: 'http://www.firewatchgame.com/screenshots/firewatch-e3-2.jpg'},
		{title: 'Título Exemplo 2', content: 'lorem ipsum dolor sit amet...', img: 'http://www.firewatchgame.com/screenshots/firewatch-e3-2.jpg'},
		{title: 'Título Exemplo 3', content: 'lorem ipsum dolor sit amet...', img: 'http://www.firewatchgame.com/screenshots/firewatch-e3-2.jpg'},
		{title: 'Título Exemplo 4', content: 'lorem ipsum dolor sit amet...', img: 'http://www.firewatchgame.com/screenshots/firewatch-e3-2.jpg'}
	]

	const [lightbox, setLightbox] = useState('hidden')

	function callLightbox(src){

		document.getElementById('lightbox-img').src = src
		setLightbox('show')

	}

    return (
		<div>
			<div className={`gallery-overlay ${lightbox}`} onClick={() => setLightbox('hidden')}>
				<div className="controls">
					<i className="fas fa-times"></i>
				</div>
				<div className="main">
					<img onClick={() => setLightbox('show')} id="lightbox-img" src="http://www.firewatchgame.com/screenshots/firewatch-e3-2.jpg" />
				</div>
			</div>

			<div className='gallery' {...props}>
				
				{
					images.map((el, index)=>{
						return (<div key={index}>
							<img onClick={()=>callLightbox(el.img)} src={el.img} />
						</div>)
					})
				}

			</div>
		</div>
    )
  
}