
import './App.css';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Pokedex</h1>
      </header>

      <div className='pokedex'>
        <Pokedex />
      </div>
    </div>
  );
}

export default App;
