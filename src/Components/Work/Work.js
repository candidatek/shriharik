import React from 'react'

import WorkExp from "../../Constants/WorkExpConstants";

function Work() {
    return (
        <div className="work">
            <div className="boldFont">
                Work Experience
            </div>
            <div className="flexFlow">

                { WorkExp.map((work) =>{
                   return ( <div key={work.time} className="workCards">
                    <div className="workHeading">
                        <div className="workCompany">
                            {work.comapny} 
                        </div>
                        <div className="flexFlowForContent">
                        <span className="workPosition">
                            {work.position}
                        </span>
                        <span className="workTime">
                            {work.time}
                        </span>
                        </div>
                        
                    </div>
                    <div className="workContent">
                        <div className="workContentData" dangerouslySetInnerHTML={{__html: work.content}}>                        
                        </div>
                
                    </div>
                </div>)
                })}
                
           
            
            </div>
            

        </div>
    )
}

export default Work
