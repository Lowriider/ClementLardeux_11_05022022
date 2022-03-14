import React, {useState} from "react";

const Swiper = ({pictures}) => {
    const [current, setCurrent] = useState(0)

    const nextSlide = () => {
        setCurrent(current === pictures.length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? pictures.length - 1 : current - 1)
    }
    if (!Array.isArray(pictures) || pictures.length <= 0) {
        return null
    }

    return (
        <div className="swiper-container">
            <div className="swiper-image" style={{backgroundImage: 'url(' + pictures[current] + ')'}}/>
            {
                pictures.length > 1 &&
                <>
                    <div className="arrows-container">
                        <img onClick={prevSlide} src="/images/swiper_arrow_left.svg" alt=""/>
                        <img onClick={nextSlide} src="/images/swiper_arrow_right.svg" alt=""/>
                    </div>
                    <div className="counter-container">
                        <div className="counter">{current + 1}/{pictures.length}</div>
                    </div>
                </>
            }
        </div>
    )
}
export default Swiper
