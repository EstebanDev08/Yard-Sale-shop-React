import React from 'react'
import './Home.scss'
import { Header } from '../../componets/Header/Header'
import { ProductCard } from '../../componets/ProductCard/ProductCard'

const Home = () => {
    return (
        <>
            <Header />
            <section class="main-container">
                <div class="cards-container">
                    <ProductCard name={"bici"} precio={2500} />
                    <ProductCard name={"bici"} precio={2500} />

                    <ProductCard name={"bici"} precio={2500} />
                    <ProductCard name={"bici"} precio={2500} />
                    <ProductCard name={"bici"} precio={2500} />
                    <ProductCard name={"bici"} precio={2500} />

                </div>
            </section>
        </>

    )
}

export { Home }