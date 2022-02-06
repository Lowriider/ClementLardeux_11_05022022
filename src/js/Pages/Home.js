import React from "react";
import GetRents from "../Components/GetRents";
import "../../scss/app.scss"
import MainHeader from "../Layouts/MainHeader";

const Home = () => {
    return (
        <div className="view--home">
            <MainHeader/>
            <div className="header-banner">
                <img src="/images/banner.svg" alt=""/>
                <p className="banner-text">Chez vous, partout et ailleurs</p>
            </div>
            <div className="home-container">
                <GetRents/>
            </div>
        </div>
    )
}
export default Home;
