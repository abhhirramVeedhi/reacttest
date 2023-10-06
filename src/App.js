import logo from './logo.svg';
import './App.css';
import C1 from './components/C1';
import C2 from './components/C2';

function App() {
  return (
    <div>
      <h1>
        State and Props
        <C1 gift="watch"/>
        <C2 />
      </h1>
    </div>
  );
}

export default App;
