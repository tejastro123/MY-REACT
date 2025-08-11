// import logo from './logo.svg';
import './App.css';

let name = "Mellipudi Tejas"
function App() {
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
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TextUtils</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
    
  );
}

export default App;
