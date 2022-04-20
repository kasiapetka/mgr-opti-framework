import React from "react";
import "../style/_navbar.scss";
import logo from "../assets/54-545104_search-icon-png-format-search-engine-optimization-icon-removebg-preview.png";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar_container">
      <nav className="navbar">
        <div className="navbar_col">
          <Link to="/">
            <img src={logo} alt="" height={50} width={50} />
          </Link>
          <Link to="/">
            <span className="navbar_span">Opti Frame App</span>
          </Link>
        </div>
        <div className="navbar_col">
          <Link to="/movies-list">Movie Listing Page</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
