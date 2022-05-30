import React, { useState } from 'react'

const UseStateWithEvent = () => {
    const [value, setValue] = useState("test")
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
  return (
   <div className='my-3'>
   <h1>testing another useState</h1>
   <input type="text" onChange={handleChange}/>
   {value}
   </div>
  )
}

export default UseStateWithEvent