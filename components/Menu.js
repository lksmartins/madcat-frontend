import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {gameVersion} from '../lib/helper'

export default function Menu(props){

    const router = useRouter()

    const items = [
        {text: 'Download', img: 'download.png', className: 'download', link: '/download'},
        {text: 'News', img: 'news.png', className: 'menu-news', link: '/news'},
        {text: 'About the Game', img: 'about.png', className: 'about', link: '/#about'}
    ]

    return (

        <div id="menu" className={ props.className ? props.className : 'menu' }>
            <div className="menu-container">
            {
                items.map((item, index)=>{
                    return (
                        <div key={index} className={`${item.className} item`}>
                            { item.text == 'Download' ? <a href={gameVersion} download="MegaBattle-AlphaDemo.zip"><Image quality="100" src={`/assets/menu/${item.img}`} width="500" height="500" /></a> : 
                                <Link href={item.link}>
                                    <a>
                                        <Image quality="100" src={`/assets/menu/${item.img}`} width="500" height="500" />
                                    </a>
                                </Link>
                            }
                            <div className="text">
                                <Link href={item.link}>
                                    <a>{item.text}</a>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
  
}