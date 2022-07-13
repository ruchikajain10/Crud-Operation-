import './App.css';
import Data from './components/data';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Form } from './components/form';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div >
    <BrowserRouter>
      <Link to="/form">Form</Link> <br/>
      <Link to="/data">Data</Link>

      <Routes>
         <Route path="/form" element={<Form/>}/>
         <Route path="/data" element={<Data/>}/>
      </Routes>
    </BrowserRouter>
    
     
    {/* <Link to="/form">Form</Link> */}
      <div>

        {/* <Data/> */}
      </div>
    </div>
  );
}

export default App;
