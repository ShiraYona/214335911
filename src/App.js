// import logo from './logo.svg';
import './App.css';
import Dates from './Dates';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
    <Route path="/"element={<Dates/>}></Route>
    
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
