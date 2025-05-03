
import axios from "axios";
import { useEffect, useState } from "react";


function useAxios(url){
   const [res,setResult]= useState([])
   useEffect(()=>{
    fetchData()
   },[])

   async function fetchData(){
    const result=await axios.get(url )
    setResult(result.data)
   } 

   return [res]
}

export default useAxios
