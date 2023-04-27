import './App.css';
import Classcomponent from './components/Classcomponent';
import Functionalcomponent from './components/Functionalcomponent';
import ManageStateCC from './components/ManageStateCC';
import HooksFC from './components/HooksFC';

function App() {
  return (
    <div className="App">
      {/* <h2><Classcomponent name="Giri" age="34"/></h2>

      <Functionalcomponent  name="Giri" age="34"/> */}

      <ManageStateCC/>

      <HooksFC/>

    </div>
  );
}

export default App;
