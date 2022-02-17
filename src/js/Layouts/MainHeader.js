import {Link} from "react-router-dom";

const MainHeader = () => {
    return (
        <div className="header-container">
            <div className="nav-bar">
                <Link to="/">
                    <img path={"/"} src="/images/logo.svg" alt=""/>
                </Link>
                <nav className="nav-links">
                    <Link to="/">Accueil</Link>
                    <Link to="/about">A Propos</Link>
                </nav>
            </div>
        </div>
    )
}

export default MainHeader
