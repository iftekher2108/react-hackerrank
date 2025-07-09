'use client'
import { useEffect, useState } from "react";

function WordOmitter({wordOmit}) {

  useEffect(()=>{
    setInputText('')
    setOmitWords(true)
  },[])

  const [inputText, setInputText] = useState("");
  const [omitWords, setOmitWords] = useState(true);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const toggleOmitWords = () => {
    setOmitWords(!omitWords);
  };

  const clearFields = () => {
    setInputText('')
    setOmitWords(true)
  };

  const getProcessedText = () => {
    if(!omitWords) return inputText;

    return inputText.split(' ').filter((word) => !wordOmit.includes(word.toLowerCase())).join(' ')   
  };

  return (
    <div className="omitter-wrapper">
      <textarea
        placeholder="Type here..."
        className="textarea mb-3"
        value={inputText}
        onChange={handleInputChange}
        data-testid="input-area"
      />
      <div>
        <button className="btn btn-primary me-4" onClick={toggleOmitWords} data-testid="action-btn">
          {omitWords ? "Show All Words" : "Omit Words"}
        </button>
        <button onClick={clearFields} className="btn btn-primary" data-testid="clear-btn">
          Clear
        </button>
      </div>
      <div className="my-3">
        <h2>Output:</h2>
        <p data-testid="output-text">{getProcessedText()}</p>
      </div>
    </div>
  );
}

export { WordOmitter };
