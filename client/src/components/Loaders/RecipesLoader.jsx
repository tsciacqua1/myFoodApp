import { useDispatch } from 'react-redux'
import { getRecipes } from '../../redux/actions/actions'

const RecipesLoader = () => {
    const dispatch = useDispatch()
    return (
        dispatch(getRecipes())
    )
}

export default RecipesLoader
