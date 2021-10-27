import React from 'react'
import { useSelector } from 'react-redux'

const SearchedPagination = (props) => {

    const state = useSelector(state => state)
    const { recipesPerPage, paginate } = props

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(state.searched.length / recipesPerPage); i++) {
       pageNumbers.push(i)
    }

    return (
        <div>
            <ul>
                {pageNumbers.map(el => {
                    return (
                        <li key={el}>
                            <a href="!#" onClick={() => paginate(el)}>
                                {el}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SearchedPagination