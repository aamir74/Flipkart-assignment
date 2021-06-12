import { useState, useEffect } from 'react';
import Avatar from './Avatar';
import Card from './Card';

import './Cart.css';

const Cart = props => {
    const [savedProduct, setSavedProduct] = useState([])
    let storedData = JSON.parse(localStorage.getItem('cartProducts'))
    const productData = ([...storedData.products].map(v => ({ ...v, quantity: 1 })))
    let sum = 0;
    const [price, setPrice] = useState()
    const [product, setProduct] = useState(productData)

    const finalPrice = () => {
        product.map(a => {
            sum = sum + (a.price * a.quantity)
        })
        setPrice(sum)
        return sum
    }

    useEffect(() => {
        finalPrice()
    })

    const increaseQuantity = (id, q) => {
        product.forEach(p => {
            if (p.id === id) {
                p.quantity++
            }
        })
        finalPrice()
    }

    const decreaseQuantity = (id, q) => {
        product.forEach(p => {
            if (p.id === id) {
                p.quantity--
            }
        })
        finalPrice()
    }

    const removeCart = (p) => {
        const a = product.filter(a => a.id !== p.id)
        setProduct(a)
        finalPrice()
        localStorage.setItem('cartProducts', JSON.stringify({ products: a }))
    }

    const saveLater = (p) => {
        const a = product.filter(a => a.id != p.id)
        setProduct(a)
        product.map(a => {
            if (a.id === p.id) {
                savedProduct.push(a)
            }
        })
        finalPrice()
    }

    const removeSaved = (p) => {
        const a = savedProduct.filter(a => a.id !== p.id)
        setSavedProduct(a)
    }

    const addToCart = (p) => {
        removeSaved(p)
        const a = [...product]
        a.push(p)

        setProduct(a)
    }

    return (
        <>
            <div className="cart-content">
                <div className="cart">
                    <h3>My Cart</h3>
                    <ul className='cart-list'>
                        {product ? product.map(product => {
                            return (
                                <div className='cart-item'>
                                    <img src={product.image} alt={product.name} />
                                    <div className="item Description">
                                        <h2>{product.brand} {product.name}</h2>
                                        <h3> ₹ {product.price * product.quantity}</h3>
                                    </div>
                                    <div className="quantity">
                                        <button onClick={() => increaseQuantity(product.id, product.quantity)}>+</button>
                                        <h1>{product.quantity}</h1>
                                        {product.quantity === 1 ? <button disabled>-</button> : <button onClick={() => decreaseQuantity(product.id, product.quantity)}>-</button>}
                                    </div>
                                    <div className="remove-item">
                                        <button onClick={() => removeCart(product)}>Remove from Cart</button>
                                        <button onClick={() => saveLater(product)}>Save for Later</button>
                                    </div>
                                </div>
                            )
                        }) : <h1>No Items in the Cart</h1>}
                    </ul>
                </div>
                <div className='cart-price'>
                    <h1>Price Details</h1>
                    <div className="pricing">
                        <h2>Price {product.length} item</h2>
                        <p>₹ {price}</p>
                    </div>
                    <div className="pricing">
                        <h2>Delivery Charges</h2>
                        <p>FREE</p>
                    </div>
                    <div className="total-amount">
                        <h1>Total Amount ₹ {price}</h1>
                    </div>
                </div>
            </div>
            <div className="cart">
                <h3>Saved Items</h3>
                <ul className='cart-list'>
                    {savedProduct ? (savedProduct.map(product => {
                        return (
                            <div className='cart-item'>
                                <img src={product.image} alt={product.name} />
                                <div className="item Description">
                                    <h2>{product.brand} {product.name}</h2>
                                    <h3> ₹ {product.price * product.quantity}</h3>
                                </div>
                                <div className="remove-item">
                                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                                    <button onClick={() => removeSaved(product)}>Remove</button>
                                </div>
                            </div>
                        )
                    })) : <h1>No Items</h1>}
                </ul>
            </div>
        </>
    );
};

export default Cart;