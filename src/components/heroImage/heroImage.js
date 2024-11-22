import React from "react";

function HeroImage() {
 return(
    <div className="container-fluid w-100 m-0 p-0">
        <img src="./images/image-hero-mobile.png" className="img-fluid mt-2 d-sm-block d-lg-none" style={{width:"100vw"}} alt="man working on a laptop"/>
        <img src="./images/image-hero-desktop.png" className="mt-2 d-none d-lg-block" style={{width:"75%", height:"90%", margin:"0 auto"}} alt="man working on a laptop"/>
    </div>
 )   
}

export default HeroImage