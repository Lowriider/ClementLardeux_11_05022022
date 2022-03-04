import {useState} from "react";

const Dropdown = ({datas, title}) => {

    const [isCollapseActive, setIsCollapseActive] = useState('')

    return (
            <>
                <div className={`dropdown-header ${isCollapseActive}`} onClick={() => setIsCollapseActive(isCollapseActive === '' ? 'active' : '')}>
                    <p>{title}</p>
                    <img src="/images/inactive_arrow.svg" alt=""/>
                </div>
                <div className={`dropdown-content ${isCollapseActive}`}>
                    {
                        (typeof datas === "object") ?
                            datas.map((data, key) => {
                                return (
                                    <p style={{display: isCollapseActive ? 'block' : 'none'}}
                                       key={key}>{data}</p>
                                )
                            })
                            :
                            <p style={{display: isCollapseActive ? 'block' : 'none'}}>{datas}</p>
                    }
                </div>
            </>
    )
}
export default Dropdown
