import React, { useState } from 'react'

function Counter() {
  const [counter,setCounter]=useState(30)
    const onIncrementBtn=()=>{
         setCounter(counter+1)
}
const onDecrementBtn=()=>{
    if(counter!==0){
        setCounter(counter-1)
    }
}
const onResetBtn=()=>{
    setCounter(0)
}
  return (
    <div style={{textAlign:"center",backgroundColor:"pink",}}>
        <h1>{counter}</h1>
        <div style={{textAlign:"center"}}>
            <button onClick={onIncrementBtn} style={{padding:"10px",margin:"10px",backgroundColor:"green",color:"white",borderRadius:"10px"}}>Increment</button>
            <button onClick={onDecrementBtn} style={{padding:"10px",margin:"10px",backgroundColor:"red",color:"white",borderRadius:"10px"}}>Decrement</button>
            <button onClick={onResetBtn} style={{padding:"10px",margin:"10px",backgroundColor:"yellow",color:"black",borderRadius:"10px"}}>Reset</button>
        </div>
    </div>
  )
}

export default Counter