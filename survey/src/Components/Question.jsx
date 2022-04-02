import  {React, useState } from "react";

export default function Question() {
    let [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    if (e.target.value) {
      setInputValue(e.target.value);
    }
  };
    return (
      <div>
       <input type="text" name="question" />
       <select name="options"onChange={handleInputChange} value={inputValue} >
           <option>Question</option>
           <option value="CheckBoxes">Check Boxes</option>
           <option value="RadioButtons">Radio Buttons</option>
       </select>
       { inputValue == "CheckBoxes"  || inputValue == "RadioButtons"  ?(
        <div>
            <input type="text" name="op1" /><br/>
            <input type="text" name="op2" /><br/>
            <input type="text" name="op3" /><br/>
            <input type="text" name="op4" />
        </div>
       ):("")
       }
      </div>
    );
  }