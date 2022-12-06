import React from "react"
import NavBar from "../navbar"
import Form from "./form"
import "./create.css"


const Create = () => {
    return (
        <>
        <NavBar/>
        <div className="create">
            <Form/>            
        </div>
        </>
    )
}

export default Create