import { Component } from "react";


class Circlecomp extends Component {
    constructor() {
        super()
        this.state = {
            circles: []
        }
    }

    addcircle=()=>{
        let newcrc=[...this.state.circles,false]
        this.setState({
            circles:newcrc
        })
    }

    colorchange=(ind,val)=>{
        this.state.circles[ind]=!val
        let new1=this.state.circles
       console.log(ind,new1)
       this.setState({
        circles:new1
    })
    }

    delitem=(ind)=>{
       let new2=this.state.circles
       new2.splice(ind,1)
       this.setState({
        circles:new2
    })
        console.log(ind,new2)
    }

    render() {
        return (
            <>
                <h1>circl comp</h1>
                <button onClick={this.addcircle}>click to add</button>
                <div> 
                {  
                    this.state.circles.length>0?
                    this.state.circles.map((val,ind) => (
                        <div key={ind}>

                        <button  style={{ width: "200px", height: "200px", border: "1px solid red", borderRadius: "50%", background:val?"red":"white" }} onClick={()=>this.colorchange(ind,val)}>
                        </button>
                          <button style={{width:"20px"}} onClick={()=>this.delitem(ind)}> -</button>
                          </div>
                    )
                ):
                    <h1>no circles</h1>
                }
                </div>
            </>
        )
    }
}

export default Circlecomp