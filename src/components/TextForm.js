import React,{useState} from 'react'
let textCache;

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('button clicked')
        let newText = text.toUpperCase(); 
        setText(newText);
    }
    const handleLoClick = () => {
        // console.log('button clicked')
        let newText = text.toLowerCase(); 
        setText(newText);
    }
    const handleClearClick = () => {
        textCache = text;
        setText('');
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
    }
    const hideText = () => {
        document.getElementById('previewText').classList.toggle('d-none');
    }
    const handleOnChangeTextSearch = (event) => {
        setTextSearch(event.target.value);
        document.getElementById('previewText').innerHTML = text;
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
            let preview = document.getElementById('previewText');
            preview.innerHTML = preview.innerHTML.replaceAll(ReText,`<mark>`+ReText+`</mark>`);
        }
        else{
            document.getElementById('previewText').innerHTML = text;
        }
    }
    const copyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(text);
          setcopyBtn("btn btn-primary mx-1 mb-3 ps-5")
          setTimeout(() => {
              setcopyBtn("btn btn-outline-primary mx-1 mb-3 ps-5")
              setTimeout(() => {
                  setcopyBtn("btn btn-outline-primary mb-3 mx-1")
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
      }

    const lightStyle = {
            color : '#000000cc',
            backgroundColor: '#fff',
            transition: 'all .5s'
        }
    const darkStyle = {
            color : '#ffffffdd',
            backgroundColor: '#212529',
            // backgroundColor: '#042743',
            transition: 'all .5s'   
    }

    const [text,setText] = useState('');
    const [textSearch,setTextSearch] = useState('');
    const [ReText,setReText] = useState('');
    const [copyBtn, setcopyBtn] = useState("btn btn-outline-secondary mx-1 mb-3");
    // setText('hello');
    return (
        <>
            <div className='container p-4 pb-0 rounded-top' style={props.mode==='dark'?darkStyle:lightStyle}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={props.mode==='dark'?darkStyle:lightStyle} id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <div className="container p-0 m-0 d-flex flex-row flex-wrap">
                    <button className="btn btn-primary me-1 mb-3" onClick={handleUpClick}>Uppercase</button>
                    <button className="btn btn-primary mx-1 mb-3" onClick={handleLoClick}>Lowercase</button>
                    <button className="btn btn-primary mx-1 mb-3" onClick={handleUndoClick}>Undo</button>
                    <button className="btn btn-primary mx-1 mb-3" onClick={handleClearClick}>Clear Text</button>
                    <button className="btn btn-primary mx-1 mb-3" onClick={handleRemoveSpace}>Remove Extra Space's</button>
                    {/* <button className="btn btn-primary mx-1" onClick={handleUpdateClick}>Update Cache</button> */}
                    <button className={copyBtn} onClick={copyToClipboard}>Copy to Clipboard</button>
                    <div className="ms-auto d-flex w-50 float-end">
                          <div class="input-group">
                            <input className="form-control border-secondary" type="search" value={textSearch} onChange={handleOnChangeTextSearch} placeholder="Find Text" aria-label="Search"/>
                            <button className="btn btn-secondary" onClick={handleOnTextSearch}>Find</button>
                        </div>
                        <div class="input-group ms-2">
                            <input className="form-control border-secondary" type="search" value={ReText} onChange={handleOnChangeReText} placeholder="Replace Text" aria-label="Search"/>
                            <button className="btn btn-secondary" onClick={handleOnReText}>Replace</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container p-4 pt-0 rounded-bottom" style={props.mode==='dark'?darkStyle:lightStyle}>
                <h2>Your Text Summary</h2>
                <p>{text.length} characters and {text.trim().split(/\s+/).length} words and {text.trim().split('.').length - 1} Sentences <br/> {0.008 * text.trim().split(/\s+/).length} Minutes to read</p>
                <div className="container d-flex p-2">
                    <h2>Preview</h2>
                    <div class="input-group ms-2">
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
