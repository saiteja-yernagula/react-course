import axios from "axios"
import { useEffect, useState } from "react"
import Spincomp from "../day8/spin"

function Apiex2(){

    const [products,setProducts]=useState([])

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/")
        .then((response)=>{
            setProducts(response.data)
            console.log(products)
        })
    },[])

    return(
        <>
        <div>useeffect example</div>
        {
            products.length>0?
            products.map((eachobj,ind)=>{
                return (
                    <div key={ind}>
                        <h2>

                        {eachobj.title}
                        </h2>
                        <img src={eachobj.image} alt=""  width='100px' height='100px'/>
                    </div>
                )
            }):<Spincomp/>
        }
        </>
    )

}
export default Apiex2