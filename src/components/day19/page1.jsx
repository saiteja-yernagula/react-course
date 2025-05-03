import React from 'react'
import useAxios from './useaxios'

function Page1() {
    const url = "https://fakestoreapi.com/products/"
    const [products] = useAxios(url) 

    console.log(products)
    return (
        <div>
            {
                products.map((val, id) => {
                    return (
                        <div key={val.id}>{val.title}</div>
                    )
                })
            }
        </div>
    )
}

export default Page1