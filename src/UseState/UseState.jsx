import React, { useState } from 'react'

const UseState = () => {
    const [counter, setCounter] = useState(0)
    const decreament=()=>{
          
        
          setCounter(counter-1);
         
    }
    const increament=()=>{
        setCounter(counter+1);
      
    }
  return (
    
      <>
      <div className='container'>
    <button class="btn btn-primary" type="submit" onClick={decreament} >-</button>
    <h3>{counter}</h3>
    <button class="btn btn-primary" type="submit" onClick={increament} >+</button>
    </div>
    </>
  )
}

export default UseState