import { Component } from "react";


class Countercomp extends Component{

 
    constructor(){
        //using super ?
        super()
        this.state={
            count: 0,
            isSubscribed:false
        }
    }

    increment=()=>{

        // set state takes two parameters
        this.setState({
           count:this.state.count+1
        },()=>{
           console.log(`Count updated to: ${this.state.count}`)
        })
   
       //  one step behind thats why recommended above arrow function
        console.log(this.state.count)
       }
   

       decrement=()=>{
        this.setState({
            count:this.state.count-1
        },()=>{
            console.log(`Count updated to: ${this.state.count}`)
        })
       }

       reset=()=>{
        this.setState({
            count: 0
        })
       }

       step=(val)=>{
        this.setState({
            count: this.state.count + val
        })

       }

       changeviewer=()=>{
        this.setState({
            isSubscribed:!this.state.isSubscribed
        })
       }


    render(){
        console.log("component rerendering")
        return(
            <>
            <h3>{this.props.msg}</h3>
            <h6 >
                <button onClick={this.changeviewer}>
                 {
                    this.state.isSubscribed? "unsubscribe": "subscribe"
                 }
                </button>
            </h6>

            {
                this.state.isSubscribed? 
                <>
                <h4>{this.state.count}</h4>
                {/* method binding */}
                <button onClick={this.increment}>increment</button>
    
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.reset}>reset</button>
    
                {/* in this case the syntax is different - here passing arguments */}
                <button onClick={()=>this.step(3)}>step increment</button>
                <button onClick={()=>this.step(6)}>step increment</button>
                </>:
                "please subscribe to access"
            }
            </>
        )
    }
}

export default Countercomp