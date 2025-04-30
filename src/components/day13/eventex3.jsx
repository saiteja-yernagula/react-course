import { useState } from "react"
import { useEffect } from "react"


function  Eventex3(){

    const [x,setX]=useState(null)
    useEffect(()=>{
        window.addEventListener("mousemove",(event)=>{
            setX(event.clientX)
            console.log("event")
            console.log(event.clientX,"x axis")
            console.log(event.clientY,"y axis")
        })

        //act as a unmounting
        return ()=>{
            console.log("unmounting")
        }
 
    },[])
    return(
        <h1>
           x axis {x}
        </h1>
    )
}

export default Eventex3