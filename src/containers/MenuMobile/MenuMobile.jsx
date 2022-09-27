import React from 'react'
import "./MenuMobile.scss"
import { BtnMenu } from '../../componets/MenuMobile-Cpns/BtnMenu'

const MenuMobile = () => {
    return (
        <div className="menu-mobile">
            <h2>Categories</h2>
            <ul>
                <BtnMenu text={"All"} />
                <BtnMenu text={"Clothes"} />
                <BtnMenu text={"Electronics"} />
                <BtnMenu text={"Furnitures"} />
                <BtnMenu text={"Toys"} />
                <BtnMenu text={"Others"} />
            </ul>

            <ul>
                <BtnMenu text={"My orders"} />
                <BtnMenu text={"My account"} />

            </ul>

            <ul className="info-account">
                <li > MyEmail@example.com</li>

                <BtnMenu text={"Sing out"} />

            </ul>
        </div>
    )
}

export { MenuMobile }