import React, { useState } from 'react'
import './ProductCard.scss'
import addCarImg from '@icons/bt_add_to_cart.svg'

const ProductCard = ({ product }) => {

    const [cart, setCart] = useState([]);
    const handleClick = () => {
        setCart([]);
    }


    return (
        <div className="product-card">
            <img src={product.images[0]} alt={product.title} />
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={handleClick}>
                    <img src={addCarImg} alt="add to car" />
                </figure>

            </div>
        </div>
    )
}

export { ProductCard }