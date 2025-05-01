import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

function Usememocomp() {
  const [count,setCount]=  useState(10)
  const [count1,setCount1]=  useState(10)

  const isEven=useMemo(()=>{
    console.log("it is calling")
    for(let i=0;i<10000;i++){
        console.log(i)
    }
    return count%2==0?"even":"odd"
  },[count])

  return (
    <div>
        <h3>counter a {isEven}</h3>
        <div>{count}</div>
        <button onClick={()=>setCount(count+1)}>inc</button>

        <div>{count1}</div>
        <button onClick={()=>setCount1(count1+1)}>inc</button>
    </div>
  )
}

export default Usememocomp