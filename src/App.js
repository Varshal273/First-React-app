import React, {useState} from 'react'
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529ef'
      showAlert("Dark Mode has been Enabled", "success");
      // document.body.style.backgroundColor = '#042743ef'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been Enabled", "success");
    }
  }
  return (
    <>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      <Alert alert={alert}/>
      <div className="container-fluid my-3">
        <TextForm heading='Enter the Text to Analyze Below' showAlert={showAlert} mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}


export default App;
