import React from 'react'
import './Header.scss'
import { ButtonCategories } from './ButtonCategories/ButtonCategories'
import { ShopingCar } from './Shopingcar/ShopingCar'
import { EmailOptions } from './EmailOptions/EmailOptions'

const Header = () => {


    return (
        <nav>
            <img src="./icons/icon_menu.svg" alt="menu" className="menu" />

            <div className="navbar-left">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

                <ul>
                    <ButtonCategories name={"All"} />
                    <ButtonCategories name={"Clothes"} />
                    <ButtonCategories name={"Electronics"} />
                    <ButtonCategories name={"Furnitures"} />
                    <ButtonCategories name={"Toys"} />
                    <ButtonCategories name={"Others"} />

                </ul>
            </div>

            <div className="navbar-right">
                <ul>
                    <EmailOptions email={"platzi@example.com"} />
                    <ShopingCar totalProductsCar={2} />
                </ul>
            </div>
        </nav>
    )
}

export { Header }