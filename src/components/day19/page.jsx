import React from 'react'
import useCounter from './useCounter'

function Page() {
const [count,setCount]=useCounter(10,3)
const [sal,setSal]=useCounter(1000,200)
  return (
    <div>
        count is {count}

        <button onClick={setCount}>click to increment</button>
        <br/>
        

        salary is {sal}
        <button onClick={setSal}>click to increase</button>

    </div>
  )
}

export default Page