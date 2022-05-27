//Navbar: Displaying the basic navbar with the LAB name

import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <h1>This is a country list lab again...</h1>
      <ul>

        <NavLink exact to="/" className="selected"> LAB </NavLink>
        <NavLink exact to="/wikicountries" className="selected"> WikiCountries </NavLink>

      </ul>
    </nav>
  );
}

export default Navbar;