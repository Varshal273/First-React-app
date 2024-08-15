import React,{useState} from 'react'
let textCache;

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('button clicked')
        let newText = text.toUpperCase(); 
        setText(newText);
        props.showAlert("Converted to Upper Case!", "success");
    }
    const handleLoClick = () => {
        // console.log('button clicked')
        let newText = text.toLowerCase(); 
        setText(newText);
        props.showAlert("Converted to Lower Case!", "success");
    }
    const handleClearClick = () => {
        textCache = text;
        setText('');
        props.showAlert("Cleared Text Box Press Undo if you want to Recover!", "success");

    }
    const handleUndoClick = () => {
        if(textCache === null | textCache === ''){
            textCache = text;
            setText(textCache);
        }
        else{
            setText(textCache);
        }
        // textCache = text;
        props.showAlert("Retrived Text!", "success");

    }
    // const handleUpdateClick = () => {
    //     textCache = text;
    //     setText(textCache);
    // }
    const handleOnChange = (event) => {
        // console.log('On Change')
        setText(event.target.value);
        setcopyBtn("btn btn-outline-secondary mx-1 mb-3")

    }
    const htmlCode = () => {
        document.getElementById('previewText').innerHTML = text;
        props.showAlert("html <code> in Preview!", "success");
    }
    const hideText = () => {
        document.getElementById('previewText').classList.toggle('d-none');
        props.showAlert("Preview is Hidden press 'hide preview again to show Preview'!", "success");

    }
    const handleOnChangeTextSearch = (event) => {
        setTextSearch(event.target.value);
        document.getElementById('previewText').innerHTML = text;
        props.showAlert("Check Preview for marked result!", "success");
    }
    const handleOnTextSearch = () => {
        if(textSearch !== ''){
            // console.log(document.getElementById('previewText').innerHTML.replace(textSearch,`<mark>`+textSearch+`</mark>`))
            let preview = document.getElementById('previewText');
            preview.innerHTML = preview.innerHTML.replaceAll(textSearch,`<mark>`+textSearch+`</mark>`);
        }
        else{
            document.getElementById('previewText').innerHTML = text;
        }
    }
    const handleOnChangeReText = (event) => {
        setReText(event.target.value);
    }
    const handleOnReText = () => {
        if(textSearch !== '' & ReText !== ''){
            setText(text.replaceAll(textSearch,ReText));
            props.showAlert("Text Replaced!", "success");
        }
        else{
            document.getElementById('previewText').innerHTML = text;
        }
    }
    const copyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(text);
          setcopyBtn("btn btn-primary me-2 mb-2 ps-5")
          setTimeout(() => {
              setcopyBtn("btn btn-outline-primary me-2 mb-2 ps-5")
              props.showAlert("Copied to Clipboard!", "success");
            setTimeout(() => {
                setcopyBtn("btn btn-outline-primary mb-2 me-2")
            }, 1000);
          }, 1500);
          // Optional: Provide feedback or perform additional actions upon successful copy
        } catch (error) {
          console.error("Failed to copy to clipboard:", error);
          // Optional: Handle and display the error to the user
        }
      };

      const handleRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra's Space Removed!", "success");
      }

    // const lightStyle = {
    //     color : '#000000cc',
    //     backgroundColor: '#ffffff',
    //     transition: 'all .5s'
    // }
    // const darkStyle = {
    //     color : '#ffffffdd',
    //     backgroundColor: '#212529',
    //     // backgroundColor: '#042743',
    //     transition: 'all .5s'   
    // }

    const [text,setText] = useState('');
    const [textSearch,setTextSearch] = useState('');
    const [ReText,setReText] = useState('');
    const [copyBtn, setcopyBtn] = useState("btn btn-outline-secondary me-2 mb-2");
    // setText('hello');
    return (
        <>
            <div className='container p-4 pb-0 rounded-top' style={props.theme}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={props.theme} id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <div className="container p-0 m-0 d-flex flex-row justify-content-between">
                    <div className="container w-100 p-0 d-flex flex-wrap align-items-start justify-content-start">
                        <button className="btn btn-primary me-2 mb-2" onClick={handleUpClick}>Uppercase</button>
                        <button className="btn btn-primary me-2 mb-2" onClick={handleLoClick}>Lowercase</button>
                        <button className="btn btn-primary me-2 mb-2" onClick={handleUndoClick}>Undo</button>
                        <button className="btn btn-primary me-2 mb-2" onClick={handleClearClick}>Clear Text</button>
                        <button className="btn btn-primary me-2 mb-2" onClick={handleRemoveSpace}>Remove Extra Space's</button>
                        {/* <button className="btn btn-primary mx-1" onClick={handleUpdateClick}>Update Cache</button> */}
                        <button className={copyBtn} onClick={copyToClipboard}>Copy to Clipboard</button>
                    </div>
                    <div className="d-flex flex-column w-25 float-end">
                          <div className="input-group">
                            <input className="form-control border-secondary" type="search" value={textSearch} onChange={handleOnChangeTextSearch} placeholder="Find Text" aria-label="Search"/>
                            <button className="btn btn-secondary" onClick={handleOnTextSearch}>Find</button>
                        </div>
                        <div className="input-group my-2">
                            <input className="form-control border-secondary" type="search" value={ReText} onChange={handleOnChangeReText} placeholder="Replace Text" aria-label="Search"/>
                            <button className="btn btn-secondary" onClick={handleOnReText}>Replace</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container p-4 pt-0 rounded-bottom" style={props.theme}>
                <h2>Your Text Summary</h2>
                <p>{text.length} characters and {text===''?'0':text.trim().split(/\s+/).length} words and {text.trim().split('.').length - 1} Sentences <br/> {0.008 * text.trim().split(/\s+/).length} Minutes to read</p>
                <div className="container d-flex p-2">
                    <h2>Preview</h2>
                    <div className="input-group ms-2">
                    <button className="btn btn-outline-primary ms-4 mx-0 m-1" onClick={htmlCode}>&#x3C;HTML&#x3E;</button>
                    <button className="btn btn-outline-primary mx-0 m-1" onClick={hideText}>Hide Preview</button>
                    </div>
                </div>
                <div id='previewText' className='container border border-secondary rounded p-4'>{text.length>0?text:"Enter Something to Preview Here"}</div>
                {/* <div className="container border p-4" id="htmlCode"></div> */}
            </div>
        </>
  )
}
