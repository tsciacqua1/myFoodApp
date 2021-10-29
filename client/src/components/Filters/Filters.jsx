import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { alphFilter, dietFilter, getRecipes, scoreFilter } from '../../redux/actions/actions'
import './Filters.css'

const Filters = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const handleDietType = async (e) => {
        e.preventDefault()
        await dispatch(dietFilter(e.target.value))
    }
    const handleAlph = async (e) => {
        e.preventDefault()
        await dispatch(alphFilter(e.target.value))
    }
    const handleScore = async (e) => {
        e.preventDefault()
        await dispatch(scoreFilter(e.target.value))
    }
    const handleRemoveFilter = async (e) => {
        e.preventDefault()
        await dispatch(getRecipes())
        window.location.assign('/home/!')
    }

    return (
        <div >
            <div className='sidebar'>
            <div class="select">
                <select id="dietType" onChange={handleDietType}>
                    <option disabled selected>Diet Type</option>
                    {state.diets.map((el) => {
                    return(
                    <option value={el.name}>{el.name}</option>
                    )
                    })}
                </select>
                <div class="select_arrow"></div>
            </div>
            <div class="select">
                <select id="alphabetically" onChange={handleAlph}>
                <option disabled selected>Alphabetically</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                </select>
                <div class="select_arrow"></div>
            </div>
                <div class="select">
                <select id="score" onChange={handleScore}>
                <option disabled selected>Score</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
                </select>
                <div class="select_arrow"></div>
            </div>
            <div className='remove'>
                <a href="#" class="myButton" onClick={handleRemoveFilter}>Remove Filters</a>
            </div>
            </div>
        </div>
    )
}

export default Filters
