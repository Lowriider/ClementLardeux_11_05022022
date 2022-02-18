import React, {useState} from "react";
import MainHeader from "../Layouts/MainHeader";
import MainFooter from "../Layouts/MainFooter";
import Dropdown from "../Components/Dropdown";

const About = () => {

    const listDropdown = [
        {
            value: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
            title: 'Fiabilité'
        },
        {
            value: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
            title: 'Respect'
        },
        {
            value: 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.',
            title: 'Sécurité'
        },
        {
            value:'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
            title: 'Service'
        },
    ]

    return (
        <div className="view--about">
            <MainHeader/>
            <div className="header-banner-container">
                <div className="header-banner" style={{backgroundImage: 'url(/images/banner_about.svg)'}}>
                </div>
            </div>
            <div className="about-container">
                        {
                            listDropdown.map(dropdown => {
                                return (
                                    <div className="about-dropdown">
                                        <Dropdown datas={dropdown.value} title={dropdown.title}/>
                                    </div>
                                )
                            })
                        }
            </div>
            <MainFooter/>
        </div>
    )
}

export default About;
