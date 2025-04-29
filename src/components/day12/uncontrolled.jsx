import { useRef } from "react"


const Uncontrolledcomp = () => {
    const usernameref = useRef(null)
    const userpasswordref = useRef(null)

    const handleform = (event) => {
        event.preventDefault()
        const username = usernameref.current.value
        const userpassword = userpasswordref.current.value
        

        if(username.length<5 && userpassword.length<5){
            alert("username and password must be grater than 5 characters")

        }
        else{
        let userinfo={
            name: username,
            mail: userpassword
        }
        console.log(userinfo)
       }
    }
    return (
        <>
            <form action="" onSubmit={handleform}>
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
                        ref={usernameref}
                    />
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
                        ref={userpasswordref}
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

export default Uncontrolledcomp