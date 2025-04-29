import { useState } from "react"

const Usestatecomp=()=>{
   let [count,setCount]= useState(0)

   const handleCount=(val)=>{
    //1st way taking arrow function
    // setCount(()=>{return c+1})// if it depends on previous value

    // // 2nd way
    // setCount(count+1)//recommended
    // setCount(count+1)//recommended

    switch (val) {
        case "increment":
            setCount(count+1)
            break;
        case "decrement":
            setCount(count-1)
            break;
        case "reset":
            setCount(0)
            break;
        default:
            break;
    }
   }
    return (
        <>
            <h1>current counter value {count}</h1>
            <button onClick={()=>handleCount("increment")}>increment</button>
            <button onClick={()=>handleCount("decrement")}>decrement</button>
            <button onClick={()=>handleCount("reset")}>decrement</button>
        </>
    )
}

export default Usestatecomp