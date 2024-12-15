import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = ({ navigateTo, loginUser }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = () => {
    if (credentials.username && credentials.password) {
      loginUser(credentials.username, credentials.password);
    } else {
      alert("Please fill out all fields!");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-page">
      <h1>Welcome Back!</h1>
      <div className="form-container">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button className="" onClick={handleLogin}>Login</button>
        <p>
          Don't have an account?{" "}
          <span onClick={() => navigateTo("register")}>Register here</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
