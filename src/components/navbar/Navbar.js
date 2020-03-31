import React from 'react';
import { Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";

import "./navbar.css"

export default function NavBar(){
    return(
        <Nav className="justify-content-center navbar-trade">
            <Nav.Item  className='align-items-center justify-content-center d-flex pt-0'>
                <img src={require('../../assets/tradecard_logo_white.png')} alt='Tradecard Logo' height='40%' width='250'/>
            </Nav.Item>
            <Nav.Item><Link className='navbar-link-trade' to='/sobre_nos'>Sobre nós</Link></Nav.Item>
            <Nav.Item><Link className='navbar-link-trade' to='/produtos'>Produtos</Link></Nav.Item>
            <Nav.Item><Link className='navbar-link-trade' to='/vantagens'>Vantagens</Link></Nav.Item> 
            <Nav.Item><Link className='navbar-link-trade' to='/aplicativos'>Aplicativos</Link></Nav.Item>
            <Nav.Item><Link className='navbar-link-trade' to='/contato'>Contato</Link></Nav.Item>
            <Nav.Item><Link className='navbar-link-trade' to='/trade_shop'>TradeShop</Link></Nav.Item>
            <Nav.Item><Link className='navbar-link-trade' to='/rede_compras'>Rede de compras</Link></Nav.Item>
        </Nav>
    )
}