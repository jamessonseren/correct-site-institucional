import React from 'react';
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import "./App.css"
import NavBar from './components/navbar/Navbar'

// Routes
import SobreNos from './components/sobre_nos/SobreNos'
import Contato from './components/contato/Contato'
import Produtos from './components/produtos/Produtos'
import Vantagens from './components/vantagens/vantagens'
import Aplicativos from './components/aplicativos/Aplicativos'
import RedeCompras from './components/rede_compras/redeCompras'

function App() {
  return (
    <BrowserRouter>
      <NavBar/> 
      <Switch>
        <Route path='/sobre_nos'>
          <SobreNos/>
        </Route>
        <Route path='/produtos'>
          <Produtos/>
        </Route>
        <Route path='/contato'>
          <Contato/>
        </Route>
        <Route path='/vantagens'>
          <Vantagens/>
        </Route>
        <Route path='/aplicativos'>
          <Aplicativos/>
        </Route>
        <Route path='/rede_compras'>
          <RedeCompras/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
