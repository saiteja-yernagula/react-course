
import "./index.css"
import styles from "./index.module.css"
function Day4(){
    const obj={background:"red",color:"white"}
    return (
        <>
    
        <h1 >day 4- all about stylings</h1>
        <div>inline styling</div>
        <p>here we can pass object to style attribute like below element is styled in two ways</p>
        <div style={{background:"blue",color:"white"}}>styled using style attribute</div>
        <div style={obj}>styled using style attribute but another way</div>

        <h2>external styling</h2>
        <p>we can also style our element using external css file</p>
        <div className="el1">styled using external css file</div>

        <h2>module styling</h2>
        <p>we can also style our element using module css file</p>
        <div className={styles.el2}>styled using module css file</div>

        <h2>bootstrap styling</h2>
        <p>we can also style our element using bootstrap- through cdn and npm</p>
        <div className="bg-primary text-white">styled using bootstrap</div>
        
        </>


    )
}

export default Day4;