import React, { useState } from "react";
import "./HomePage.css";

const HomePage = ({ username }) => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    if (userInput.trim() === "") {
      alert("Please enter some text before submitting!");
    } else {
      alert(`You entered:\n${userInput}`);
    }
  };

  return (
    <div className="home-page">
      <h1>Welcome, {username}!</h1>
      <div className="input-container">
        <textarea
          value={userInput}
          onChange={handleInputChange}
          placeholder="Enter the message you want to display..."
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default HomePage;
