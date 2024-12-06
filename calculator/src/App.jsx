import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");

  return (
    <>
      <div className="calculator-container">
        <div className="calculator-display">
          <input type="text" className="Display" value={display} />
        </div>
        <div className="calculator-buttons">
          <div>
            <button onClick={(e) => setDisplay("")}>C</button>
            <button onClick={(e) => setDisplay(display.slice(0, -1))}>
              DE
            </button>
            <button
              value={"%"}
              onClick={(e) => setDisplay(display + e.target.value)}
            >
              %
            </button>
            <button
              value={"/"}
              onClick={(e) => setDisplay(display + e.target.value)}
            >
              /
            </button>
          </div>
          <div>
            <button
              value={7}
              onClick={(e) => {
                setDisplay(display + e.target.value);
              }}
            >
              7
            </button>
            <button
              value={8}
              onClick={(e) => setDisplay(display + e.target.value)}
            >
              8
            </button>
            <button
              value={9}
              onClick={(e) => setDisplay(display + e.target.value)}
            >
              9
            </button>
            <button
              value={"*"}
              onClick={(e) => setDisplay(display + e.target.value)}
            >
              X
            </button>
          </div>{" "}
          <div>
            <button
              value={4}
              onClick={(e) => setDisplay(display + e.target.value)}
            >
              4
            </button>
            <button
              value={5}
              onClick={(e) => setDisplay(display + e.target.value)}
            >
              5
            </button>
            <button
              value={6}
              onClick={(e) => setDisplay(display + e.target.value)}
            >
              6
            </button>
            <button
              value={"-"}
              onClick={(e) => setDisplay(display + e.target.value)}
            >
              -
            </button>
          </div>
          <div>
            {" "}
            <button
              value={1}
              onClick={(e) => setDisplay(display + e.target.value)}
            >
              1
            </button>
            <button
              value={2}
              onClick={(e) => setDisplay(display + e.target.value)}
            >
              2
            </button>
            <button
              value={3}
              onClick={(e) => setDisplay(display + e.target.value)}
            >
              3
            </button>
            <button
              value={"+"}
              onClick={(e) => setDisplay(display + e.target.value)}
            >
              +
            </button>
          </div>
          <div>
            <button
              value={0}
              onClick={(e) => setDisplay(display + e.target.value)}
            >
              0
            </button>
            <button
              value={"."}
              onClick={(e) => setDisplay(display + e.target.value)}
            >
              .
            </button>
            <button value={"="} onClick={(e) => setDisplay(eval(display))}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
