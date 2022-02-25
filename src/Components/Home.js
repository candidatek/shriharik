import React from 'react'
import Header from "./Header";
import MyPhoto from "./MyPhoto"
import AboutMeIntro from "./AboutMeIntro";
import WorkAndAcadamics from "./Work/WorkAndAcadamics";
function Home() {
    return (
        <div className="home">
            <Header/>
            <MyPhoto/>
            <AboutMeIntro/>
            <WorkAndAcadamics/>
        </div>
    )
}

export default Home
