import logo from './logo.svg';
import React, { useState } from "react"
import './App.css';

function App() {
  const [Hori, setHori] = useState(10)
  const [Ver, setVer] = useState(10)
  const [Blur, setBlur] = useState(10)
  const [Color, setColor] = useState("black")
  return (
    <div className="App">

      <div className="controls"> 
        <label>Horizontal length</label>
        <input type="range" min="-200" max="200" value={Hori} onChange={event => setHori(event.target.value)}/>
        <label>Vertical length</label>
        <input type="range" min="-200" max="200" value={Ver} onChange={event => setVer(event.target.value)}/>
        <label>Blur </label>
        <input type="range" min="0" max="200" value={Blur} onChange={event => setBlur(event.target.value)}/>
        <label>Color </label>
        <input type="color"  value={Color} onChange={event => setColor(event.target.value)}/>
      </div>

      <div className="output"></div>
      <div className="box" style={{ boxShadow: `${Hori}px ${Ver}px ${Blur} ${Color}`  }}></div>
      <p>Box-shadow:{Hori}px {Ver}px {Blur}px {Color}</p>

    </div>





  );
}

export default App;
