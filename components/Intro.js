import React from 'react'
import Image from 'next/image'
import { Parallax } from 'react-parallax'

export default function Intro(){

    const bgImg = '/assets/intro/bg.png' // 1920 x 620
    const mainImg = '/assets/intro/main.png' // 1920 x 660
    const multiplier = 1.7
    const width = 1920/multiplier
    const height = 660/multiplier

    return (
        <div className="intro">
            <Parallax bgImage={bgImg} bgImageAlt="the cat" strength={300}>
                <div className="main-container" 
                    style={{ 
                        width:`calc(${width}px + 250px)`, 
                        height: `calc(${height}px + 100px)` }}
                    >
                    <Image quality={100} src={mainImg} layout="fill" />
                </div>
            </Parallax>
        </div>
    )
  
}