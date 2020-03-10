import React from 'react';
import { BrowserRouter, Route,  } from "react-router-dom";
import "./App.css"
import NavBar from './components/navbar/Navbar'
import { AnimatedSwitch } from 'react-router-transition';

// Routes
import SobreNos from './components/sobre_nos/SobreNos'
import Contato from './components/contato/Contato'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
          <AnimatedSwitch atEnter={{ left: -1000 }} atLeave={{ left: -1600 }} atActive={{ left: 0 }} className="switch-wrapper">
            <Route path='/sobre_nos'>
              <SobreNos/>
            </Route>
            <Route path='/contato'>
              <Contato/>
            </Route>
          </AnimatedSwitch>
    </BrowserRouter>
  );
}

export default App;
