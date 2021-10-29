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
                searched: state.recipes.filter(el => el.title.toLowerCase().includes(action.payload.toLowerCase()))
            }

        case 'GET_RECIPE_INFO': 
            return {
                ...state,
                recipeInfo: action.payload
            }
        

        case "GET_DIETS": 
            return {
                ...state,
                diets: action.payload
            }
        

        case "POST_RECIPE": 
            return {
                ...state,
                userRecipes: action.payload
            }
        

        case 'GET_USER_RECIPES': 
            return {
                ...state,
                recipes: state.recipes.concat(action.payload)
            }
        
        case 'ALPH_FILTER': {
            let data = state.recipes.sort((a, b) => a.title.localeCompare(b.title))
            let newPayload = ''
            if(action.payload === 'A-Z') newPayload = data
            else if(action.payload === 'Z-A') newPayload = data.reverse()
            return {
                ...state,
                recipes: newPayload
            }
        }
    
        case 'SCORE_FILTER': 
            let data = state.recipes.sort((a, b) => a.spoonacularScore - b.spoonacularScore)
            let newPayload = ''
            if(action.payload === 'asc') newPayload = data
            else if(action.payload === 'desc') newPayload = data.reverse()
            return {
                ...state,
                recipes: newPayload
            }
        
        case 'DIET_FILTER': 
            return {
                ...state,
                recipes: action.payload
            }
        
        default:
            return state
    }
}

export default rootReducer