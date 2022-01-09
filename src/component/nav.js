import React  from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    console.warn("df")
    localStorage.clear();
    navigate("/signup")
  }
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

     
        {/* {auth ? (
          <Link onClick={logout} to="/signup">
            Logout{" "}
          </Link>
        ) : (
          <Link to="/signup">Signup</Link>
        )} */}
        {auth ? 
          <li>
           
            <Link onClick={logout} to="/signup">
              Logout
            </Link>
          </li>
         : 
          <>
            <li>
              <Link onClick={logout} to="/signup">Sign Up</Link>
            </li>
            <li>
              
              <Link to="/login">Login</Link>
            </li>
          </>
        }
     
    </ul>
  );
};

export default Nav;
