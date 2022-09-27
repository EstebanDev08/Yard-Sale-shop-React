import React from 'react'
import './ProductDetail.scss'

const ProductDetail = () => {
    return (
        <section className="product-detail-container menu-despegable">

            <div className="product-detail">
                <div className="product-detail-close">
                    <img src="./icons/icon_close.png" alt="close" />
                </div>
                <img src="https://api.lorem.space/image/furniture?w=640&amp;h=480&amp;r=6701" alt="Sleek Frozen Bike" />
                <div className="product-info">
                    <p>$93</p>
                    <p>Sleek Frozen Bike</p>
                    <p>The Football Is Good For Training And Recreational Purposes</p>
                    <button className="primary-button add-to-cart-button">
                        <img src="./icons/bt_add_to_cart.svg" alt="add to cart" />
                        Add to cart
                    </button>
                </div>
            </div>
        </section>
    )
}

export { ProductDetail }