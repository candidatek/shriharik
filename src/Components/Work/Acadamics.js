import React from 'react'
import RVLogo from "../../images/rvlogo.png";

function Acadamics() {
    return (
        <div>
           <div className="boldFont">
                Acadamics 
                <div className="collegeBoard">
                    <div className="flexFlow center">
                    <div className="collegeTitle">
                    RV College of Engineering
                    </div>
                    <img className="rvLogo" src={RVLogo} alt=""/>
                    </div>
                    
                    <div className="courseInfo">
                        <div className="flexFlow center top">
                        <div className="degree">
                        Bachelor of Engineering
                        </div>
                        <div className="collegeTime" >
                            July 2017 - July 2020
                        </div>
                        </div>
                        
                        <div className="specialization">
                        Information Science {"&"} Engineering
                        </div>
                       
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Acadamics
