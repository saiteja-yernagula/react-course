import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buychocAction, returnchocAction } from './action'
import { useEffect } from 'react'
import axios from 'axios'
import { addproductAction, deleteproductAction, productsAction } from './products/action'

function Day20() {

   const {products,counter}= useSelector(state=>state)

   const dispatch=useDispatch()
   

   useEffect(()=>{
    fetchdata()
   },[])


   async function fetchdata(){
    const res=await axios.get("https://dummyjson.com/products")
    dispatch(productsAction(res.data.products))

    
   }
   const buychoc=()=>{
    dispatch(buychocAction(3))
   }

   const returnchoc=()=>{
    dispatch(returnchocAction(3))
   }
   console.log(products.products,counter)


   const addprod=()=>{
    const newprod={
      "id": 31,
      "title": "samsung s23",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99
     }
    dispatch(addproductAction(newprod))
   }

   const delitem=(item)=>{
    dispatch(deleteproductAction(item.id))

   }
  return (
    <div>

      <div>
         <h1>example 1</h1>
        <div>total chocolates:{counter.totalchoc}</div>
        <div>avaialable chocolates: {counter.availchoc}</div>
        <button onClick={buychoc}>buy choc</button>
        <button onClick={returnchoc}>return choc</button>
      </div>

      <div>
        <h1>example 2</h1>
        <button onClick={addprod}>add product samsung s23</button>
        {
          products.products.map((val,ind)=>{
            return <div key={ind}>
              <h1>{val.title} 
              <button onClick={()=>{delitem(val)}}> del</button>
              </h1>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Day20