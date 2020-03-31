import React from 'react';
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import "./App.css"
import NavBar from './components/navbar/Navbar'

// Routes
import SobreNos from './components/sobre_nos/SobreNos'
import Contato from './components/contato/Contato'
import Produtos from './components/produtos/Produtos'
import Vantagens from './components/vantagens/Vantagens'
import Aplicativos from './components/aplicativos/Aplicativos'
import Tradeshop from './components/trade_shop/tradeshop'
import RedeCompras from './components/rede_compras/redeCompras'
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
        <Route path='/produtos'>
          <Produtos/>
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
        <Route path='/trade_shop'>
          <Tradeshop/>
          <Footer />
        </Route>
        <Route path='/aplicativos'>
          <Aplicativos/>
          <Footer />
        </Route>
        <Route path='/rede_compras'>
          <RedeCompras/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
