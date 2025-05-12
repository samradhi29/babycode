import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">🎓 Student Dashboard</div>
    <div className="navbar-links">
      <Link to="/liststudent">List Students</Link>
      <Link to="/addstudent">Add Student</Link>  {/* Link to Add Student page */}
      <Link to="/login">Login</Link>
           <Link to="/signout">Sign Out</Link>
    </div>
  </nav>
);

export default Navbar;
