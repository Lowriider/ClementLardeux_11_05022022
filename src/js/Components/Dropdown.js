import {useState} from "react";

const Dropdown = ({rent}) => {

    const [isDescriptionCollapseActive, setIsDescriptionCollapseActive] = useState('')
    const [isEquimentsCollapseActive, setIsEquimentsCollapseActive] = useState('')

    const toggleDropdown = (e) => {
        if(e.target.nextElementSibling.classList.contains('dropdown-description'))
        setIsDescriptionCollapseActive(isDescriptionCollapseActive === '' ? 'active' : '')
        else
            setIsEquimentsCollapseActive(isEquimentsCollapseActive === '' ? 'active' : '')
    }
    return (
        <div className="dropdown-container">
            <div className="rent-dropdown">
                <div className={`dropdown-header ${isDescriptionCollapseActive}`} onClick={(e) => toggleDropdown(e)}>
                    <p>Description</p>
                    <img src="/images/inactive_arrow.svg" alt=""/>
                </div>
                {
                    <div className={`dropdown-description ${isDescriptionCollapseActive}`}>
                        <p style={{display: isDescriptionCollapseActive ? 'block' : 'none'}}>{rent.description}</p>
                    </div>
                }
            </div>
            <div className="rent-dropdown">
                <div className={`dropdown-header ${isEquimentsCollapseActive}`} onClick={(e) => toggleDropdown(e)}>
                    <p>Équipements</p>
                    <img src="/images/inactive_arrow.svg" alt=""/>
                </div>
                <div className={`dropdown-equipments ${isEquimentsCollapseActive}`}>
                    {
                        rent.equipments.map((equipment, key) => {
                            return (
                                <p style={{display: isEquimentsCollapseActive ? 'block' : 'none'}} key={key}>{equipment}</p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Dropdown
