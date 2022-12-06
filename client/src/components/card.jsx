import { Link } from "react-router-dom"
import "./card.css"


const Card = ({id,nombre,healthScore,image}) => {
    return (        
        <div className="card">
            <img src={image} alt="imagen" className="imagen"/>
            <div className="text">
                <Link to={`/recipe/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <h2>{nombre}</h2>
                </Link>
                    <h2>{healthScore}</h2>
            </div>
        </div>     
    )
} 

export default Card