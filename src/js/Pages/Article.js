import React from "react";
import {useLocation, useParams} from "react-router-dom";
import MainHeader from "../Layouts/MainHeader";

const Article = () => {
    let params = useParams();
    const location = useLocation()
    const {from} = location.state
    const rent = from
    console.log(rent)
    return (
        <div className="rent-container">
            <MainHeader/>
            {/* rent slider component*/}
            <div className="swiper-container">
                <div className="swiper-image" style={{backgroundImage: 'url(' + rent.pictures[0] + ')'}}/>
            </div>
            <div className="rent-infos--container">
                <div className="rent-infos">
                    <h2>{rent.title}</h2>
                    <p>{rent.location}</p>
                    <div className="rent-tags">
                        {
                            rent.tags.map((tag, key) => {
                                return (
                                    <div className="rent-tag" key={key}>{tag}</div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="rent-infos right">
                    <div className="rent-host">
                        <div className="rent-host--name">{rent.host.name}</div>
                        <div className="rent-host--picture"
                             style={{backgroundImage: 'url(' + rent.host.picture + ')'}}></div>
                    </div>
                    <div className="stars-container">
                        <img src="/images/red_star.svg" alt=""/>
                        <img src="/images/red_star.svg" alt=""/>
                        <img src="/images/red_star.svg" alt=""/>
                        <img src="/images/red_star.svg" alt=""/>
                        <img src="/images/red_star.svg" alt=""/>
                    </div>
                </div>
            </div>
            <div className="dropdown-container">
                <div className="rent-dropdown">
                    <div className="dropdown-header">
                        <p>Description</p>
                        <img src="/images/inactive_arrow.svg" alt=""/>
                    </div>
                    <div className="dropdown-content">
                        <p>{rent.description}</p>
                    </div>
                </div>
                <div className="rent-dropdown">
                    <div className="dropdown-header">
                        <p>Équipements</p>
                        <img src="/images/inactive_arrow.svg" alt=""/>
                    </div>
                    <div className="dropdown-content">
                        {
                            rent.equipments.map((equipement, key) => {
                                return (
                                    <p key={key}>{equipement}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article;
