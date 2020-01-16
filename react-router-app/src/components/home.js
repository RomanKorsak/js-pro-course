import React from 'react';
import image from '../assets/eat.gif'

export function HomePage(){
    return(
        <div id = 'homepage'>
            <h1>Welcome to my home page!</h1>
            <img src={image} alt=""/>
        </div>
    )
}