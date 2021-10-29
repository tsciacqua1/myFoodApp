import axios from 'axios'

export const getRecipes = () => {
    return async (dispatch) => {
        try {
            const data = await axios.get('/allrecipes')
            dispatch({
                type: 'GET_RECIPES',
                payload: data.data.results
            })
            const data2 = await axios.get('/userrecipes')
            dispatch({
                type: 'GET_USER_RECIPES',
                payload: data2.data
            })
        } catch (error) {
            console.error(error)
        }
    }
}

export const getRecipeByName = (name) => {
    return {
        type: 'GET_RECIPE_BY_NAME',
        payload: name
    }
}

export const getDbRecipes = (name) => {
    return {
        type: 'GET_DB_RECIPES',
        payload: name
    }
}

export const getRecipeInfo = (id) => {
    return async (dispatch) => {
        try {
            const data = await axios.get(`/recipes/${id}`)
            dispatch({
                type: 'GET_RECIPE_INFO',
                payload: data.data
            })
        } catch (error) {
            console.error(error)
        }
    }
}
 
export const getDiets = () => {
    return async (dispatch) => {
        try {
            const data = await axios.get('/types')
            dispatch({
                type: 'GET_DIETS',
                payload: data.data.dietList
            })
        } catch (error) {
            console.error(error)
        }
    }
}

export const postRecipe = (recipe) => {
    return async (dispatch) => {
        try {
            const data = await axios.post('/recipe', recipe)
            dispatch({
                type: 'POST_RECIPE',
                payload: data.data
            })
        } catch (error) {
            console.error(error)
        }
    }
}

export const alphFilter = (value) => {
    return {
        type: 'ALPH_FILTER',
        payload: value
    }
}

export const scoreFilter = (value) => {
    return {
        type: 'SCORE_FILTER',
        payload: value
    }
}

export const dietFilter = (value) => {
    return async dispatch => {
        try {
            const data = await axios.get(`/allrecipes?diet=${value}`)
            dispatch({
                type: 'DIET_FILTER',
                payload: data.data
            })
        } catch (error) {
            console.error(error)
        }
    }   
}


