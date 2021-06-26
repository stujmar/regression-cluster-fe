import './App.css';
import FlexGrid from './components/FlexGrid/FlexGrid';

function App() {
  return (
    <div className="label-wrapper">
      <div className="x-zero label">0</div>
      <div className="y-zero label">0</div>
      <div className="x-100 label">100</div>
      <div className="y-100 label">100</div>
      <FlexGrid />
    </div>
  );
}

export default App;
