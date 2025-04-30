import React from 'react'
import { useNavigate } from 'react-router-dom'

function Invalidscreen() {
   const navigate= useNavigate()
    const navigatohome=()=>{
        navigate("/")
    }
  return (
    <div>
        <h5>url not found, 404 status</h5>
        <button onClick={navigatohome}>click to home</button>
    </div>
  )
}

export default Invalidscreen