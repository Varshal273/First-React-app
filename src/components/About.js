export default function About(props) {

  return (
    <div className='py-3 pb-4 my-3 rounded container' style={props.theme}>
        <div className="container">
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" data-bs-theme={props.mode} id="accordionExample">
                <div className="accordion-item" style={props.theme}>
                    <h2 className="accordion-header">
                    <button style={props.theme} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <samp>Analyze Your text</samp>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Textutils</strong> gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={props.theme}>
                    <h2 className="accordion-header">
                    <button style={props.theme} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <samp>Free to use</samp>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>TextUtils</strong> is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={props.theme}>
                    <h2 className="accordion-header">
                    <button style={props.theme} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <samp>Browser Compatible</samp>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This word counter software</strong> works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
