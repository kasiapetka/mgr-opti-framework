import React from "react";
import logo from "../assets/54-545104_search-icon-png-format-search-engine-optimization-icon-removebg-preview.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  let location = useLocation();
  return (
    <div
      className={`navbar_container${
        location.pathname === "/" ? " navbar_hero" : ""
      }`}
    >
      <nav className="navbar">
        <div className="navbar_col">
          <Link to="/">
            <img src={logo} alt="" height={50} width={50} />
          </Link>
          <Link to="/movies">Movies</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
