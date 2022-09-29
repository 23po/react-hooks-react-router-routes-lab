import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">{/*{code here}*/}
    <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        exact
      >
        Movies
      </NavLink>
      <NavLink
        to="/directors"
        exact
      >
        Directors
      </NavLink>
      <NavLink 
        to="/actors"
        exact>
          Actors
        </NavLink>
  
  </div>;
}

export default NavBar;
