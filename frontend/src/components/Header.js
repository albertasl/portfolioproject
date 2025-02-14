import React from "react";
import { NavLink, Link } from "react-router-dom";

const menuItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
  ];

const Header = () => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", background: "#4CAF50", color: "white" }}>
      {/* Kairėje pusėje – meniu nuorodos */}
      <nav style={{ display: "flex", gap: "15px" }}>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={({ isActive }) => ({
              color: isActive ? "yellow" : "white",
              textDecoration: "none",
            })}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
      {/* Viduryje - logo ir pavadinimas */}
        <h2>Alberto Portfolio</h2>

      {/* Dešinėje pusėje – Login ir Register */}
      <div style={{ display: "flex", gap: "10px" }}>
        <Link
          to="/login"
          style={{
            color: "white",
            textDecoration: "none",
            padding: "8px 15px",
            border: "1px solid white",
            borderRadius: "5px",
          }}
        >
          Login
        </Link>
        <Link
          to="/register"
          style={{
            color: "white",
            textDecoration: "none",
            padding: "8px 15px",
            border: "1px solid white",
            borderRadius: "5px",
            backgroundColor: "orange",
          }}
        >
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
