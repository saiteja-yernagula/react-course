import React from 'react'

function Memochild() {
    console.log("child re renders everytime")
  return (
    <div>Memochild</div>
  )
}

export default React.memo(Memochild)