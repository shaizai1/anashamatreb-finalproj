
import './App.css';
import CurrentlyWatching from './components/section2';
import FinishedWatching from './components/section3';
import MoviesToWatch from './components/section1';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <MoviesToWatch />
        <CurrentlyWatching />
        
      
    </div>
  );
}

export default App;
