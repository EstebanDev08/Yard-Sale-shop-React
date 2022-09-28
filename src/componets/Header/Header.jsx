import React, { useState } from 'react'
import './Header.scss'
import { ButtonCategories } from './ButtonCategories/ButtonCategories'
import { ShopingCar } from './Shopingcar/ShopingCar'
import { EmailOptions } from './EmailOptions/EmailOptions'
import menuIcon from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import { MenuMobile } from '../../containers/MenuMobile/MenuMobile'
import { MenuDesktop } from '../../containers/MenuDescktop/MenuDesktop'
import { ShoppingCar } from '../../containers/ShoppingCar/ShoppingCar'

const Header = () => {

    const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
    const handelToggle = () => {
        setToggleMenuMobile(!toggleMenuMobile)
    }

    const [toggleMenuDesktop, setToggleMenuDesktop] = useState(false);

    const [toggleShoppingCar, setShoppingCar] = useState(false);



    return (
        <nav className="flex-row">
            {toggleMenuMobile ? <MenuMobile /> : null}
            <img onClick={handelToggle} className="icon-menu btn-menu-despegable" src={menuIcon} alt="menu icono" />



            <div className="categories-container flex-row">
                <figure className="logo">
                    <a href="/"> <img src={logo} alt="logo empresa yard sale" /> </a>
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
                    <EmailOptions toggleMenu={setToggleMenuDesktop} email={"platzi@example.com"} />
                    <ShopingCar toggleMenu={setShoppingCar} totalProductsCar={2} />
                </ul>

            </div>

            {toggleMenuDesktop ? <MenuDesktop /> : null}

            {toggleShoppingCar ? <ShoppingCar /> : null}

        </nav>
    )
}

export { Header }