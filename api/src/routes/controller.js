require('dotenv').config();
const axios = require('axios')
const { YOUR_API_KEY } = process.env;
const { Recipe, Diet } = require('../db.js')

// get recipes
const getRecipes = async (req, res) => {
        try {
            const { name } = req.query
            if(name){
                const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&number=100`)
                var newArray = []
                response.data.results.map(el => {
                    if(el.title.toLowerCase().includes(name)){
                        newArray.push(el)
                    }
                })
                if(newArray.length > 0){
                    return res.status(200).json(newArray)
                }
            }
            res.sendStatus(404)

        } catch (error) {
            res.send(error.message)
        }
}

// get info from specific recipe
const getRecipeInfo = async (req, res) => {
    try {
        const { id } = req.params
        if(id){
            const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${YOUR_API_KEY}`)
            const { title, image, dishTypes, diets, summary, spoonacularScore, healthScore, instructions } = response.data
            var obj = {
                title, 
                image, 
                dishTypes, 
                diets, 
                summary, 
                spoonacularScore, 
                healthScore, 
                instructions
            }
            res.status(200).json(obj)
        }
    } catch (error) {
        res.send(error.message)
    }
}

// get diet types
const getDietTypes = async (req, res) => {
    try {
        const dietList = await Diet.findAll()
        res.status(200).json({dietList})
    } catch (error) {
        res.send(error.message)
    }
}

// post new recipe
const postRecipe = async (req, res) => {
    try {
        const { name, summary, score, healthScore, instructions } = req.body
        if(name && summary){
            const newRecipe = await Recipe.create({
                name,
                summary,
                score, 
                healthScore, 
                instructions
            })
            return res.status(200).json(newRecipe)
        }
        res.sendStatus(400)
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = {
    getRecipes,
    getRecipeInfo,
    getDietTypes,
    postRecipe
}