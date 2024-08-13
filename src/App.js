import React, {useState} from 'react'
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529ef'
      // document.body.style.backgroundColor = '#042743ef'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      <div className="container-fluid my-3">
        <TextForm heading='Enter the Text to Analyze Below' mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}


export default App;
