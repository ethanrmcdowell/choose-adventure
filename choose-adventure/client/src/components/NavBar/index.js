import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function NavBar() {
  return (
    <div className="container">
      <nav className="navbar navbar-default navbar-dark bg-dark justify-content-center">
        <ul className="nav navbar-nav navbar-expand-lg">
          <li className="nav-item pad"><a className="nav-link" href="/">HOME</a></li>
          <li className="nav-item pad"><a className="nav-link" href="/login">ADMIN</a></li>
          <li className="nav-item"><a className="nav-link" href="https://github.com/ethanrmcdowell/choose-adventure">GITHUB</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;

/* <p><FontAwesomeIcon icon={faSkullCrossbones} /> CAMP SLAUGHTER</p> */
