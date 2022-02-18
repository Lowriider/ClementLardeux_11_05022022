import {Link} from "react-router-dom";

const MainFooter = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <Link to="/">
                    <img src="/images/white_logo.svg" alt=""/>
                </Link>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>

        </div>
    )
}
export default MainFooter
