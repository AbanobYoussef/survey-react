import {useState} from "react";
import {QuestionInput} from "./QuestionInput";
import {OptionsInput} from "./OptionsInput";
import {QuestionList} from "./QuestinonList";

function App() {
  
  const [QuestionArr,setQuestionArr]= useState(["THIS IS THE FIRST QUESTION?"]);
  const [OptionsArr,setOptionsArr]= useState(["op1","op2","op3"]);

  return (
    <div className="App">
      <h1>Survey Creator</h1>
      <QuestionInput
      onQuestionAdd={(qvalue)=>{
        if(qvalue){
          setQuestionArr([...QuestionArr,qvalue]);
        }
        console.log(QuestionArr);
      }}      
      />
      <OptionsInput
      onOptionAdd={(ovalue)=>{
        if(ovalue){
          setOptionsArr([ovalue,...OptionsArr]);
        }
        console.log(OptionsArr);
      }}      
      />
      <QuestionList qArr={QuestionArr} oArr={OptionsArr}/>
    </div>
  );
}

export default App;

