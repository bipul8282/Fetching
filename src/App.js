import React, { useEffect } from "react";
import UserCard from "./UserCard";
import "./App.css";

function App() {
  useEffect(() => {
    const rainbowText = document.querySelector(".rainbow-text");
    
    if (rainbowText) {
      let hue = 0;
      setInterval(() => {
        hue = (hue + 1) % 360;
        rainbowText.style.color = `hsl(${hue}, 100%, 50%)`;
      }, 50);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="rainbow-text">User Profile Card</h1>
      </header>
      <main>
        <UserCard />
      </main>
    </div>
  );
}

export default App;
