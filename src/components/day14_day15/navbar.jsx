import React from 'react'
import { Link } from 'react-router-dom'

function Navbarcomp() {
  return (
    <div>
        <>
  {/* Hello world */}
  <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item m-3">
          {/* <a className="nav-link " href="#">
            Active
          </a> */}
          <Link to="/">
            Home
          </Link>
        </li>
        <li className="nav-item m-3">
          {/* <a className="nav-link " href="#">
            Active
          </a> */}
            <Link to="/about">
            About
          </Link>
        </li>
        <li className="nav-item m-3">
          {/* <a className="nav-link" href="#">
            Link
          </a> */}
            <Link to="/contact">
            Contact
          </Link>
        </li>
        <li className="nav-item m-3">
          {/* <a className="nav-link" href="#">
            Link
          </a> */}
            <Link to="/setting">
            Setting
          </Link>
        </li>
        
      </ul>
    </div>
  </nav>
</>

    </div>
  )
}

export default Navbarcomp