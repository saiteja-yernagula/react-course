import { Component } from "react";

class Updatingphase extends Component{

    state={
        count:0,
        color:"red"

    }

    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }


componentDidMount(){
    console.log("component did mount")
    document.title=`component current count ${this.state.count} `
}

shouldComponentUpdate(){
    console.log("should update")
    // use in optimization purpose, in pure component
    return true
}

componentDidUpdate(){
    console.log("com did update")
    // api calls are also we can
    document.title=`component current count ${this.state.count} `
}

getSnapshotBeforeUpdate(prevProp,prevState){
    console.log(prevState,"previous state")
    return null
}


static getDerivedStateFromProps(props,state){
    console.log("get derived state from props")

    return {color:props.favColor}
}

    render(){
        console.log("render")
        return(
            <>  
            <h1 style={{color:this.state.color}}>counter example {this.state.count}</h1>
            <button onClick={this.increment}>+</button>
            </>
        )
    }
}

export default Updatingphase