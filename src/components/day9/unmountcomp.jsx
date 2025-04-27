import { Component } from "react";


class ParentComp extends Component{
    constructor(){
        super()
        this.state={
            istrue:true
        }
    }

 togglecomp=()=>{
    this.setState({
    istrue:!this.state.istrue
    })
 }

    render(){
        return(
            <>
            <button onClick={this.togglecomp}>click to change</button>
                {
               this.state.istrue?
                <Child/>:
                <h1>child is invisible</h1>
                }
            </>

        )
    }
}
export default ParentComp

class Child extends Component{
    componentWillUnmount(){
        alert("comp child is removed")
        console.log("we can use to clear the memory leaks")
    }
    render(){
        return(
            <h1>child is visible</h1>
        )
    }
}
