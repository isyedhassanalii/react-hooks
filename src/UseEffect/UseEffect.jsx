
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const[windowWidth,setwindowWidth]= useState(window.innerWidth);
    const handleResize=()=>{
        setwindowWidth(window.innerWidth)
    }
    useEffect(() => {
   window.addEventListener('resize',handleResize);
   return()=>{
       window.removeEventListener('resize',handleResize);
   }
    }, [])
    

return(
    <div>{windowWidth}</div>
)
}

export default UseEffect



