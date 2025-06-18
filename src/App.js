import { useFormState, useFormStatus } from 'react-dom';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //wheather dark mode is on or off
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
  })
  setTimeout(() => {
    setAlert(null);
  },1500);
  }

  const toggleMode = ()=> {
    if(mode==='light'){
      setMode ('dark')
      document.body.style.backgroundColor = '#000000e8';
      showAlert("Dark mode has been enable","success");
      //document.title = 'TextUtils - Dark mode';
      // setInterval(() => {                    // chnage in to the browers tab
      //   document.title = 'yoo'
      // }, 2000);
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable","success");
      // document.title = 'TextUtils - Light mode'

    }
  }

  return (
    <>
    {/* <Router> */}      {/*for the deployment router function can create problem so that i remived it and in this project its not need to show about,home like or any pages*/}
    {/* <Navbar tittle="TextUtils" aboutText="About US" /> */}
    {/* <Navbar tittle="TextUtils" /> */}


    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode={mode}/>
       {/* <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            exact path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze"
                mode={mode}
              />
            }
          />
        </Routes> */}
    </div>
    {/* </Router> */}
    </>
   
  );
}

export default App;
