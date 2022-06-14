import React,{useState} from 'react';
import PropTypes from 'prop-types';

const TextForm = (props) => {

    const handleUpClick = ()=>{
        // console.log("uppercase was clicked");
        let upperText = text.toUpperCase();
        setText(upperText);
    }

    const handleonChange = (event)=>{
        
        // console.log("onchange")
        setText(event.target.value);
    }
    const [text,setText] = useState('enter text here');
    // text = "new text " // wrong way to change the state
    // setText("new text")//correct way
  return (
    <div>
  <div className="form-group">
    <label htmlFor="myBox">{props.heading}</label>
    <textarea className="form-control"  value={text} onChange={handleonChange} id="myBox" rows="10"></textarea>
    <button className="btn btn-primary my-2" onClick={handleUpClick} >CONVERT TO UPPERCASE</button>

  </div>
</div>
    
  );
}
TextForm.protoTypes = 
{
    heading: PropTypes.string.isRequired,
}
export default TextForm;