import './App.css';
import Classcomponent from './components/Classcomponent';
import Functionalcomponent from './components/Functionalcomponent';

function App() {
  return (
    <div className="App">
      <h1>Hello world </h1>
      <h2><Classcomponent name="Giri" age="34"/></h2>

      <Functionalcomponent  name="Giri" age="34"/>
    </div>
  );
}

export default App;
