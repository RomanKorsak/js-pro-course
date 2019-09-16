import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom'
import image from '../assets/404.png'

export function Notfound(){

        let[redir, setRedir] = useState(false)
        useEffect(()=>{
            let timer = setTimeout(() => {
                setRedir(redir = true);
            }, 2000);
            return () => clearTimeout(timer);
        }, [redir])
        
    
    if(redir){
        return <Redirect to="/"/>
    }else{
        return (
            <>
                <div id = 'notFoundDiv'>
                    <img src={image} alt=""/>
                </div>
            </>
        )
    }

}
