import React from "react"
import NavBar from "./navbar"
import {getRecipe} from "../redux/actions"
import {connect} from "react-redux"
import { useEffect } from "react"

const Recipe = (props) => {

    useEffect(() => {
        props.getRecipe(props.match.params.id)
    }, []) 
    let contador = 0
    if(props.recipe.analyzedInstructions && props.recipe.analyzedInstructions[0]) {
        return (<>
            <div className="Recipe">
                <NavBar/>
                <h3>name: {props.recipe.title}</h3>
                <h3>resumen: {props.recipe.summary}</h3>
                <h3>healthScore: {props.recipe.healthScore}</h3>
                <h3>steps: {props.recipe.analyzedInstructions[0].steps.map(e => {
                    contador++
                    return <p key={e.number}>step {contador}: {e.step}</p>
                })}</h3>
            </div>
            </>)
    } else {
        return(<>
            <div className="Recipe">
                <NavBar/>
                <h3>nombre: {props.recipe.title}</h3>
                <h3>resumen: {props.recipe.summary}</h3>
                <h3>healthScore: {props.recipe.healthScore}</h3>
            </div>
            </>
        )
    }     
        
         
        
    
}

const mapStateToProps = (state) => {
    return{
        recipe: state.recipe
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getRecipe:(id) => dispatch(getRecipe(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
