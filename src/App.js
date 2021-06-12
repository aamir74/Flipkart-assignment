import { useState, useEffect, useCallback } from "react"
import ProfileList from './ProfileList'
import './App.css';
import Counter from "./Counter";
import productData from './components/productsData'
import MainHeader from './components/MainHeader'
import Filter from './components/Filter';
import ProductList from './components/ProductList';
import './components/Filter.css'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Cart from "./components/Cart";
//https://docs.google.com/document/d/1Um34Rb57HbfwwhV8ZLKb7CDR60u5XJ5hUAhuE6AtnFc/edit

const App = () => {
    const originalProduct = productData
    const [selectedBrand, setSelectedBrand] = useState([])
    const [productItems, setProductItems] = useState(productData)
    console.log(originalProduct)
    const ascPriceHandler = (e) => {
        console.log(e.target.checked)
        const ascProducts = [...productData]
        if (e.target.checked) {
            const a = ascProducts.sort(function (a, b) {
                return a.price - b.price
            })
            console.log(ascProducts)
            setProductItems(a)
        }
        else {
            console.log(productData)
            setProductItems(originalProduct)
        }
    }

    const descPriceHandler = (e) => {
        console.log(e.target.checked)
        const descProducts = [...productData]
        if (e.target.checked) {
            const a = descProducts.sort(function (a, b) {
                return b.price - a.price
            })
            setProductItems(a)
        }
        else {
            console.log(productData)
            setProductItems(originalProduct)
        }
    }


    const brandHandler = (e) => {
        console.log(productItems)
        console.log(e.target.value)
        setSelectedBrand([...selectedBrand, e.target.value])
        if (e.target.checked) {
            setProductItems([...productData].filter((p) => p.brand.includes(e.target.value)))
        }
        else {
            setProductItems(originalProduct)
        }

    }
    return (
        <><Router>
            <MainHeader />
            <Switch>
                <Route path="/" exact >
                    
                    <div className="content">
                        <div className="filter">
                            <h2>Filters</h2>
                            <div className="price-filter">
                                <p>Price</p>
                                <p><input type="checkbox" onClick={ascPriceHandler} />Low to High</p>
                                <p><input type="checkbox" onClick={descPriceHandler} />High to Low</p>

                            </div>
                            <div className="price-filter">
                                <p>Brand</p>
                                <p><input value="Levis" type="checkbox" onClick={brandHandler} />Levis</p>
                                <p><input value="Flying Machine" type="checkbox" onClick={brandHandler} />Flying Machine</p>
                                <p><input value="Denim" type="checkbox" onClick={brandHandler} />Denim</p>

                            </div>
                        </div>
                        <ProductList items={productItems} />
                    </div>
                </Route>
                <Route path="/cart" exact>
                    <Cart />
                </Route>
            </Switch>
        </Router>
        </>
    )
}
export default App;


// const Profilearr = [{
//     name: "Brett Lee",
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//     designation: "Bowler",
//     shortDescription: "Fast Arm"

// },
// {
//     name: "Gilchrist Lee",
//     image: "https://randomuser.me/api/portraits/men/2.jpg",
//     designation: "Batsmen",
//     shortDescription: "Left Handed"

// },{
//     name: "Tendulkar",
//     image: "https://randomuser.me/api/portraits/men/3.jpg",
//     designation: "Batsmen",
//     shortDescription: "Right Handed"

// }
// ]