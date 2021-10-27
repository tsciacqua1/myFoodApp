const initialState = {
    recipes: [],
    diets: [],
    searched: [],
    userRecipes: [],
    recipeInfo: {}
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GET_RECIPES":
            return {
                ...state,
                recipes: action.payload
            }

        case "GET_RECIPE_BY_NAME":
            return {
                ...state,
                searched: action.payload
            }

        case 'GET_RECIPE_INFO': {
            return {
                ...state,
                recipeInfo: action.payload
            }
        }

        case "GET_DIETS": {
            return {
                ...state,
                diets: action.payload
            }
        }

        case "POST_RECIPE": {
            return {
                ...state,
                userRecipes: action.payload
            }
        }

        case 'ALPH_FILTER': {
            return {
                ...state,
                recipes: action.payload
            }
        }

        case 'SCORE_FILTER': {
            return {
                ...state,
                recipes: action.payload
            }
        }

        case 'DIET_FILTER': {
            return {
                ...state,
                recipes: action.payload
            }
        }
    
        default:
            return state
    }
}

export default rootReducer