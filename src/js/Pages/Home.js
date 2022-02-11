import React from "react";
import GetRents from "../Components/GetRents";
import "../../scss/app.scss"
import MainHeader from "../Layouts/MainHeader";
import MainFooter from "../Layouts/MainFooter";

const Home = () => {
    return (
        <div className="view--home">
            <MainHeader/>
            <div className="header-banner-container">
                <div className="header-banner" style={{backgroundImage:'url(/images/banner.svg)'}}>
                    <p className="banner-text">Chez vous, partout et ailleurs</p>
                </div>
            </div>
            <div className="home-container">
                <GetRents/>
            </div>
            <MainFooter/>
        </div>
    )
}
export default Home;
