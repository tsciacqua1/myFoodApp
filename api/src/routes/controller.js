require('dotenv').config();
const axios = require('axios')
const {
    YOUR_API_KEY,
  } = process.env;
const { Recipe } = require('../db.js')
// get recipes from API
const getRecipes = async (req, res) => {
        try {
            const { name } = req.query
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
            res.status(404).json({error: 'No recipe found'})
        } catch (error) {
            console.error(error.message)
        }
        
}

// get info from specific diet
const getRecipeInfo = async (req, res) => {
    try {
        const { id } = req.params
        const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${YOUR_API_KEY}`)
        var obj = {
            vegetarian: response.data.vegetarian,
            vegan: response.data.vegan,
            glutenFree: response.data.glutenFree,
            summary: response.data.summary,
            diets: response.data.diets
        }
        res.status(200).json(obj)
    } catch (error) {
        console.error(error.message)
    }
}

// post new recipe
const postRecipe = async (req, res) => {
    try {
        const { name, summary, score, healthylevel, steps } = req.body
        if(name && summary && score && healthylevel && steps){
            const response = await Recipe.create({
                id: 56,
                name,
                summary, 
                score, 
                healthylevel, 
                steps
            })
            res.status(200).json(response)
        }
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getRecipes,
    getRecipeInfo,
    postRecipe
}