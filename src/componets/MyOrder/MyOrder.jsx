import React from 'react'

const MyOrder = () => {
    return (
        <section className="order-container my-order">
            <h3>My order</h3>
            <div className="info-order">

                <p>
                    <span>04-25-2022</span>
                    <span> <br /> 6 articles</span>
                </p>


                <p className="precio">
                    $560.00
                </p>


            </div>
            <div className="card-container">
                <div className="card-product">
                    <figure>
                        <img src="products_img/product1.jpg" />
                    </figure>
                    <p>labial</p>
                    <p className="precio">$120.00</p>
                </div>

                <div className="card-product">
                    <figure>
                        <img src="products_img/product1.jpg" />
                    </figure>
                    <p>labial</p>
                    <p className="precio">$120.00</p>
                </div>

            </div>
        </section>
    )
}

export { MyOrder }