

const Jsxfunctional=()=>{

    let obj={
        name:"John",
        age:21
    }
    return(
        <div>

        <h1>function jsx component</h1>
        <div>person name : { obj.name}</div>

        <div>jsx rules</div>
        {/* every comp should have a container */}
        {/* {every attribute must be in camelcase} */}
        <button onClick={()=>{alert("hello")}}>click</button>
        
        {/* every tag must be closed */}
        <br />
        <input type="text" />

        <input></input>
        {/* {class is replace by className} */}
        <div className="container"></div>
        </div>
    )
}

export default Jsxfunctional