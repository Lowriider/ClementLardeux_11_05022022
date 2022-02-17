import MainHeader from "../Layouts/MainHeader";
import {Link} from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="view--not-found">
           <MainHeader/>
            <div className="not-found--container">
                <img src="/images/404.svg" alt=""/>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/">Retourner sur la page d’accueil</Link>
            </div>
        </div>
    )
}

export default ErrorPage
