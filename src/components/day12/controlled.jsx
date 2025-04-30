import { useState } from "react"


function ControlledComp(){
   const [username,setUsername]= useState("")
   const [usernameerror,setUsernameError]= useState("")
   const usernamehandler=(event)=>{
    const username=event.target.value
    setUsername(username)

    if(username.length>5){
        // alert("username must be less than 5 characters")
        setUsernameError("username must be less than 5 characters")
    }else{
        const userinfo={
            name:username
        }
        console.log(userinfo)
        setUsernameError("")
    }
    
   }
    return(
        <>
        <form >
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                        value={username}
                        onChange={usernamehandler}
                    />
                    {
                        usernameerror?<h1 style={{color:"red"}}>{usernameerror}</h1>:null
                        
                    }
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">
                        Password:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="pwd"
                        placeholder="Enter password"
                        name="pswd"
                    
                    />
                </div>
                <div className="form-check mb-3">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember" />{" "}
                        Remember me
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            </>
    )
}

export default ControlledComp