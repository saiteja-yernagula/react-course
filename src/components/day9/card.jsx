function CardC({products}){
    console.log(products)
    
   
    return  <div style={{display:"flex",justifyContent:"space-evenly"}}>
    {
        products.map((val,ind)=>
        <div key={ind} >
            <div >
            <h1>{val.title}</h1>
            <p>{val.description}</p>
            </div>
        </div>)
    }
    </div>
    
}

export default CardC