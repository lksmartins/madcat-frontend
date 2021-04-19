import React from 'react'

export default function Footer(props){
  
    return (
        <div className='footer' {...props}>

            <div className="col">
                <div className="title">Contact Us</div>
                <p>contact@madcatcorp.com</p>
            </div>
            
            <div className="col">
                <img src="/assets/logo-color.png"/>
            </div>

        </div>
    )
  
}