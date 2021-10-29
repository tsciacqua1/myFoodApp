import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDbRecipes, getRecipeByName } from '../../redux/actions/actions'
import Recipe from '../Recipe/Recipe'
import './Recipes.css'
import pacman from '../../img/pacman.gif'
import Pagination from '../Pagination/Pagination'
import SearchedPagination from '../Pagination/SearchedPagination'

const Recipes = () => {

    const state = useSelector(state => state)
    const inputRef = useRef(null)
    const dispatch = useDispatch()
    
    const [searching, setSearching] = useState(false)
    const [loading, setLoading] = useState(false)
    const [term, setTerm] = useState('')

    const [currentPage, setCurrentPage] = useState(1)
    const [recipesPerPage] = useState(9)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputRef.current.value){
            setSearching(true)
            setTerm(inputRef.current.value)
            inputRef.current.value = ''
        } else {
            alert('Ingrese un nombre')
        }
    }

    const indexOfLastRecipe = currentPage * recipesPerPage
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
    const currentRecipes = state.recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
    const currentSearchedRecipes = state.searched.slice(indexOfFirstRecipe, indexOfLastRecipe)
    

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        if(term){
            const apiCall = async () => {
                setLoading(true)
                await dispatch(getRecipeByName(term))
                await dispatch(getDbRecipes(term))
                setLoading(false)
            }
            apiCall()
        }
    }, [term])
    
    if(loading){
        return (
            <img src={pacman} alt="pacmanimg" />
        )
    }

    return (
        <div>
            <div id="cover">
                <form method="get" action="" onSubmit={handleSubmit}>
                    <div class="tb">
                    <div class="td">
                        <input type="text" placeholder="Search Recipe" ref={inputRef} required/>
                    </div>
                    <div class="td" id="s-cover">
                        <button type="submit">
                        <div id="s-circle"></div>
                        <span></span>
                        </button>
                    </div>
                    </div>
                </form>
                </div>
                
            {searching ? (<div className='recipecard'>
            {currentSearchedRecipes?.map((el) => {
                return (
                    <Recipe data={el} key={el.id}/>
                )
            })}
            <SearchedPagination recipesPerPage={recipesPerPage} paginate={paginate}/>
        </div>) 
        : 
        (<div className='recipecard'>
            {currentRecipes?.map((el) => {
                return (
                    <Recipe data={el} key={el.id} className='recipe'/>
                )
            })
            }
            <Pagination recipesPerPage={recipesPerPage} paginate={paginate}/>
        </div>
        )}
        </div>
    )
}
export default Recipes
