import React, { useState } from "react";


export default function TextBox(props) {
  const changeToUp = () => {
    let temp = text;
    setText(temp.toUpperCase());
    if (text==="") {
      props.alert("Textbox is empty","danger");
    } else {
      props.alert("Converted to uppercase!","success");     
    }
    // console.log("you clicked");
  };
  const changeHandler = (event) => {
    setText(event.target.value);
  };
  const changeToLo=()=>{
    let temp = text;
    setText(temp.toLowerCase());
    if (text==="") {
      props.alert("Textbox is empty","danger");
    } else {
      props.alert("Converted to Lowercase!","success");    
    }
    
  }
  const clear=()=>{
    setText("");    
    if (text==="") {
      props.alert("Textbox is empty","danger");
    } else {
      props.alert("Emptied textbox!","success");    
    }
  }
  const copy=()=>{
    navigator.clipboard.writeText(text);
    if (text==="") {
      props.alert("Textbox is empty","danger");
    } else {
      props.alert("Copied to clipboard!","success");    
    }

  }
    const capitalize=()=>{
          let temp = text;
          temp=temp.charAt(0).toUpperCase()+temp.substring(1).toLowerCase();
          setText(temp);
          if (text==="") {
            props.alert("Textbox is empty","danger");
          } else {
            props.alert("Capitalized successfully","success");    
          }
          
          
    }
    const toggleCase=()=>{
      let temp = text;
      setText("");
      let temp2="";
      for (let i = 0; i < temp.length; i++) {
            if (temp.charAt(i) === temp.charAt(i).toUpperCase()) {
              
                temp2=temp2+temp.charAt(i).toLowerCase();
            } else {
                
                temp2=temp2+temp.charAt(i).toUpperCase();
            }
            
      }
      setText(temp2);
      if (text==="") {
        props.alert("Textbox is empty","danger");
      } else {
        props.alert("Converted to Togglecase!","success");   
      }
     
    }
    
  const [text, setText] = useState("");
  return (
    <>
      <div className="container mt-5 mb-4">
        <h1 className={`my-3 text-${props.bgMode==='dark' ? 'light' : 'dark'}`}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control bg-${props.bgMode} text-${props.bgMode==='dark' ? 'light' : 'dark'}`}
            id="text"
            value={text}
            onChange={changeHandler}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-md-0 my-2" id="changeUp" onClick={changeToUp}>
          Change to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-md-0 my-2" id="changelo" onClick={changeToLo}>
          Change to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-md-0 my-2" id="clear" onClick={clear}>
          Clear
        </button>
        <button className="btn btn-primary mx-2 my-md-0 my-2" id="clear" onClick={copy}>
          Copy
        </button>
        <button className="btn btn-primary mx-2 my-md-0 my-2" id="clear" onClick={capitalize}>
          Capitalize
        </button>
        <button className="btn btn-primary mx-2 my-lg-0 my-2" id="clear" onClick={toggleCase}>
          Toggle case
        </button>
      </div>
      <div className={`container text-${props.bgMode==='dark' ? 'light' : 'dark'}`}>
        <h2>Your text summary : </h2>
        <p className="my-1">{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words , {text.length} Characters</p>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008} minute to read</p>
      </div>
      <div className={`container my-2 text-${props.bgMode==='dark' ? 'light' : 'dark'}`}>
        <h2>Preview :-</h2>
        <p className="my-1 fs-5" >
          {text}
        </p>
      </div>
    </>
  );
}
