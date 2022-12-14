import { GET_RECIPE, GET_RECIPES, POST_RECIPE, ERROR, GET_DIETS } from "./actions"

const initialState = {
    recipes: [],
    error: {},
    recipe: {},
    post: {},
    diets: {}
}

const rootReducer =(state=initialState,action) =>{
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        case GET_RECIPE:
            return {
                ...state,
                recipe: action.payload
            }    
        case POST_RECIPE: 
            return {
                ...state,
                post: action.payload
            }  
        case GET_DIETS:             
            return {
                ...state,
                diets: action.payload
            }    
        default:
            return {...state}
    }
}

export default rootReducer