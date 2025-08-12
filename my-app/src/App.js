
import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

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
  }, []);

  // Apply theme changes & persist
  useEffect(() => {
    document.body.style.backgroundColor = THEME_COLORS[mode];
    document.body.style.color = mode === "dark" ? "#ffffff" : "#000000"; // text color
    localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    <>
      <Navbar
        title="MY APP"
        isLoggedIn={isLoggedIn}
        onLogin={() => setIsLoggedIn(true)}
        onLogout={() => setIsLoggedIn(false)}
        mode={mode}
        toggleMode={toggleMode}
        links={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <main className="container py-4">
        <TextForm heading="Enter Text To Analyze" mode={mode} />
      </main>
    </>
  );
}

export default App;

// 1.<>
    // <div className="App">
    //   <header className="App-header">
    //     <h1>HI! IAM TEJAS</h1>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p> 
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p> 
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       >Learn React with Tejas
    //     </a>
        
    //   </header>
    // </div>
    // </>

    // 2.<>
    // <div className='name'>TEJAS</div>
    // <nav>
    //   <li>Home</li>
    //   <li>About</li>
    //   <li>Contact</li>
    //   <li>Search</li>
    // </nav>
    // <img src="D:/MERN/MY-REACT/my-app/src/image.png" alt=""/>
    // <div className='container'>
    //   <h1> Hello {name}</h1>
    //   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae debitis repellendus eveniet fugit qui, pariatur maxime in quaerat? 
    //     Voluptates animi voluptatibus ducimus possimus deleniti dolorem quam beatae dolores, suscipit adipisci.
    //   </p>
    // </div>
    // </> 