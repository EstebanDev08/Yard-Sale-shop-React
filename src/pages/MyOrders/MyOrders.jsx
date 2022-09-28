import React from 'react'
import './MyOrders.scss'

const MyOrders = () => {
    return (
        <section className="order-container">
            <h3>My orders</h3>

            <div className="Card-orders">
                <div className="info-order">

                    <p>
                        <span>04-25-2022</span>
                        <span> <br /> 6 articles</span>
                    </p>


                    <p className="precio">
                        <span>$500.00</span>
                        <span> {">"} </span>
                    </p>



                </div>
            </div>
        </section>
    )
}

export { MyOrders }