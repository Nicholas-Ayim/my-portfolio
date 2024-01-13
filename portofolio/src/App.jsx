// App.js
import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./routes";
import Links from "./Links";
import { useState } from "react";
import { DarkMode } from "./appContext";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState("white");

  return (
    <DarkMode.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? darkMode : "black"}>
        <Router>
          <Links />
          <RoutesComponent />
        </Router>
      </div>
    </DarkMode.Provider>
  );
}
