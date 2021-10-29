const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllRecipes, getRecipes, getRecipeInfo, postRecipe, getDietTypes, getUserRecipes } = require('./controller.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/allrecipes', getAllRecipes)
router.get('/recipes', getRecipes)
router.get('/recipes/:id', getRecipeInfo)
router.get('/types', getDietTypes)
router.get('/userrecipes', getUserRecipes)
router.post('/recipe', postRecipe)

module.exports = router;