const express = require('express');
const {Recipe} = require("../db")
const axios = require("axios")
const {getRecipeByID, getRecipes} = require("../controllers/Recipe")

const recipeRouter = express.Router()

 recipeRouter.get("/:id", async (req,res) => {
    try {
        const {id} = req.params
        if(id.length > 10){
            const recipes = await Recipe.findByPk(id);
             res.status(200).send(recipes) 
        }else if (id.length < 10) {
            const recipesApi = await getRecipeByID(id)
            res.status(200).send(recipesApi)
        } else throw new Error ("no se encontro la receta")
    } catch (error) {
        res.status(400).send(error.menssage)
    }
}) 
recipeRouter.get("/", async (req,res) => {    
    try {        
        const recipes = await Recipe.findAll();
        const apiRecipes = await getRecipes()
        const response = [...apiRecipes,...recipes]
        res.status(200).send(response)         
    } catch (error) {
        res.status(400).send(error.menssage)
    } 
})


recipeRouter.post("/", async(req,res) => {    
    try {
        const {nombre,resumen, diets} = req.body;    
        if( !nombre || !resumen) {
            return res.status(404).send("faltan datos obligatorios");
        } else {
            const newRecipe = await Recipe.create(req.body);
            res.status(201).send(newRecipe)            
        }        
    } catch (error) {
        return res.status(404).send(error.menssage);

    }
})

module.exports = recipeRouter;