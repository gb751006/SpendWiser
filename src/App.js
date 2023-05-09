import './App.css';
import AllRoutes from './Components/AllRoutes';
import { Landingpage } from './Pages/Landingpage';
import Private from './Pages/Private';



function App() {
  return (
    <div className="App">
    <AllRoutes/>
    <Private/>
    </div>
  );
}

export default App;
