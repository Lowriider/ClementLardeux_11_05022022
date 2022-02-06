import {Link} from "react-router-dom";

const MainHeader = () => {
    return (
        <div className="header-container">
            <div className="nav-bar">
                <img src="/images/logo.svg" alt=""/>
                <nav className="nav-links">
                    <Link to="/">Accueil</Link>
                    <Link to="/about">A Propos</Link>
                </nav>
            </div>
        </div>
    )
}

export default MainHeader
