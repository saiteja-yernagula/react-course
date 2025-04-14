// jsx rules

import { Component } from "react";

// jsx : stands for javascript and xml

// using jsx we can mix both html and js part in one file

// browser will doesnt understand jsx directly for this we have transpiler babel

// babel is a transpiler which converts jsx code to js code


// imheritance : acquiring prop and metho from parent
//every class based component should have render method to render the html or jsx  


class Jsx extends Component{
    render(){
        return (
            <h1>class based jsx component </h1>
        )
    }
}

export default Jsx
 
