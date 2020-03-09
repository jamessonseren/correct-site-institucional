import React from 'react';
import { BrowserRouter, Route,  } from "react-router-dom";
import "./app.css"
import NavBar from './components/navbar/Navbar'
import { AnimatedSwitch } from 'react-router-transition';
// Routes
import SobreNos from './components/sobre_nos/SobreNos'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
          <AnimatedSwitch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }} className="switch-wrapper">
            <Route path='/sobre_nos'>
              <SobreNos/>
            </Route>
          </AnimatedSwitch>
    </BrowserRouter>
  );
}

export default App;
