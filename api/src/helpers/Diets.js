const { Diet} = require("../db")
const axios = require("axios")
const {API_KEY} = process.env

const getDiets = async() => {
    //const api = await axios.get(https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100);

    const api = await axios.get("https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5");
    const diets = api.data.results?.map((r) => r.diets).flat()
    const setDiets = [...new Set(diets)]
    setDiets.forEach((diet) => {
        Diet.findOrCreate({
            where: { nombre: diet },
            defaults: {
                nombre: diet
            }
        })
    })
    return setDiets
}

module.exports = getDiets

