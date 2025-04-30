import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/about"
import Contact from "./pages/contact"
import Home from "./pages/home"
import Setting from "./pages/setting"
import Productdetails from "./pages/productdetail"


function Day14(){
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/about" Component={About}/>
            <Route path="/contact" Component={Contact}/>
            <Route path="/setting" Component={Setting}/>

            <Route path="/:category/:id" Component={Productdetails}/>
        </Routes>
        </BrowserRouter>
              </>
    )
}

export default Day14