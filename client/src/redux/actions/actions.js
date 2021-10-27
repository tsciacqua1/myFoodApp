import axios from 'axios'

export const getRecipes = () => {
    return async (dispatch) => {
        try {
            const data = await axios.get('/allrecipes')
            dispatch({
                type: 'GET_RECIPES',
                payload: data.data.results
            })
        } catch (error) {
            console.error(error)
        }
    }
}

export const getRecipeByName = (name) => {
    return async (dispatch) => {
        try {
            const data = await axios.get(`/recipes/?name=${name}`)
            dispatch({
                type: 'GET_RECIPE_BY_NAME',
                payload: data.data
            })
        } catch (error) {
            console.error(error)
        }
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
    return async dispatch => {
        try {
            const data = await axios.get(`/allrecipes?alph=${value}`)
            dispatch({
                type: 'ALPH_FILTER',
                payload: data.data
            })
        } catch (error) {
            console.error(error)
        }
    }
}

export const scoreFilter = (value) => {
    return async dispatch => {
        try {
            const data = await axios.get(`/allrecipes?score=${value}`)
            dispatch({
                type: 'SCORE_FILTER',
                payload: data.data
            })
        } catch (error) {
            console.error(error)
        }
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
