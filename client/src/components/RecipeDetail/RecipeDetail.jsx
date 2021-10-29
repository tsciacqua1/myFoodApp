import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getRecipeInfo } from '../../redux/actions/actions'
import pacman from '../../img/pacman.gif'
import rightarrow from '../../img/rightarrow.png'
import NavBar from '../NavBar/NavBar'
import './RecipeDetail.css'

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
            <NavBar/>
      
            <div className='details'>
                <img src={state.recipeInfo.image} alt={state.recipeInfo.title} /><br />
                <div className='rightside'>
                    <div className="columns">
                    <div className='dishtypes'>
                    <h3>Dish Types</h3>
                  {state.recipeInfo.dishTypes?.map((el, i) => {
                        return (
                            <>
                            <img src={rightarrow} alt="arrow" /><p key={i}>{el}</p>
                            </>
                        )
                    })}
                </div>

                <div className='diets'>
                    <h3>Diets</h3>
                    {state.recipeInfo.diets?.map((el, i) => {
                        return (
                            <div>
                            <img src={rightarrow} alt="arrow" /><p key={i}>{el}</p>
                            </div>
                        
                        )
                    })}
                </div>
                <div className='score'>
                    <h3>Score</h3>
                    <span>{state.recipeInfo.spoonacularScore}</span>
                </div>
                <div className='healthscore'>
                    <h3>Health Score</h3>
                    <span>{state.recipeInfo.healthScore}</span>
                </div>
                    </div>
                <h1>{state.recipeInfo.title}</h1>
                <div className="text">
                <div className='summary'>
                    <h3>Summary</h3>
                    <p>{state.recipeInfo.summary}</p>
                </div>
                <div className='instructions'>
                    <h3>Instructions</h3>
                    <p>{state.recipeInfo.instructions}</p>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail
