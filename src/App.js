import { Outlet } from 'react-router-dom';
import Nav from "./Componentes/Nav";
import './App.css';


function App() {
  return (
    <div className="App">
     <Nav/>
      <Outlet/>
    </div>
  );
}

export default App;