import React, { useState } from "react";
import "./App.css";
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      // // document.body.style.backgroundColor = '#042743ef'
      document.body.style.backgroundColor = "#212529ef";
      showAlert("Dark Mode has been Enabled", "success");
      // document.title = 'TextUtils - Dark Mode'
      // setTimeout(() => {
      //   document.title = 'TextUtils - Home'
      // }, 2000);
      setTheme(darkStyle)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#eeeeeedd";
      showAlert("Light Mode has been Enabled", "success");
      // document.title = 'TextUtils - Light Mode'
      // setTimeout(() => {
      //   document.title = 'TextUtils - Home'
      // }, 2000);
      setTheme(lightStyle)
    }
  };
  const blueTheme = () =>{
    setTheme(blueStyle)
    document.body.style.backgroundColor = '#042743ef'
    setMode("dark")
    showAlert("Blue Theme has been Enabled", "success");
  }
  const lightStyle = {
      color : '#000000cc',
      backgroundColor: '#ffffff',
      transition: 'all .5s'
  }
  const darkStyle = {
      color : '#ffffffdd',
      backgroundColor: '#212529',
      // backgroundColor: '#042743',
      transition: 'all .5s'   
  }
  const blueStyle = {
      color : '#ffffffdd',
      backgroundColor: '#042743',
      // backgroundColor: '#212529',
      transition: 'all .5s'   
  }


  const [theme, setTheme] = useState(lightStyle)

  return (
    <>
      <Navbar title="TextUtils" 
        mode={mode} 
        theme={theme}
        bluetheme={blueTheme}
        toggleMode={toggleMode}
      />
      <Alert alert={alert}/>
      <div className="container-fluid my-3">
        <TextForm
          heading="Enter the Text to Analyze Below"
          showAlert={showAlert}
          mode={mode}
          theme={theme}
        />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
