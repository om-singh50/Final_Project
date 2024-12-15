import React, { useState } from "react";
import "./RegistrationPage.css";

const RegistrationPage = ({ navigateTo, registeredUsers, registerUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = () => {
    const { username, password, confirmPassword } = formData;

    if (!username || !password || !confirmPassword) {
      alert("Please fill out all fields!");
      return;
    }

    if (username.includes(" ")) {
      alert("Username cannot contain spaces!");
      return;
    }

    if (registeredUsers.includes(username)) {
      alert("Username already exists! Please choose a different one.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    registerUser(username);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleRegister();
    }
  };

  return (
    <div className="registration-page">
      <h1>Create an Account</h1>
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleRegister}>Register</button>
        <p>
          Already have an account?{" "}
          <span onClick={() => navigateTo("login")}>Login here</span>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
