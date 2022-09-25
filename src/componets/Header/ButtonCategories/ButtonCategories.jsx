import React from 'react'
import './ButtonCategories.scss'

const ButtonCategories = ({ name }) => {

    return (
        <li>
            <a href="/">{name}</a>
        </li>
    )
}

export { ButtonCategories }