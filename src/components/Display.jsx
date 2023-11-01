import React from "react";

function Display({ inputValue ,setInputValue}) {



  
  return (
    <div className="display">
     
        <input type="text" name="display" id="display" value={inputValue} maxLength={12}  />
     
    </div>
  );
}

export default Display;
