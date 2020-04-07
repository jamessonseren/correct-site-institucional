import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom";

import "./navbar.css"

export default function NavBar(){
    return(
        <Navbar style={{backgroundColor: "rgba(14, 14, 14, 0.9)"}} expand="lg">
            
            <Navbar.Brand href="#home"  style={{ marginLeft:'17.5%'}}><img src={require('../../assets/tradecard_logo_white.png')} className="logo" alt='Tradecard Logo'/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link ><Link className='navbar-link-trade' to='/sobre_nos'>Sobre nós</Link></Nav.Link>
                    <Nav.Link><Link className='navbar-link-trade' to='/produtos'>Produtos</Link></Nav.Link>
                    <Nav.Link><Link className='navbar-link-trade' to='/vantagens'>Vantagens</Link></Nav.Link> 
                    <Nav.Link><Link className='navbar-link-trade' to='/aplicativos'>Aplicativos</Link></Nav.Link>
                    <Nav.Link><Link className='navbar-link-trade' to='/contato'>Contato</Link></Nav.Link>
                    <Nav.Link><Link className='navbar-link-trade' to='/trade_shop'>Tradeshop</Link></Nav.Link>
                    <Nav.Link><Link className='navbar-link-trade' to='/rede_compras'>Rede de compras</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}