import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Dashboard</h2>
      </div>
      <ul className="sidebar-links">
       
        <li>
          {/* Use Link for navigation */}
          <Link to="/App">Home</Link>
        </li>
        <li>
          {/* Use Link for navigation */}
          <Link to="/Courses_List">Courses List</Link>
        </li>
        <li>
          {/* Use Link for navigation */}
          <Link to="/Add_Student">Add Student List</Link>
        </li>
        <li>
          {/* Use Link for navigation */}
          <Link to="/Students_List">View Students list</Link>
        </li>
     
        <li><a href="#">Settings</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
