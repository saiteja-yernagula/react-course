import React from 'react'

function Callchildbtn({children,onClick}) {
  console.log(children)
  console.log(onClick)
  return (
    <div>
    <button onClick={onClick}>{children}</button>
      
    </div>
  )
}

export default React.memo(Callchildbtn)