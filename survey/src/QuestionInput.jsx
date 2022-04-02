import {useState} from "react";

export function QuestionInput({onQuestionAdd}){
let [questionValue,setQuestionValue] = useState("");

const handleQuestionInputChange = (e) => {
    if (e.target.value) {
      setQuestionValue(e.target.value);
    }
  };

const handleAddQuestionButtonClick = () => {
    onQuestionAdd(questionValue);
    setQuestionValue("");
  };

return (
    <>
      <input value={questionValue} onChange={handleQuestionInputChange} type="text" />
      <button onClick={handleAddQuestionButtonClick}>Add Question</button><br/>
    </>
  );
}