import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
];

const authProfileItems = [
  { name: "Login", path: "/login" },
  { name: "Register", path: "/register" },
];

const userProfileItems = [
  { name: "Profile", path: "/profile" },
  { name: "Logout", path: "/logout" },
];

const Header = ({ isLoggedIn }) => {
  const profileItems = isLoggedIn ? userProfileItems : authProfileItems;

  return (
    <header className="header">
      {/* Viduryje - logo ir pavadinimas */}
      <h2>Alberto Protfolio</h2>

      {/* Kairėje pusėje – meniu nuorodos */}
      <nav className="nav-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
      {/* Dešinėje pusėje – Login ir Register */}
      <nav className="nav-menu">
        {profileItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={`profile-link ${
              item.name === "Login"
                ? "auth-login"
                : item.name === "Register"
                ? "auth-register"
                : item.name === "Logout"
                ? "user-logout"
                : "profile-link"
            }`}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
