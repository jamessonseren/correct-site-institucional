import React from 'react';
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import "./App.css"
import ScrollToTop from './ScrollToTop'
// Routes
import NavBar from './components/navbar/Navbar'
import SobreNos from './components/sobre_nos/SobreNos'
import Contato from './components/contato/Contato'
import Aplicativo from './components/app/Aplicativo.js'
import Empresas from './components/empresas/Empresas'
import Negocio from './components/comercio/Negocio'
import Clube from './components/clube/Clube'
import Tradeshop from './components/trade_shop/Tradeshop'
import RedeDeCompras from './components/rede_compras/RedeDeCompras'
import Footer from './components/footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <NavBar/> 
        <Switch>
          <Route exact path='/'>
            <SobreNos/>
            <Footer />
          </Route>
          <Route path='/para_voce'>
            <Aplicativo/>
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
          <Route path='/para_seu_negocio'>
            <Negocio/>
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
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
