
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Login } from './Login/Login';
import {Signup} from './Signup/Signup.js';
import {Rep} from './Rep/Rep.js';
import {Advisor} from './Advisor/Advisor.js';
import { testcomponent } from './Advisor/testcomponent.js';
function App() {
  return (
    <div className="App">
    
      <Routes>
      
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Rep' element={<Rep/>}/>
        <Route path='/Advisor' element={<Advisor/>}>
        <Route path='/Advisor' element={<testcomponent/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
