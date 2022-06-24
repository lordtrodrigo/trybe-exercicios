import logo from './logo.svg';
import './App.css';

const tasks = [];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const Input = <input className = 'input-task'></input>;

const createTask = () => {
  
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de tarefas com React</h1>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Input/> */}
        <p>
          {Task('Ciranda cirandinha')}
        </p>
        <a
          className="App-link"
          href="https://thiagorvianas.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          About me
        </a>
      </header>
    </div>
  );
}

export default App;
