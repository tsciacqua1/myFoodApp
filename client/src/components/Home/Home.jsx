import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getDiets, getRecipes } from '../../redux/actions/actions'
import Filters from '../Filters/Filters'
import NavBar from '../NavBar/NavBar'
import Recipes from '../Recipes/Recipes'
import './Home.css'

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        let apiCall = async () => {
            dispatch(await getRecipes())
            dispatch(await getDiets())
        }
        apiCall()
    }, [])
    
    return (
        <div>
            <NavBar/>
            <Filters/>
            <Recipes/>
        </div>
    )
}

export default Home
