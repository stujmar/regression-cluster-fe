import './App.css';
import React, {useState} from 'react'
import FlexGrid from './components/FlexGrid/FlexGrid';

function App() {

  // const [dots, setDots] = useState([]);
  const [ mouse, setMouse] = useState({ x: 0, y: 0, xMax: 0, yMax: 0});
  let grid = document.getElementById('grid');

  const handleMouseMove = (e) => {
    console.log(e);
    setMouse({
      x:e.nativeEvent.offsetX > 0 ? e.nativeEvent.offsetX : 0,
      y:e.nativeEvent.offsetY > 0 ? e.nativeEvent.offsetY : 0,
      xMax: grid.clientWidth,
      yMax: grid.clientWidth
  })
  // console.log(mouse)
  }

  return (
    <div className="label-wrapper">
      <div className="x-zero label">0</div>
      <div className="y-zero label">0</div>
      <div className="x-100 label">100</div>
      <div className="y-100 label">100</div>
      <button 
        id="grid"
        className="clean-button"
        onMouseMove={(e) => handleMouseMove(e)}
        onClick={(() => {console.log("grid clicked")})}>
        <FlexGrid />
      </button>
    </div>
  );
}

export default App;
