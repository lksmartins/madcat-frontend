import React from 'react'

export default function Footer(props){
  
    return (
        <div className='footer' {...props}>

            <div className="col">
                <div className="title">Contact Us</div>
                <div className="title">kanan@chavemestra.net</div>
                <p>Leonardo Kanan - Lead Game Designer</p>
            </div>
            
            <div className="col">
                <img src="/assets/logo-color.png"/>
            </div>

        </div>
    )
  
}