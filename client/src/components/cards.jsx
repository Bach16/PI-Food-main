import React from "react"
import {connect} from "react-redux"
import {getRecipes} from "../redux/actions"
import {useEffect} from "react";
import Card from "./card";
import Loading from "./loading"
import NavBar from "./navbar"




const Cards = (props) => {

    useEffect(() => {
        props.getRecipes()
    }, []) 
    if(props.recipes.length) {
        return (
            
            <>
                <NavBar/>

                {
                    
                    props.recipes.map(
                        (recipe) =>  <Card
                        key= {recipe.id}
                        id={recipe.id}
                        nombre= {recipe.nombre}
                        healthScore = {recipe.healthScore}
                        image = {recipe.image}
                        /> 
                    ) 
                }          
            </>
        )
    } else {
        return (
            <>
            <Loading/>
            </>
        )       
    }   
}

const mapStateToProps = (state) => {
    return{
        recipes: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getRecipes:() => dispatch(getRecipes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)