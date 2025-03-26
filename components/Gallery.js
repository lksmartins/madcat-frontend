import React, { useState } from 'react'

export default function News(props){
	
	var images = props.images ? props.images : [
		{thumb: '/assets/gallery/thumb/tela7.png', img: '/assets/gallery/tela7.png'},
		{thumb: '/assets/gallery/thumb/tela2.png', img: '/assets/gallery/tela2.png'},
		{thumb: '/assets/gallery/thumb/tela3.png', img: '/assets/gallery/tela3.png'},
		{thumb: '/assets/gallery/thumb/tela4.png', img: '/assets/gallery/tela4.png'},
		{thumb: '/assets/gallery/thumb/tela5.png', img: '/assets/gallery/tela5.png'},
		{thumb: '/assets/gallery/thumb/tela6.png', img: '/assets/gallery/tela6.png'},
		{thumb: '/assets/gallery/thumb/tela1.png', img: '/assets/gallery/tela1.png'},
		// {thumb: '/assets/gallery/thumb/tela8.png', img: '/assets/gallery/tela8.png'}
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
					<img onClick={() => setLightbox('show')} id="lightbox-img" src="" />
				</div>
			</div>

			<div className='gallery' {...props}>
				
				{
					images.map((el, index)=>{
						return (<div key={index}>
							<img onClick={()=>callLightbox(el.img)} src={el.thumb} />
						</div>)
					})
				}

			</div>
		</div>
    )
  
}