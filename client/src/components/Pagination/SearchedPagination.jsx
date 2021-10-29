import React from 'react'
import { useSelector } from 'react-redux'
import './SearchedPagination.css'

const SearchedPagination = (props) => {

    const state = useSelector(state => state)
    const { recipesPerPage, paginate } = props

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(state.searched.length / recipesPerPage); i++) {
       pageNumbers.push(i)
    }

    return (
        <div>
            <div className='pagination'>
                <ul className='pageNumbers'>
                    {pageNumbers.map(el => {
                        return (
                            <li key={el} className='number'>
                                <a href="!#" onClick={() => paginate(el)}>
                                    {el}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SearchedPagination
