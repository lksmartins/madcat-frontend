import React, { useEffect } from 'react'

export default function Intro(props){

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

        // for tablets and landscape
        if( ( window.innerWidth >= 600 && window.innerWidth <= 768 ) || ( window.innerWidth > window.innerHeight ) ){
            document.getElementById("nonparallax-image").src = '/assets/intro/non-parallax-tablet.jpg'
        }

        // for all devices
        document.getElementById("nonparallax").style.display = "block"
        document.getElementById("parallax").style.display = "none"
    }
    
    function startSite() {

        console.log('Starting site...')
    
        var platform = navigator.platform.toLowerCase();
        var userAgent = navigator.userAgent.toLowerCase();

        console.log(platform)
        console.log(userAgent)
    
        if( platform.indexOf('ipad') != -1  ||  platform.indexOf('iphone') != -1 ){
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
        <>
        <div id="nonparallax">
            <img id="nonparallax-image" src="/assets/intro/nonparallax.png"/>
        </div>

        <div id="parallax">			

            <div className={ props.className ? props.className : 'intro parallax' }>

                <div className="frame parallax-item" data-speed="0" />
                <div className="logo parallax-item"  data-speed="80" />
                <div className="robot parallax-item" data-speed="95" />
                <div className="cards parallax-item" data-speed="70" />
                <div className="bg parallax-item"    data-speed="50" />

            </div>

        </div>
        </>
    )
  
}