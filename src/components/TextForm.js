import React,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  }
  const handleDownClick = ()=>{
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");

  }
  
  const handleCleartextClick = ()=>{
    // console.log("Lowercase was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Chat cleared", "success");
  }
  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  }

  const handleCopy = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied", "success");
  }

  
  const handleOnchange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState("Enter text here");
  // text = "new text"; wrong way to chnge the state 
  // setText("new text"); correct way to change the state

  return (
    <>
   <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value= {text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'? '#979da2' : 'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-outline-info mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-outline-info mx-1" onClick={handleDownClick}>Convert to LowerCase</button>
        <button className="btn btn-outline-danger mx-1" onClick={handleCleartextClick}>Clear text</button>
        <button className="btn btn-outline-danger mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-outline-warning mx-1" onClick={handleCopy}>Copy text</button>
      </div>
     <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length > 0?text:"Enter Something"}</p>
   </div>
   </>
)
}
