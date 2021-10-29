import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getRecipes } from '../../redux/actions/actions'

const RecipesLoader = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        let apiCall = async () => {
            dispatch(await getRecipes())
        }
        apiCall()
    }, [])
}

export default RecipesLoader
