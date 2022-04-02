import {useState} from "react";

export function OptionsInput({onOptionAdd}){
let [optionValue,setOptionValue] = useState("");

const handleOptionInputChange = (e) => {
    if (e.target.value) {
      setOptionValue(e.target.value);
    }
  };

const handleAddOptionButtonClick = () => {
    onOptionAdd(optionValue);
    setOptionValue("");
  };

return (
    <>
      <input value={optionValue} onChange={handleOptionInputChange} type="text" />
      <button onClick={handleAddOptionButtonClick}>Add Option</button>
    </>
  );
}