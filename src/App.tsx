import { count } from "console";
import React from "react";
import "./App.css";
import Counter from "./Counter";
import TextField from "./TextField";

const App: React.FC = () => {
  return (
    <div className="App">
      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => { setCount(count + 1)}}> + </button>
          </div>
        )}
      </Counter>
      <TextField
        text="hello"
        person={{ firstName: "", lastName: "" }}
        handleChange={(e) => {
          e.target.value;
        }}
      />
    </div>
  );
};

export default App;
