import React from 'react';

export default function SectionTitle(props){
  
    return (
        <h2 className="section-title" {...props}>
            <div className="spike left"></div>
            <div>{props.children}</div>
            <div className="spike right"></div>
        </h2>
    )
  
}