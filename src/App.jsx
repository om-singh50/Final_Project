import React, { useState } from "react";
import LoginPage from "./components/Login/LoginPage";
import HomePage from "./components/Home/HomePage";
import RegistrationPage from "./components/Registration/RegistrationPage";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("login");
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  const navigateTo = (page) => setCurrentPage(page);

  const registerUser = (username) => {
    setRegisteredUsers([...registeredUsers, username]);
    alert("Registration successful!");
    navigateTo("login");
  };

  const loginUser = (username, password) => {
    if (registeredUsers.includes(username)) {
      setCurrentUser(username);
      navigateTo("home");
    } else {
      alert("User not registered! Please register before logging in.");
    }
  };

  return (
    <div className="App">
      {currentPage === "login" && (
        <LoginPage navigateTo={navigateTo} loginUser={loginUser} />
      )}
      {currentPage === "register" && (
        <RegistrationPage
          navigateTo={navigateTo}
          registeredUsers={registeredUsers}
          registerUser={registerUser}
        />
      )}
      {currentPage === "home" && <HomePage username={currentUser} />}
    </div>
  );
};

export default App;
