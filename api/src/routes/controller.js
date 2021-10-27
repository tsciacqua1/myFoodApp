require('dotenv').config();
const axios = require('axios')
const { YOUR_API_KEY } = process.env;
const { Recipe, Diet } = require('../db.js')

//get all recipes
const getAllRecipes = async (req, res) => {
    try {
        const { alph, score, diet } = req.query
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`)
        
        if(alph) {
            let data = response.data.results.sort((a, b) => a.title.localeCompare(b.title))
            if(alph === 'A-Z') return res.status(200).json(data)
            if(alph === 'Z-A') return res.status(200).json(data.reverse())
        }
        if (score) {
            let data = response.data.results.sort((a, b) => a.spoonacularScore - b.spoonacularScore)
            if(score === 'asc') return res.status(200).json(data)
            if(score === 'desc') return res.status(200).json(data.reverse())
        }
        if(diet){
            if(diet === 'Vegetarian') {
                let data = response.data.results.filter(el => el.vegetarian)
                return res.status(200).json(data)
            }
            else if(diet === 'Lacto-Vegetarian' || diet === 'Ovo-Vegetarian') {
                let data = response.data.results.filter(el => el.diets.includes('lacto ovo vegetarian'))
                return res.status(200).json(data)
            }
            else if(diet === 'Paleo'){
                let data = response.data.results.filter(el => el.diets.includes('paleolithic'))
                return res.status(200).json(data)
            }
            else if(diet === 'Pescetarian'){
                let data = response.data.results.filter(el => el.diets.includes('pescatarian'))
                return res.status(200).json(data)
            }
            else if(diet === 'Low FODMAP'){
                let data = response.data.results.filter(el => el.lowFodmap)
                return res.status(200).json(data)
            }
            else if(diet === 'Whole30'){
                let data = response.data.results.filter(el => el.diets.includes('whole 30'))
                return res.status(200).json(data)
            } 
            
            let data = response.data.results.filter(el => el.diets.includes(diet.toLowerCase()))
            return res.status(200).json(data)
            
        }
        
        res.status(200).json(response.data)
    } catch (error) {
        res.send(error.message)
    }
}

// get recipes by name
const getRecipes = async (req, res) => {
        try {
            const { name } = req.query
            if(name){
                const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`)
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
        const { name, summary, score, healthScore, instructions, diets } = req.body
        if(name && summary){
            const newRecipe = await Recipe.create({
                name,
                summary,
                score, 
                healthScore, 
                instructions,
                diets
            })
            return res.status(200).json(newRecipe)
        }
        res.sendStatus(400)
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = {
    getAllRecipes,
    getRecipes,
    getRecipeInfo,
    getDietTypes,
    postRecipe
}