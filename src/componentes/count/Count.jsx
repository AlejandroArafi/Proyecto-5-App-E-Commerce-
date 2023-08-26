import { useState } from "react"
import './Count.css'


export const Count = () => {
// logica contador

const [contador, setcontador] = useState(0)

const increment = ()=>{
    setcontador(contador + 1)
}

const decrement =()=>{
    setcontador(contador -1)
}
// fin logica contador


// inicio logica modal

  return (
        <div className="app">
        <div className="counter">
      <button onClick={decrement}>-</button>
      <span>{contador}</span>
      <button onClick={increment}>+</button>
    </div>
  </div>
 
    
  )
}
