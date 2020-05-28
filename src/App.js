import React from 'react';
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import "./App.css"
import NavBar from './components/navbar/Navbar'

// Routes
import SobreNos from './components/sobre_nos/SobreNos'
import Contato from './components/contato/Contato'
import Empresas from './components/empresas/Empresas'
import Vantagens from './components/vantagens/Vantagens'
import Clube from './components/clube/Clube'
import Tradeshop from './components/trade_shop/Tradeshop'
import RedeDeCompras from './components/rede_compras/RedeDeCompras'
import Footer from './components/footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <NavBar/> 
      <Switch>
        <Route path='/sobre_nos'>
          <SobreNos/>
          <Footer />
        </Route>
        <Route path='/para_empresas'>
          <Empresas/>
          <Footer />
        </Route>
        <Route path='/contato'>
          <Contato/>
          <Footer />
        </Route>
        <Route path='/vantagens'>
          <Vantagens/>
          <Footer />
        </Route>
        <Route path='/correct_shop'>
          <Tradeshop/>
          <Footer />
        </Route>
        <Route path='/correct_club'>
          <Clube/>
          <Footer />
        </Route>
        <Route path='/rede_compras'>
          <RedeDeCompras/>
          <Footer/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
