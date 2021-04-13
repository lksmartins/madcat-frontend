import React from 'react'
import Image from 'next/image'

export default function Menu(){

    const items = [
        {text: 'Download', img: 'download.png', className: 'download', link: ''},
        {text: 'News', img: 'news.png', className: 'menu-news', link: ''},
        {text: 'About the Game', img: 'about.png', className: 'about', link: ''}
    ]

    return (

        <div id="menu" className="menu">

            {
                items.map((item, index)=>{
                    return (
                        <div key={index} className={`${item.className} item`}>
                            <a><Image src={`/assets/menu/${item.img}`} width="105" height="119" /></a>
                            <div className="text"><a>{item.text}</a></div>
                        </div>
                    )
                })
            }

        </div>
    )
  
}