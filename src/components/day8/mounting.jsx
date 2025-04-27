import axios from "axios";
import { Component } from "react";
import Spincomp from "./spin";

class Mountcomp extends Component {
    constructor() {
        console.log("first prior constructor")
        super()
        this.state = {
            message: "hello moto",
            userdata: [],
            color:"red"
        }
    }

    componentDidMount() {
        console.log("component did mount")
        axios.get("https://dummyjson.com/users")
            .then(response => {
                this.setState({
                    userdata: response.data.users
                })
            }
            )
    }

    static getDerivedStateFromProps(props,state){
        console.log("get derived state from props")

        return {color:props.favColor}
    }




    render() {
        // console.log(this.state.userdata)
        console.log("third priority - render method")
        return (
            <div>
                <h1 style={{color:this.state.color}}>hello world</h1>
                {
                    this.state.userdata.length > 0 ?
                        this.state.userdata.map(eachobj => {
                            return (
                                <h1 key={eachobj.id}>{eachobj.firstName}</h1>
                            )
                        }
                        )
                        :
                        <h1>
                            <Spincomp />
                        </h1>
                }
            </div>
        )
    }

}
export default Mountcomp