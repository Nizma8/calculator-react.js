import React, { useRef, useState } from "react";
import Display from "./Display";
import Button from "./Button";

function ArithematicCalculator() {
  const [inputValue, setInputValue] = useState("");
  const inputref = useRef(null)
  const handleClick = (value) => {
    if (value === "AC") {
  setInputValue(""); 
  inputref.current.focus()
}
      // Clear the input value
else if (value === "C") {
      setInputValue(inputValue.slice(0, -1));
      // Remove the last character
    } 
    
    else if(value === "="){

     
      try {
        setInputValue(eval(inputValue).toString());
      } catch (error) {
        setInputValue("Error");
      }
    }
     else {
      setInputValue(inputValue + value);
      
      // Append the clicked value
    }
  };

  return (
    <div className="calculator">
      <div className="content">
        <Display inputValue={inputValue} setInputValue={setInputValue} />
        <Button handleClick={handleClick} />
      </div>
    </div>
  );
}

export default ArithematicCalculator;
