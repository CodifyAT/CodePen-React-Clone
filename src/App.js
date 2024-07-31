
import './App.css';
import Home from './components/home';
import DP from './context/DataProvider';
function App() {
  return (
    <div className="App">
      <DP>
      <Home/>
      </DP>
    </div>
  );
}

export default App;
