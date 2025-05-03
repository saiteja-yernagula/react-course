import { useState } from "react";



function useCounter(initial,val){
    const [count,setCount]=useState(initial)
    const handleinc=()=>{
        setCount(count+val)
    }

    return [count, handleinc]
}

export default useCounter