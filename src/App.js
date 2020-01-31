import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from "./components/Landing/Landing"
import NavBar from "./components/NavBar/NavBar";
import StoryContainer from "./components/StoryContainer/StoryContainer";
import PortfolioContainer from "./components/PortfolioContainer/PortfolioContainer";
import Footer from "./components/Footer/Footer"
import './App.css';

function App() {
  return (
    <div>
      <Landing />
      <NavBar/>
      <StoryContainer />
      <PortfolioContainer />
      <Footer />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
