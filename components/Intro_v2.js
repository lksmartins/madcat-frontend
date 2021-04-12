import React, { useEffect } from 'react'

export default function Intro(){

    function castParallax() {

        console.log('castParallax')
    
        var top = window.pageYOffset;

        var layers = document.getElementsByClassName("parallax-item");

        var layer, speed, yPos;
        for (var i = 0; i < layers.length; i++) {
            layer = layers[i];
            speed = layer.getAttribute('data-speed');
            var yPos = +(top * speed / 100);
            layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
        }
    
    }
    
    function dispelParallax() {
        $("#nonparallax").css('display','block');
        $("#parallax").css('display','none');
    }
    
    function startSite() {

        console.log('Starting site')
    
        var platform = navigator.platform.toLowerCase();
        var userAgent = navigator.userAgent.toLowerCase();
    
        if( platform.indexOf('ipad') != -1  ||  platform.indexOf('iphone') != -1 ){
            //dispelParallax();
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
            <div className="robot parallax-item" data-speed="100" />
            <div className="cards parallax-item" data-speed="70" />
            <div className="bg parallax-item"    data-speed="30" />

        </div>
    )
  
}