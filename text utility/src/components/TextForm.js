import React,{useState} from 'react';
import PropTypes from 'prop-types';

const TextForm = (props) => {


const isUpperCase=()=>{
  let temp = text;
  temp = temp.toUpperCase();
  if(text === temp)
  return true;

  return false;
}

const isLowerCase=(text)=>{
   let temp = text;
   temp = temp.toLowerCase();
   if(text===temp)
   return true;

   return false;
}

    const handleUpClick = ()=>{
        console.log("uppercase was clicked");
        if(isUpperCase(text) && text!=="")
        {
          return ;
        }
        let upperText = text.toUpperCase();
        if(upperText!=="")
        {
          setText(upperText);
        }

    }

    const handleLoClick = ()=>{
      if(isLowerCase(text)&&text!=="")
      {
        return ;
      }
      let lowerText = text.toLowerCase();
      if(lowerText!=="")
      {
        setText(lowerText);
      }
      

    }
    
    
 

    const handleClearTextClick = ()=>
    {
  
      
      if(text!=="") setText("");

    }
    
   const handleCopyTextClick=()=>
   {
      
      navigator.clipboard.writeText(text);
   }


    const wordCountCorrection = () => {

      // let x = text.split(" ").length;

      let x = text;

      x = x.split(" ").filter((element)=>{return element.length!==0}).length;


      // if(x === 1 && text === "")
      // {
      //     return x-1;
      // }

      return x;


    }

    const handleonChange = (event)=>{
        
        // console.log("onchange")
        setText(event.target.value);
    }

    const [text,setText] = useState('');
    
  return (
    <>
  <div className="container-fluid">

    <h2>{props.heading}</h2>
    <textarea className="form-control"  value={text} onChange={handleonChange} id="myBox" rows="10"></textarea>

    <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick} >CONVERT TO UPPERCASE</button>
    <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick} >convert to lower case</button>

    <button className="btn btn-primary my-2 mx-2" onClick={handleClearTextClick} >clear window</button>
    <button className="btn btn-primary my-2 mx-2" onClick={handleCopyTextClick} >copy text</button>
    

  </div>

  <div className="container my-3">
    <h1>Your text summary</h1>
    <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.trim().length}</b> characters</p>
    <p><b>{0.008 * wordCountCorrection()}</b> Minutes to read</p>
    <h2>Preview Text</h2>
    <p>{text.length>0?text:"type something to preview it"}</p>
  </div>
</>
    
  );
}
TextForm.protoTypes = 
{
    heading: PropTypes.string.isRequired,
}
export default TextForm;