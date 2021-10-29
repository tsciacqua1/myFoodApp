import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDiets, postRecipe } from '../../redux/actions/actions'
import pacman from '../../img/pacman.gif'
import NavBar from '../NavBar/NavBar'
import './AddRecipe.css'

const AddRecipe = () => {

    const [recipe, setRecipe] = useState({
        title: '',
        summary: '',
        spoonacularScore: null,
        healthScore: null,
        instructions: '',
        diets: []
    })

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const handleChange = (e) => {
        e.preventDefault()
        setRecipe({
            ...recipe,
            [e.target.id]: e.target.value
        })
    }

    // const handleTitle = (e) => {
    //     e.preventDefault()
    //     // var reg = /^[a-zA-Z\s]*$/;
    //     // if(!reg.test(e.target.value)) {
    //     //     alert("Only letters and spaces are allowed in Title field");
    //     // } else {
    //         setRecipe({
    //             ...state,
    //             title: e.target.value
    //         })
    //     //}
    // }

    const handleCheckBox = (e) => {
        e.preventDefault()
        setRecipe({
            ...recipe,
            diets: [
                ...recipe.diets,
                e.target.value
            ]
        })
    }
    
    const onSubmitForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        await dispatch(postRecipe(recipe))
        setLoading(false)
        window.location.reload()
    }

    if(loading) return (<img src={pacman} alt="pacmanimg"/>)

    return (
        <div>
            <NavBar/>
            <header className='header'>CREATE NEW RECIPE</header>
            <form action="" onSubmit={onSubmitForm} id="form" class="topBefore">
                <div>
                    <input type="text" id='title' value={recipe.title} placeholder='TITLE' onChange={handleChange} required/>
                    <textarea type="text" id='summary' value={recipe.summary} placeholder='Summary here...' onChange={handleChange} required>
                        
                    </textarea>
                  
                    <input type="number" id='spoonacularScore' value={recipe.spoonacularScore} placeholder='Score' min='0' max='100' onChange={handleChange}/>
                    <input type="number" id='healthScore' value={recipe.healthScore} placeholder='Health Score' min='0' max='100' onChange={handleChange}/>
                   
                    
                    <textarea placeholder='Instructions here...' type="text" id='instructions' value={recipe.instructions} onChange={handleChange}>
                
                    </textarea>
                    <div className='diets'>
                        <ul>
                            {state.diets.map((el) => {
                                return (
                                    <div className='selection'>
                                    <input type="checkbox" value={el.name} onChange={handleCheckBox}/>
                                    <label>{el.name}</label>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                    <input type="submit" id='submit' value='Create Recipe'/>
                </div>
            </form>
        </div>
    )
}

export default AddRecipe
