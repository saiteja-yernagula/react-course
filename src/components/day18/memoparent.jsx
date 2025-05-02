import React from 'react'
import { useState } from 'react'
import Memochild from './memochild'

function Memoparent() {
    const [count,setCount]=useState(0)
  return (
    <div>
        <div>Memoparent count is {count}</div>
        <button onClick={()=>setCount(count+1)}>inc</button>
        <Memochild/>
    </div>
  )
}

export default Memoparent