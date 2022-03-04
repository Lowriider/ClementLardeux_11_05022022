import React from "react";
import GetRents from "../Components/GetRents";
import "../../scss/app.scss"

const Home = () => {
    return (
            <div className="view--home">
                <div className="header-banner-container">
                    <div className="header-banner" style={{backgroundImage:'url(/images/banner.jpg)'}}>
                        <p className="banner-text">Chez vous, partout et ailleurs</p>
                    </div>
                </div>
                <div className="home-container">
                    <GetRents/>
                </div>
            </div>
    )
}
export default Home;
