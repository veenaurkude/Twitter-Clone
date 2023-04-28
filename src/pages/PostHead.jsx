import React, { useState } from "react";
import "./PostHead.css";

function PostHead() {
  const [activeButton, setActiveButton] = useState("For You");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    
    <div>
      <h1>Home</h1>
      <div className="header">
        <div className="buttons">
          <button
            className={activeButton === "For You" ? "active" : ""}
            onClick={() => handleButtonClick("For You")}
          >
            For You
          </button>
          <button
            className={activeButton === "Following" ? "active" : ""}
            onClick={() => handleButtonClick("Following")}
          >
            Following
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostHead;
