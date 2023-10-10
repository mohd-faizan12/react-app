import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/about';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const switchMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#17161e';
      showAlert("Dark mode is enabled", "success");
      document.title = 'DarkMode enabled'
    }
    else {
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light mode is enabled", "danger");
      document.title = 'LightMode enabled'
      // setInterval(() => {
      //   document.title = 'Install MyApp';
      // }, (1000))

    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="Text-Utils" mode={mode} toggleMode={switchMode} />

        <Alert alert={alert} />
        <div className='container'>
          <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter the text below to analyze :" mode={mode} showAlert={showAlert} />}>
            </Route>
            <Route path='*' element={<h2>Error 404: Not found</h2>} />

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
