import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getRecipeInfo } from '../../redux/actions/actions'
import pacman from '../../img/pacman.gif'

const RecipeDetail = () => {

    const [loading, setLoading] = useState(false)
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        const apiCall = async (id) => {
            setLoading(true)
            await dispatch(getRecipeInfo(id))
            setLoading(false)
        }
       apiCall(id)
    }, [])

    if(loading) return <img src={pacman} alt="pacmanimg" />

    return (
        <div>
            <img src={state.recipeInfo.image} alt={state.recipeInfo.title} /><br />
            <span>{state.recipeInfo.title}</span><br /><br />

            <span>{state.recipeInfo.dishTypes}</span><br /><br />
            <span>{state.recipeInfo.diets}</span><br /><br />

            <span>{state.recipeInfo.summary}</span><br /><br />
            <span>{state.recipeInfo.spoonacularScore}</span><br /><br />
            <span>{state.recipeInfo.healthScore}</span><br /><br />
            <span>{state.recipeInfo.instructions}</span>
        </div>
    )
}

export default RecipeDetail
