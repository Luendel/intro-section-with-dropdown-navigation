import React from "react";
import  './heroText.css'

function HeroText() {
    return(
        <section className="container-fluid text-center">
            <h1 id="section-title" >Make remote work</h1>
            <p className="mt-3" id="section-description">
                Get your team in sync, no matter your location. 
                Streamline processes, create team rituals, and watch 
                productivity soar.
            </p>
            <button id="section-button">Learn More</button>
        </section>
    )
}

export default HeroText