import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from "react-router-dom";

import "./navbar.css"


export default function NavBar(){
    return(
        <Navbar className='navbar-trade' expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="ml-auto mr-auto">
                    <Navbar.Brand>
                        <img src={require('../../assets/tradecard_logo_white.png')} alt='Tradecard Logo' height='50%' width='70' className='logo' />
                    </Navbar.Brand>
                    <Nav.Link><Link className='navbar-link-trade' to='/sobre_nos'>Sobre nós</Link></Nav.Link>
                    <Nav.Link><Link className='navbar-link-trade' to='/produtos'>Produtos</Link></Nav.Link>
                    <Nav.Link><Link className='navbar-link-trade' to='/vantagens'>Vantagens</Link></Nav.Link> 
                    <Nav.Link><Link className='navbar-link-trade' to='/aplicativos'>Aplicativos</Link></Nav.Link>
                    <Nav.Link><Link className='navbar-link-trade' to='/clientes'>Clientes</Link></Nav.Link>
                    <Nav.Link><Link className='navbar-link-trade' to='/contato'>Contato</Link></Nav.Link>
                    <Nav.Link><Link className='navbar-link-trade' to='/trade_shop'>StarkShop</Link></Nav.Link>
                    <Nav.Link><Link className='navbar-link-trade' to='/rede_compras'>Rede de compras</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}