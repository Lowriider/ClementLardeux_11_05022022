import {rents} from "../../datas/rents"
import {Link} from "react-router-dom";

const GetRents = () => {
    return (
        <div className="rent-cards--container">
            {
                rents.map((rent,key) => {
                    return (
                        <Link className="rent-card--link"
                            to={`/article/${key}/${rent.id}`}
                        key={key}
                        state={{from: rent}}>
                            <div className="rent-card">
                                <div className="rent-image" style={{backgroundImage: 'url(' + rent.pictures[0] + ')'}}></div>
                                <div className="rent-title--container">
                                    <h2 className="rent-title">{rent.title}</h2>
                                </div>
                            </div>
                        </Link>
                    )
            })
            }
        </div>
    )
}
export default GetRents
