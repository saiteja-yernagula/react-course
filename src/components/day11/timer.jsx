
import { useState } from "react"
const Timer=()=>{

    const [timer,setTimer]=useState(100)

    const handleTimer=()=>{
        setInterval(()=>{
            setTimer((t)=>t-1)

        },1000)
    }
    return (
        <>
        <h1>timer value {timer}</h1>
        <button onClick={handleTimer}>start timer</button>

        </>
    )
}

export default Timer