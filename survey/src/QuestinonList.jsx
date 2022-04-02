
export function QuestionList({ qArr, oArr }) {
  return (
    <div>
        {
        qArr.map((qValue,qindex)=>{
              <h2>{qValue}</h2>
            oArr.map((oValue,oindex)=>{
            (qindex==oindex||oindex==qindex+1||oindex==qindex+2)&&<input type="checkbox" value={oValue}>{oValue}</input>
            })
        })
        }
    </div>
  );
}