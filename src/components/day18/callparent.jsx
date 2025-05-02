import React, { useCallback, useState } from 'react'
import Callchildbtn from './callchildbtn'

function Callparent({children,onClick}) {
    const [age,setAge]=useState(0)
    const [sal,setSal]=useState(1000)
    
    
    const handleage=useCallback(()=>{
        setAge(age+1)
    },[age])

    
    const handlesal=useCallback(()=>{
        setSal(sal+100)
    },[sal])
  return (

    <div>
        <div> age is {age}</div>
        <div> sal is {sal}</div>
        <Callchildbtn onClick={handleage}>click to change age</Callchildbtn>
        <Callchildbtn onClick={handlesal}>click to change sal</Callchildbtn>
    </div>
  )
}

export default Callparent