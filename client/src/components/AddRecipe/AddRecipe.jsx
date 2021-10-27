import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postRecipe } from '../../redux/actions/actions'
import pacman from '../../img/pacman.gif'

const AddRecipe = () => {

    const [recipe, setRecipe] = useState({
        name: '',
        summary: '',
        score: null,
        healthScore: null,
        instructions: '',
        diets: []
    })
    const [dietTypes, setDietTypes] = useState([])
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

    const handleCheckBox = (e) => {
        e.preventDefault()
        setDietTypes([
            ...dietTypes,
            e.target.value
        ])
    }

    const onSubmitForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        await dispatch(postRecipe(recipe))
        setLoading(false)
    }

    if(loading) return (<img src={pacman} alt="pacmanimg"/>)

    return (
        <div>
            <form action="" onSubmit={onSubmitForm}>
                <div>
                    <input type="text" id='name' value={recipe.name} placeholder='Name' onChange={handleChange}/>
                    <input type="text" id='summary' value={recipe.summary} placeholder='Summary' onChange={handleChange}/>
                    <input type="number" id='score' value={recipe.score} placeholder='Score' min='0' max='10' onChange={handleChange}/>
                    <input type="number" id='healthScore' value={recipe.healthScore} placeholder='Health Score' min='0' max='100' onChange={handleChange}/>
                    <input type="text" id='instructions' value={recipe.instructions} placeholder='Instructions' onChange={handleChange}/>
                    <div>
                        <ul>
                            {state.diets.map((el) => {
                                return (
                                    <>
                                    <input type="checkbox" value={el.name} onChange={handleCheckBox}/>
                                    <a>{el.name}</a><br />
                                    </>
                                )
                            })}
                        </ul>
                    </div>
                    <input type="submit" value='Create Recipe'/>
                </div>
            </form>
            <div>{}</div>
        </div>
    )
}

export default AddRecipe
