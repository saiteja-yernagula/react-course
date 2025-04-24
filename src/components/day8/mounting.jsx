import axios from "axios";
import { Component } from "react";
import Spincomp from "./spin";


class Mountcomp extends Component{

    constructor(){
        console.log("first prior constructor")
        super()
        this.state={
            message:"hello moto",
            userdata:[]
        }
    }

    componentDidMount(){
        console.log("component did mount")

        axios.get("https://dummyjson.com/users")
        .then(response=>
        {
            this.setState({
                userdata:response.data.users
            })

        }
        )
    }
    
    render(){
        console.log(this.state.userdata)
        console.log("second priority - render method")
        return(
            <div>
               {
                this.state.userdata.length>0?
                
                    this.state.userdata.map(eachobj=>{
                        return(
                            <h1 key={eachobj.id}>{eachobj.firstName}</h1>
                        )
                    }
                    )
                
                :
                <h1>
                    <Spincomp/>
                </h1>
               }
            </div>
        )
    }

}
export default Mountcomp