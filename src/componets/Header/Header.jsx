import React from 'react'
import './Header.scss'
import { ButtonCategories } from './ButtonCategories/ButtonCategories'
import { ShopingCar } from './Shopingcar/ShopingCar'
import { EmailOptions } from './EmailOptions/EmailOptions'

const Header = () => {


    return (
        <nav className="flex-row">

            <img className="icon-menu btn-menu-despegable" src="icons/icon_menu.svg" alt="menu icono" />


            <div className="categories-container flex-row">
                <figure className="logo">
                    <a href="./index.html"> <img src="Logos/logo_yard_sale.svg" alt="logo empresa yard sale" /> </a>
                </figure>

                <div className="categories flex-row">

                    <ButtonCategories name={"All"} />
                    <ButtonCategories name={"clothes"} />
                    <ButtonCategories name={"Electronics"} />
                    <ButtonCategories name={"Furnitures"} />
                    <ButtonCategories name={"Shoes"} />
                    <ButtonCategories name={"Others"} />

                </div>
            </div>

            <div className="options ">
                <ul>
                    <EmailOptions email={"platzi@example.com"} />
                    <ShopingCar totalProductsCar={2} />
                </ul>

            </div>



        </nav>
    )
}

export { Header }