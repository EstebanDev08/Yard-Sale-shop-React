import React from 'react'
import './styles.scss'

const BtnMenu = ({ text }) => {
    return (
        <li className="hover">
            <a href="#">{text}</a>
        </li>
    )
}
export { BtnMenu }