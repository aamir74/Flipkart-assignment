import { Link } from 'react-router-dom'
import './MainHeader.css'
const MainHeader = ()=> {
    return (
        <div className="header">
            
            <h2>Flipkart</h2>
            <Link to={"/cart"} exact >
                <p>Cart</p>
            </Link>
        </div>
    )
}
export default MainHeader