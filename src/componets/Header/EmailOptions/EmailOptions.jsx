import React from 'react'

const EmailOptions = ({ email, toggleMenu }) => {

    const handelToggle = () => {
        toggleMenu(toggle => !toggle)


    }




    return (
        <li onClick={handelToggle} className="navbar-email">{email}</li>

    )
}

export { EmailOptions }