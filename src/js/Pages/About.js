import React, {useState} from "react";
import MainHeader from "../Layouts/MainHeader";
import MainFooter from "../Layouts/MainFooter";
import Dropdown from "../Components/Dropdown";

const About = () => {

    const listDropdown = [
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.',
        'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
    ]

    return (
        <div className="view--about">
            <MainHeader/>
            <div className="header-banner-container">
                <div className="header-banner" style={{backgroundImage: 'url(/images/banner_about.svg)'}}>
                </div>
            </div>
            <div className="about-container">
                    <div className="about-dropdown">
                        <Dropdown datas={listDropdown[0]} title={"Fiabilité"}/>
                    </div>
                    <div className="about-dropdown">
                        <Dropdown datas={listDropdown[1]} title={"Respect"}/>
                    </div>
                    <div className="about-dropdown">
                        <Dropdown datas={listDropdown[2]} title={"Service"}/>
                    </div>
                    <div className="about-dropdown">
                        <Dropdown datas={listDropdown[3]} title={"Sécurité"}/>
                    </div>
            </div>
            {/*<MainFooter/>*/}
        </div>
    )
}

export default About;
