import React, { use, useState } from "react";
import Question from "./components/question";
import './index.css'
import data from './components/data';
function App() {

  const [dataquestion, setdataquestion] = useState(data)

  return (
    <div className="containerFake">
      <h1 className="questionTitle">have question?? </h1>
      <div className="info">
        {
          dataquestion.map((dataquestion) => {
            return <Question {...dataquestion}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
