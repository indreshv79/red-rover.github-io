import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import HowItWorks from './Pages/HowItWorks';
import Regions from './Pages/Regions';
import Inquire from './Pages/InquireUs';
import './index.css';

function App() {
  return (
    <Router>
        <div className="App">           
          <Routes>
                  <Route exact path='/' element={< Home />}></Route>
                  <Route exact path='/how-it-works' element={< HowItWorks />}></Route>
                  <Route exact path='/regions' element={< Regions />}></Route>
                  <Route exact path='/inquire-us' element={< Inquire />}></Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
