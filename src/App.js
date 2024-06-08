
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sale from './components/Sale.js';
import Buy from './components/Buy.js';
import Rent from './components/Rent.js';
import AboutUs from './components/AboutUs.js';

function App(){
return (
  <div>
    <Router>
      <Navbar />
      
      <div className="container my-3">
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/aboutus" element={< AboutUs/>} />
          <Route path="/buy" element={<Buy />}/>
          <Route path="/sale" element={< Sale/>}/>
          <Route path="/rent" element={<Rent/>}/>
          
        </Routes>
      </div>
    </Router>
  </div>
);
}

export default App;
