import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const ERROR = "ERROR"
export const GET_RECIPE = "GET_RECIPE"
export const POST_RECIPE = "POST_RECIPE"
export const GET_DIETS = "GET_DIETS"



export const getRecipes = () => {
    return function(dispatch){
        try {            
            axios.get("http://localhost:3001/recipes")
            .then((response) => dispatch({type:GET_RECIPES, payload: response.data}))
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}

export const getRecipe = (id) => {
    return function(dispatch){
        try {            
            axios.get(`http://localhost:3001/recipes/${id}`)
            .then((response) => dispatch({type:GET_RECIPE, payload: response.data}))
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}

export const postRecipe = (recipe) => {
    return async function (dispatch){
        try {
         const response = await axios.post("http://localhost:3001/recipes", recipe)
         dispatch({
            type: POST_RECIPE, payload: response.data
         })
        } catch (error) {
            dispatch({type:ERROR, payload: error})   
        }
    }
}

export const getDiets = () => {
    return function(dispatch){
        try {            
            axios.get("http://localhost:3001/diets")
            .then((response) => dispatch({type:GET_DIETS, payload: response.data}))
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}