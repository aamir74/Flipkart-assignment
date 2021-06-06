import ProductItem from "./ProductItem"
import "./ProductList.css"
const ProductList = (props) => {
    console.log("product-list")
    return(
        <div className="product-list">
             <ul className='users-list'>
            {props.items.map(product => {
                return <ProductItem
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}    
                brand={product.brand}         
                />
            })}
        </ul>
        </div>
    )
}
export default ProductList