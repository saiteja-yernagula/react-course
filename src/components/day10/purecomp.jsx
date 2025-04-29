import { Component, PureComponent } from "react";


class Parentco extends Component{

    constructor(){
        super()
        this.state={
            counter:0
        }
    }

     inc=()=>{
       this.setState({
        counter:this.state.counter+1
       })
    }
    render(){
        console.log("parent")
        return(
            <>
            <h1>hello</h1>
            <h2>{this.state.counter}</h2>
            <button onClick={this.inc}>+</button>
            {/* <Childco counter={this.state.counter}/>   this will cause rerending because
             here we are passing prope to the child */}

            </>
        )
    }
}
export default Parentco


class Childco extends PureComponent{
    render(){
         console.log("child")
        return(
            <>
            <h1>iam child</h1>
            </>
        )
    }
}