import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{
        console.log("uppercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
     console.log("on change");
     setText(event.target.value)
    }
    const[text,setText]=useState('enter the text here');
    return (
<>        
    <div>
        <h1>{props.heading}</h1>
<div className="mb-3">
<label for="mybox" className="form-label">enter text below</label>
<textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick} >convert to uppercase</button>
<button className="btn btn-primary" onClick={handleLoClick} >convert to lowercase</button>
    </div>
    <div className="container">
      <h1>enter your summary here</h1>
      <p>{text.length} characters and {text.split(" ").length} words</p>
      <p>{0.008 *text.split(" ").length } mins</p>
    </div>
    </>
  )
}
