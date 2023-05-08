import './App.css';
import Classcomponent from './components/Classcomponent';
import Functionalcomponent from './components/Functionalcomponent';
import ManageStateCC from './components/ManageStateCC';
import HooksFC from './components/HooksFC';
import RenderListFC from './components/RenderListFC';

// Components for meals projects
import Navbar from './components/meals_components/Navbar';
import BodyMeals from './components/meals_components/BodyMeals';
import FooterMeals from './components/meals_components/FooterMeals';

function App() {
  return (
    <div className="App">
      {/* <h2><Classcomponent name="Giri" age="34"/></h2>

      <Functionalcomponent  name="Giri" age="34"/> */}

      {/* <ManageStateCC/>

      <HooksFC/>

      <RenderListFC/> */}

      {/* Meals Project code */}
      <Navbar/>
      <BodyMeals />
      <FooterMeals />
    </div>
  );
}

export default App;
