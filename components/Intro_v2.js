import React, { useEffect } from 'react'
import Image from 'next/image'

export default function Intro(){

    function castParallax() {
    
        var top = window.pageYOffset;

        var layers = document.getElementsByClassName("parallax-item");

        var layer, speed, yPos;
        for (var i = 0; i < layers.length; i++) {
            layer = layers[i];
            speed = layer.getAttribute('data-speed');
            var yPos = +(top * speed / 100);
            layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
        }

        // testing
        //document.getElementById('page-y-offset').innerHTML = top;
    
    }
    
    function dispelParallax() {
        document.getElementById("nonparallax").style.display = "block"
        document.getElementById("parallax").style.display = "none"
    }
    
    function startSite() {

        console.log('Starting site...')
    
        var platform = navigator.platform.toLowerCase();
        var userAgent = navigator.userAgent.toLowerCase();

        console.log(platform)
        console.log(userAgent)
    
        if( platform.indexOf('ipad') != -1  ||  platform.indexOf('iphone') != -1 || userAgent.indexOf('android') != -1){
            dispelParallax();
        }
        
        else if(platform.indexOf('win32') != -1 || platform.indexOf('linux') != -1){
            castParallax();
        }
        
        else{
            castParallax();
        }
    
    }

    useEffect(() => {

        startSite()
        window.addEventListener('scroll', castParallax)
        return () => window.removeEventListener('scroll', castParallax)

    }, [])

    return (
        <div className="intro parallax">

            <div className="frame parallax-item" data-speed="0" />
            <div className="logo parallax-item"  data-speed="80" />
            <div className="robot parallax-item" data-speed="95" />
            <div className="cards parallax-item" data-speed="70" />
            <div className="bg parallax-item"    data-speed="50" />

        </div>
    )
  
}