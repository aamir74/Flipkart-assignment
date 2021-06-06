import React from 'react'
import Avatar from './Avatar'
import Card from './Card'
import './ProductItem.css'

const ProductItem = props => {
    console.log(props.name)
    return (
        <div className='user-item'>
            <div className='user-item__image'>
                <Avatar image={props.image} alt={props.name} />
            </div>
            <div className='user-item__info'>
                <h2>{props.brand} {props.name}</h2>
                <h3> ₹ {props.price}</h3>
            </div>
        </div>
    )
}

export default ProductItem