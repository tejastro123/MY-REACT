
import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

// ✅ Move THEME_COLORS outside so it's stable
const THEME_COLORS = {
  light: "#f8f9fa",
  dark: "#042743",
};

function App() {
  // Theme state with persistence
  const [mode, setMode] = useState(() => localStorage.getItem("theme") || "light");

  // Login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle theme
  const toggleMode = useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    if (mode === "light") {
      showalert("Dark Mode has been enabled", "success");
      // document.title = 'TEXT App - Dark Mode';
    } 
    else {
        showalert("Light Mode has been enabled", "success");
        // document.title = 'TEXT App - Light Mode';
        }
  }, [mode]);

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }

  const changeMode = (cls) =>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
  }

  // Apply theme changes & persist
  useEffect(() => {
    document.body.style.backgroundColor = THEME_COLORS[mode];
    document.body.style.color = mode === "dark" ? "#ffffff" : "#000000"; // text color
    localStorage.setItem("theme", mode);
  }, [mode]);

  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 3000)
  }

  return (
    <>
    <Router>
    <div>
      <Navbar
        title = "TEXT MANIPULATOR APP"
        isLoggedIn={isLoggedIn}
        onLogin={() => setIsLoggedIn(true)}
        onLogout={() => setIsLoggedIn(false)}
        mode={mode}
        toggleMode={toggleMode}
        changeMode={changeMode}
        links={[
          { label: "Home", href: "/home" },
          { label: "Contact", href: "/contact" },
        ]}
      /> 
    </div>
    <div> 
      <Alert alert= {alert}/>
    </div>
    <Switch>
          <Route exact path="/about"><br></br>
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <div className="container py-4">
                <TextForm showalert={showalert} heading="Try Text Manipulator!" mode={mode} />
            </div>
          </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;

