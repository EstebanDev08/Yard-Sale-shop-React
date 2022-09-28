import React from 'react'
import './Home.scss'
import { Header } from '../../componets/Header/Header'
import { ProductList } from '../../containers/ProductList/ProductList'

const Home = () => {
    return (
        <>
            <Header />
            <section className="main-container">
                <ProductList />
            </section>
        </>

    )
}

export { Home }