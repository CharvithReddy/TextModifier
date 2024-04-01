import React, {useState} from 'react'

export default function TextForm(props) {

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower Case", "success")
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper Case", "success")
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to clipboard", "success")
  }

  const handleClear = () => {
    setText("");
    props.showAlert("Text cleared", "success")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces have been removed", "success")
  }

  const [text, setText] = useState("");

  return (
    <>
        <div className='container' style={{color: props.mode==="light"?"black":"white"}}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="light"?"white":"#13466e", color: props.mode==="light"?"black":"white"}} id="myBox" rows="8"></textarea>
            </div> 
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>   
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
        <div className="container" style={{color: props.mode==="light"?"black":"white"}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
    </>
  )
}
