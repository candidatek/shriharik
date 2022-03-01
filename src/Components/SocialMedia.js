import React from 'react'
import SocialMediaData from "../Constants/SocialMediaConstants";

function SocialMedia() {
    const socialMediaClickHandler = (url) => {
        window.open(url, '_blank');
    }
    return (
        <div className="socialMedia">
            {SocialMediaData.map((media) => 
                 {
                     return <img 
                     className="socialMediaImg"
                     src = {media.img} 
                     key={media.redirect} 
                     onClick={() => socialMediaClickHandler(media.redirect)}
                      /> 

                 }    
            )}
        </div>
    )
}

export default SocialMedia
{/*  */}