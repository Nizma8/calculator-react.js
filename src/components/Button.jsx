import React from 'react';

function Button({handleClick}) {
  return (
    <div className='wrapper'>
      <div className='grides'>
        {["AC","/","*","C",'7', '8', '9', '+', '4', '5', '6', '-','1', '2', '3',"%","0",",","="].map((item,index)=>{
          return (
            <button key={index} onClick={()=>{handleClick(item.toString())}}>{item}</button>
          )
        })}
       
      </div>
    </div>
  );
}

export default Button;
