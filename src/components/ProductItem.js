import { React, useState, useEffect } from 'react'
import Avatar from './Avatar'
import Card from './Card'
import './ProductItem.css'
import { Link } from 'react-router-dom'
const cartProduct = []
const ProductItem = props => {
    const cartHandler = () => {
        let storedData = JSON.parse(localStorage.getItem('cartProducts'))
        if (storedData) {
            storedData.products.map(a => { cartProduct.push(a) })
        }
        console.log(props)
        cartProduct.push(props)
        console.log(cartProduct)
        localStorage.setItem('cartProducts', JSON.stringify({ products: cartProduct }))
    }
    return (
        <div className='user-item'>
            <div className='user-item__image'>
                <Avatar image={props.image} alt={props.name} />
            </div>
            <div className='user-item__info'>
                <h2>{props.brand} {props.name}</h2>
                <h3> ₹ {props.price}</h3>
            </div>
            <Link to={'/cart'} exact>
                <button onClick={cartHandler}>Add to Cart</button>
            </Link>
        </div>
    )
}

export default ProductItem