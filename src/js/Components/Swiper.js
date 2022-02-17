import React, {useState} from "react";

const Swiper = ({pictures}) => {
    const [current, setCurrent] = useState(0)
    console.log(current)
    const nextSlide = () => {
        setCurrent(current === pictures.length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? pictures.length - 1 : current - 1)
    }
    if(!Array.isArray(pictures) || pictures.length <= 0) {
        return null
    }
    return (
        <div className="swiper-container">
            <div className="arrows-container">
                <img onClick={prevSlide} src="/images/swiper_arrow_left.svg" alt=""/>
                <img onClick={nextSlide} src="/images/swiper_arrow_right.svg" alt=""/>
            </div>
            {
                pictures.map((picture, key) => {
                    return (
                        <div key={key} className="swiper-image" style={{backgroundImage: 'url(' + picture + ')'}}/>
                    )
                })
            }
        </div>
    )
}
export default Swiper
