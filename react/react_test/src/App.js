import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Button name="Hannes" age="18"/>
        <Button name="Alex" age="17"/>
        <Button name ="Finn" age="21"/>
      </header>
    </div>
  );
}

export default App;
