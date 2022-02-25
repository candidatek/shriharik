import React from 'react'
import ShrihariPng from "../images/shrihari.png";
function MyPhoto() {
    return (
    <div className="photoContainer">
        <div className="photoWhiteBorder">
            <img className="myPhoto" src={ShrihariPng} alt=""/>
        </div>
    </div>
        
    )
}

export default MyPhoto
