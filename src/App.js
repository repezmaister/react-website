import React, { useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import WebSiteNavigation from "./navigation/WebSiteNavigation";




import ReactGA from 'react-ga';
const TRACKING_ID = "G-R7XK8HY9R8"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const BackButtonListener = ({ children }) => {
  const [pressed, setPressed] = React.useState(false)
  React.useEffect(() => {
    window.onpopstate = e => {
      setPressed(true)
    };
  });
 return (
    <h3>Back button: {pressed.toString()}</h3>
  );
};

export default function App()
{
    useEffect(() => {
      ReactGA.pageview(window.location.pathname + window.location.search);
      
    }, []);

    return(
        <Router>
            <WebSiteNavigation/>
        </Router>
    )
}

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/