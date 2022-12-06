import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {postRecipe,getDiets} from "../../redux/actions"
import { connect } from "react-redux"
import NewDietInput from "./NewDietInput"
import Content from "./content"
import FormInput from "./FormInput"
import "./Form.css"



const Form = (props) => {
    
    const [input, setInput] = useState({
        nombre: "",
        resumen:"",
        steps:"",
        healtScore:"",
        diets:[], 
    })

    const inputs = [
        {
            id:1,
            name:"Name",
            type:"text",
            placeholder:"Name",
            label:"Name"
        },
        {
            id:2,
            name:"Summary",
            type:"text",
            placeholder:"Summary",
            label:"Summary"
        },
        {
            id:3,
            name:"Steps",
            type:"text",
            placeholder:"Steps",
            label:"Steps"
        }
    ]


    const [items, setItems] = useState([])
    const [newDiet, setNewDiet] = useState("")

    const [error, setError] = useState({})

    const addDiet = (item) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1
        const myNewItem = {id, item}
        const listItems = [...items,myNewItem]
        setItems(listItems)
    }
    
    useEffect(() => {
        props.getDiets()
    },[input])



    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
    }


    const handleAddSubmit = (e) => {
        e.preventDefault()
        if(!newDiet) return;
        addDiet(newDiet)
        setNewDiet("")
    }
    
    const onChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }

    console.log(input);

    return (
        <>
        <div className="container">
         <h1>Create recipe</h1>
            <form onSubmit={handleSubmit}>
                <button type="submit">Create</button>
                {inputs.map((i) => (
                    <FormInput
                    key={i.id} 
                    {...i} 
                    value={input[i.name]} 
                    onChange={onChange}/>
                ))}
            </form>
        <NewDietInput newDiet={newDiet} setNewDiet={setNewDiet} handleAddSubmit={handleAddSubmit} /> 
        </div>
            <Content items={items} handleDelete={handleDelete} />

        </>
    )
}

const mapStateToProps = (state) => {
    return{
        post: state.post,
        diets: state.diets
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        postRecipe:() => dispatch(postRecipe()),
        getDiets:() => dispatch(getDiets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)