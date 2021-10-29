import React from 'react'
import { Link } from 'react-router-dom'
import './Recipe.css'

const Recipe = (props) => {

    const { data } = props

    return (
        <div className='recipeItem'>
            <Link to={`/recipes/${data.id}`} className='link'>
                <img src={data.image} alt={data.id} />
                <p className='title'>{data.title}</p>
                <span>
                    {data.diets?.map((el) => {
                        return (
                            <li key={data.id}>* {el}</li>
                        )
                    })}
                </span>
            </Link>
        </div>
    )
}

export default Recipe
