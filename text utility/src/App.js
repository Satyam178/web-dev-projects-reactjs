import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/TextForm'
import About from './components/About'
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');

  


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#272729";
      document.body.style.color = "white";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

    }
  }

  return (

    <>
<Router>

      <Navbar title="text Utility" AboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />


      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          
          <Route exact path="/" element={<Textform  heading="Enter the text to analyze"/>}>
            
          </Route>
        </Routes>




      </div>
</Router>

    </>

  );
}

export default App;
