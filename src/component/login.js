import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
    const navigate = useNavigate();
    
    useEffect(() => {
     const auth = localStorage.getItem("user");
     if (auth) {
       navigate("/");
     }
})
  const handleLogin = async () => {
    console.warn("email", "pass" , email,pass);
    let result = await fetch("http://localhost:30010/login", {
      method: "post",
      body: JSON.stringify({ email, pass }),
      headers: {
        "Content-Type": "application/json",
      }
    });
    result = await result.json();
    console.warn(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("please inter name");
    }
  };

  return (
    <div className="hh">
      <h1>Login </h1>
      <input
        type="text"
        className="inputBox"
        placeholder="enter email adress"
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <input
        type="password"
        className="inputBox"
        placeholder="enter email adress"
        onChange={(e) => {
          setpass(e.target.value);
        }}
      />
      <button onClick={handleLogin} className="button" type="button">
        Login
      </button>
    </div>
  );
};

export default Login;
