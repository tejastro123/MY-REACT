// import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from "./Components/About";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
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

    <>
    <Navbar 
        title="My App"
        about="About Us"
        isLoggedIn={isLoggedIn}
        onLogin={() => setIsLoggedIn(true)}
        onLogout={() => setIsLoggedIn(false)}/>
    <br></br>
    <TextForm heading="Enter Text To Analyze"/>
    <br></br>
    {/* <About/> */}
    </>
    
  );
}

export default App;
