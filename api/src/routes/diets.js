const {Diet} = require("../db")
const express = require("express")
const axios = require("axios")
const getDiets = require("../helpers/Diets")


const dietsRouter = express.Router()

dietsRouter.get("/", async(req,res) => {    
    try {
        const diets = await Diet.findAll();
        if(diets) return res.status(200).send(diets)
        else return res.status(404).send("no diet found")
    } catch (error) {
        return res.status(404).send(error.menssage);

    }
})

module.exports = dietsRouter;
