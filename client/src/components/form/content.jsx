import React from "react"
import "./content.css"

const Content = ({items,handleDelete}) => {
    



    return (
        <>
            <ul className="conteiner">
                {items.map((item) => (
                    <li className="item" key ={item.id}>
                        <label>{item.item}</label>
                        <button className="button" onClick={() => handleDelete(item.id)}>x</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Content
