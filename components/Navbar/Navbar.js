import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { MenuItems } from './MenuItems'

export default function Navbar(){

    const [navShow, setNavShow] = useState(false)
    const router = useRouter()

    const head = (
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous" />
        </Head>
    )

    return(<div>

        {head}

        <nav className="navbar">
            <div className="navbar-items">
                <div className="logo-wrapper">
                    <Link href="/">
                        <a><Image className="logo" src="/assets/logo-color.png" alt="logo" width="94" height="64" /></a>
                    </Link>
                </div>
                <div className="menu-icon" onClick={() => setNavShow(!navShow)}>
                    <i aria-hidden className={navShow ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={navShow ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key={index} onClick={() => setNavShow(false)}>
                                <Link href={item.url}>
                                    <a className={item.cName}>
                                        {item.title}
                                    </a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>

    </div>)

}