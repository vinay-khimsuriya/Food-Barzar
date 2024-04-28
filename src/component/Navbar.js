import React from 'react'
import logo from '../Images/logo.jpg';

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-md '>
        <div className='barnd-container d-flex align-items-center border'>
            <a href='#' className='navbar-brand '>
                <img className='img' src={logo}></img>
            </a>
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
        <button type='button' className='navbar-toggler border' data-bs-toggle="collapse" data-bs-target="#myNavbar">
            <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse me-5 border' id='myNavbar'>
            <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                    <a href='#' className='a nav-link'>Home</a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='a nav-link'>About</a>
                </li>
                <li className='nav-item'>
                    <a href='#' className='a nav-link'>Contect</a>
                </li>
            </ul>
        </div>
        <div className='me-5'>
            <button className='btn btn-light'>Login</button>
        </div>
    </nav>
       
  )
}

// function ABC(){return <h1>I am boss</h1>}
// export default ABC
