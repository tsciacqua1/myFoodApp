const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getRecipes, getRecipeInfo } = require('./controller.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes', getRecipes)
router.get('/recipes/:id', getRecipeInfo)

module.exports = router;