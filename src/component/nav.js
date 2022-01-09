import React from "react";
import { Link } from "react-router-dom";
const nav = () => {
  return (
    <ul className="nav-ul">
      <li>
        <Link to="/">Product</Link>
      </li>
      <li>
        <Link to="/add">Add Product</Link>
      </li>
      <li>
    
        <Link to="/update">Update Product</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/logout">Logout </Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
    </ul>
  );
};

export default nav;