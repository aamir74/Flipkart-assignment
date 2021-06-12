import {useState} from "react"
import './Counter.css'
const Counter =(props)=>{
    
    const [value, setValue]=useState(props.default)
    return(
        <div className="counter">
            <button onClick={()=> setValue(value - 1)}>-</button>
            <h1>Counter</h1>
            <h1>{value}</h1>
            <button onClick={()=> setValue(value +1)}>+</button>
        </div>
    )
}
export default Counter