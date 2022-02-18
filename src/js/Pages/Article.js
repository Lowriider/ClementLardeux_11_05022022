import React from "react";
import {useLocation} from "react-router-dom";
import MainHeader from "../Layouts/MainHeader";
import Tags from "../Components/Tags";
import MainFooter from "../Layouts/MainFooter";
import Rating from "../Components/Rating";
import Dropdown from "../Components/Dropdown";
import Swiper from "../Components/Swiper";

const Article = () => {

    const location = useLocation()
    const {from} = location.state
    const rent = from

    return (
        <div className="rent-container">
            <MainHeader/>
            <div className="rent-content">
                <Swiper pictures={rent.pictures}/>
                <div className="rent-infos--container">
                    <div className="rent-infos">
                        <h2>{rent.title}</h2>
                        <p>{rent.location}</p>
                        <Tags tags={rent.tags}/>
                    </div>
                    <div className="rent-infos right">
                        <div className="rent-host">
                            <div className="rent-host--name">{rent.host.name}</div>
                            <div className="rent-host--picture"
                                 style={{backgroundImage: 'url(' + rent.host.picture + ')'}}></div>
                        </div>
                        <Rating rating={rent.rating}/>
                    </div>
                </div>
                <div className="dropdown-container">
                    <div className="rent-dropdown">
                        <Dropdown datas={rent.description} title={"Description"}/>
                    </div>
                    <div className="rent-dropdown">
                        <Dropdown datas={rent.equipments} title={"Équipements"}/>
                    </div>
                </div>
            </div>
            <MainFooter/>
        </div>
    )
}

export default Article;
