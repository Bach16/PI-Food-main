import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import {postRecipe,getDiets} from "../../redux/actions"
import "./newDietInput.css"




const NewDietInput = ({getDiets,diets,newDiet, setNewDiet, handleAddSubmit}) => {

   

    useEffect(() => {
        getDiets()
    },[])

    return (
        <form className="addDiet" onSubmit={(e) => handleAddSubmit(e)}>
            <label className="label" htmlFor="Diets">Diets</label>
                <select type="text" name='Diets' value={newDiet} onChange={(e) => setNewDiet(e.target.value)}>
                <option className="Diet" value={null} key = {null}>Add diet</option> 
                    {diets.length ? diets.map(e => {
                        return <option className="Diet" value={e.nombre} key = {e.id}>{e.nombre}</option> 
                    }): null }         
                </select>
                <button id="addButton" type="submit" aria-label="Add Diet">Add</button>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewDietInput)