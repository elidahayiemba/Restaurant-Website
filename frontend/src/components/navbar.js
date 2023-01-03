import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div id="navbar">
      <NavLink to="/" activeClassName="is-active" >
        Welcome
      </NavLink>
      <NavLink to="/about" activeClassName="is-active">
        About
      </NavLink>
      <NavLink to="/blogs" activeClassName="is-active">
       Pricing
      </NavLink>
      <NavLink to="/counselors" activeClassName="is-active">
        Beer
      </NavLink>
      <NavLink to="/reservation" activeClassName="is-active">
        Bread
      </NavLink>
      <NavLink to="/contact" activeClassName="is-active">
        Featured
      </NavLink>
      <NavLink to="/testimonial" activeClassName="is-active">
        Reservation
      </NavLink>
      <NavLink to="/testimonial" activeClassName="is-active">
        Contact
      </NavLink> 
    </div>
  );
};
export default Navbar;