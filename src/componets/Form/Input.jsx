import React from 'react'
import './formStyles.scss'

const Input = ({ type, id, placeholder, value }) => {

    let classes;

    if (type === 'email') {
        classes = 'input input-email'
        id = type
    } else if (type === 'password') {
        classes = 'input input-password'
        placeholder = "*********"
        if (!id) {
            id = type
        }
    } else if (type === 'submit') {
        classes = 'primary-button login-button'
    } else if (id === 'name') {
        classes = 'input input-name'
        type = "text"
    }

    return (
        <input type={type} id={id} placeholder={placeholder} className={classes} value={value} />

    )
}

export { Input }