import React from 'react'
import { store } from './day16'
import { useContext } from 'react'

function Comp2() {
    const result=useContext(store)
  return (
    <div>Comp2 the name is {result.data}
    
    <button onClick={result.fun}>
        click to change
    </button>
    
    </div>
  )
}

export default Comp2