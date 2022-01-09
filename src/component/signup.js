import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
 

  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const collectdata = async () => {
    console.log(name, email, pass);
    let result = await fetch("http://localhost:30010/register", {
      method: "post",
      body: JSON.stringify({ name, email, pass }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/");
  };
  

  return (
    <div className="hh">
      <h1>Register</h1>
      <div>
        <input
          className="inputBox"
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          className="inputBox"
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          className="inputBox"
          type="password"
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => setpass(e.target.value)}
        />
        <button onClick={collectdata} className="button" type="button">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
