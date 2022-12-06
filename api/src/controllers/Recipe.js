const axios = require("axios")
const {Recipe} = require("../db")



const apiResponse = async() => {
  return axios.get("https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5")                   
} 


const getRecipes = async() => {

    const apiData = await apiResponse()
   return apiData.data.results.map((e) => {
        return {
            id: e.id,
            nombre: e.title,
            healthScore: e.healthScore,
            image: e.image            
        }                
    })
}


const getRecipeByID = async(id) => {
    const apiData = await apiResponse()    
        const result = await apiData.data.results.find((recipe) => recipe.id == id)
        if (result) return result   
        return {error: "Recipe not found"} 

}
module.exports = {
    getRecipes,
    getRecipeByID,
}
