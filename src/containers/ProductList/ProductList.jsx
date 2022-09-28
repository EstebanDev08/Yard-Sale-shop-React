
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ProductCard } from '../../componets/ProductCard/ProductCard'
import { useGetProducts } from '../../hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products';


const ProductList = () => {

    const products = useGetProducts({ API });

    return (
        <div className="cards-container">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export { ProductList }