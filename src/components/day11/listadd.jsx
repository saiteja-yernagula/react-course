
import { useState } from "react"

const Listadd=()=>{
    const [fruits,setFruits]= useState(["apple", "banana", "mango"])

    const addfruit=()=>{
        const newfruit=[...fruits,"newfruit"]
        setFruits(newfruit)
    }
    return(
        <>
        <h1>fruits list</h1>
        <div>
          <ol >
            {
                fruits.map((eachfruit,ind)=><li key={ind}>{eachfruit}</li>)
            }
            </ol>

            <button onClick={addfruit}>add new fruit</button>
        </div>
        </>
    )

}
export default Listadd