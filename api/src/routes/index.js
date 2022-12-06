const { Router } = require('express');
const { where } = require('sequelize');
const recipeRouter = require("./recipes")
const dietsRouter = require("./diets")

const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

router.use("/recipes", recipeRouter)
router.use("/diets", dietsRouter)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);





module.exports = router;
