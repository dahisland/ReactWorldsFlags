import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav_menu">
      <ul>
        <NavLink
          to="/"
          className={(nav) =>
            nav.isActive ? "nav_menu--active" : "nav_menu--inactive"
          }
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) =>
            nav.isActive ? "nav_menu--active" : "nav_menu--inactive"
          }
        >
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
