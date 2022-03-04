import React from "react";
import {useLocation, Navigate } from "react-router-dom";
import Tags from "../Components/Tags";
import Rating from "../Components/Rating";
import Dropdown from "../Components/Dropdown";
import Swiper from "../Components/Swiper";

const Article = () => {
    const location = useLocation()

    if(location.state === null)
    {
        return (
            <Navigate to="/NotFound" />
        )
    }
    const {from} = location.state
    const rent = from
    return (
        <div className="rent-container">
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
                                 style={{backgroundImage: 'url(' + rent.host.picture + ')'}}/>
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
        </div>
    )
}

export default Article;
