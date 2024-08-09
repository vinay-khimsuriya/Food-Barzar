import React, { useEffect, useState, useContext } from "react";
import logo from "../Images/logo.jpg";
import { Link, useActionData } from "react-router-dom";
import UserContex from "../utils/UserContext";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [isSetOnline, setIsSetOnline] = useState(true);

  const { loggedInUser } = useContext(UserContex);
  const data = useContext(UserContex);

  //   alert(isSetOnline);

  const cart = useSelector((store) => store.cart.items);
  // alert(cart);

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      window.addEventListener("online", () => {
        setIsSetOnline(true);
      });
      window.addEventListener("offline", () => {
        setIsSetOnline(false);
      });
    });
    window.addEventListener("online", () => {
      setIsSetOnline(true);
    });
    window.addEventListener("offline", () => {
      setIsSetOnline(false);
    });
  });

  return (
    <nav className="navbar navbar-expand-md bg-warning">
      <div className="barnd-container d-flex align-items-center">
        <a href="#" className="navbar-brand ">
          <img className="img" src={logo}></img>
        </a>
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#myNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse me-5" id="myNavbar">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item  d-flex align-items-center">
            Online Status : {isSetOnline ? "🟢" : "🔴"}
          </li>
          <li className="nav-item">
            <Link to="/" className="a nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="a nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contect" className="a nav-link">
              Contect
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="a nav-link">
              <span>{cart.length}</span> Cart
            </Link>
          </li>
          <li className="nav-item text-dark fw-bolder d-flex align-items-center px-2">
            {data.loggedInUser}
          </li>
        </ul>
      </div>
      <div className="me-5">
        <button className="btn btn-light">Login</button>
      </div>
    </nav>
  );
}

// function ABC(){return <h1>I am boss</h1>}
// export default ABC
