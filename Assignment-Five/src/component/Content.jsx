//eslint-disable-next-line
import React, { useState } from 'react'

const Content = () => {
    const [text, setText] = useState('');
    const [displayedText, setDisplayedText] = useState('');
  
    const handleButtonClick = () => {
      setDisplayedText(text);
    };
  
    const handleTextareaChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div>
        <textarea
          className="form-control"
          rows="3"
          placeholder="Enter text..."
          value={text}
          onChange={handleTextareaChange}
        />
        <br />
        <button className="btn btn-primary" onClick={handleButtonClick}>
          Show Text
        </button>
        <br />
        {displayedText && <p>{displayedText}</p>}
      </div>
    );
  };


export default Content