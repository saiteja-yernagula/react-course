import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/about"
import Contact from "./pages/contact"
import Home from "./pages/home"
import Setting from "./pages/setting"
import Productdetails from "./pages/productdetail"
import Invalidscreen from "./pages/invalid"
import Login from "./pages/login"


function Day14() {
    return (
        <>
            <BrowserRouter>
                {true ?
                    <>
                        <Routes>
                            <Route path="/" Component={Home} />
                            <Route path="/about" Component={About} />
                            <Route path="/contact" Component={Contact} />
                            <Route path="/setting" Component={Setting} />

                            <Route path="/:category/:id" Component={Productdetails} />
                            <Route path="*" Component={Invalidscreen} />
                        </Routes>
                    </> :

                    <>
                        <Routes>
                        <Route path="*" Component={Invalidscreen} />

                            <Route path='/' Component={Login} />
                        </Routes>
                    </>

                }





            </BrowserRouter>
        </>
    )
}

export default Day14