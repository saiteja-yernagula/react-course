import React from 'react'
import Comp1 from './comp1'
import { createContext } from 'react'
import { useState } from 'react'

export const store=createContext()

function Day16() {

  const [data,setData]=useState("john")

  const messageUpdater=()=>{
    setData("jessy")
  }

  return (
    <div>

  <store.Provider value={{data,fun:messageUpdater}}>
      <Comp1/>
   
  </store.Provider>
    </div>
  )
}

export default Day16