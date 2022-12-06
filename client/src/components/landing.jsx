import "./landing.css"
import React from "react"
import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <>
        <div className="landing">
            <button className="boton"><Link to="/home"  style={{ color: 'inherit', textDecoration: 'inherit'}}>Proyecto Individual</Link></button>            
        </div>
        </>
    )
}

export default Landing
