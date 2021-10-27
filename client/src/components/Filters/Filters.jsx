import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { alphFilter, dietFilter, getRecipes, scoreFilter } from '../../redux/actions/actions'

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
        <div>
            <div className='sideBar'>
                <div>
                    <span>Diet Type</span>
                    <select id="dietType" onChange={handleDietType}>
                        <option disabled selected>Select</option>
                        {state.diets.map((el) => {
                            return(
                                <option value={el.name}>{el.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <span>Alphabetically</span>
                    <select id="alphabetically" onChange={handleAlph}>
                        <option disabled selected>Select</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                </div>
                <div>
                    <span>Score</span>
                    <select id="score" onChange={handleScore}>
                        <option disabled selected>Select</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
                <div>
                    <button onClick={handleRemoveFilter}>Remove Filters</button>
                </div>
            </div>
        </div>
    )
}

export default Filters
