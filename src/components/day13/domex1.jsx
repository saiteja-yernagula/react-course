import { useEffect, useState } from "react"

function Domex1(){
    const [count,setCount]=useState(0)
    const [count1,setCount1]=useState(0)
    // without dependancy
    // useEffect(()=>{
    //     document.title=`current count ${count}`
    //     console.log("use effect")
    // })

    //with an empty array
    // useEffect(()=>{
    //     document.title=`current count ${count}`
    //     console.log("use effect")
    // },[])

    //with an passed state
    useEffect(()=>{
        document.title=`current count ${count}`
        console.log("use effect")
    },[count])
    return(
        <>
        <h1>count value {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>increment</button>
        <div>-------------------------</div>
        
        <h1>count value {count1}</h1>
        <button onClick={()=>{setCount1(count1+1)}}>increment 2</button>
        </>
    )
}
export default Domex1