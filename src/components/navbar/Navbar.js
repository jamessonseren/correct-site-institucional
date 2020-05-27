import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom";
import {IoMdMenu} from 'react-icons/io'
import "./navbar.css"

export default function NavBar(){
    return(
        <Navbar style={{backgroundColor: "rgba(14, 14, 14, 0.9)"}} expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" class='text-light'>
                <IoMdMenu color='white' />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="align-items-center justify-content-center margin-auto">
                    <Nav.Link><img src={require('../../assets/logo_correct_simbolo.png')} className="logo" alt='Correct Logo'/></Nav.Link>
                    <Nav.Link><Link className='navbar-link-trade' to='/sobre_nos'>Sobre Nós</Link></Nav.Link>
                    <Nav.Link><Link className='navbar-link-trade' to='/vantagens'>Para Você</Link></Nav.Link> 
                    <Nav.Link><Link className='navbar-link-trade' to='/empresas'>Para Empresas</Link></Nav.Link>
                    <Nav.Link><Link className='navbar-link-trade' to='/vantagens'>Para seu Negócio</Link></Nav.Link> 
                    <Nav.Link><Link className='navbar-link-trade' to='/aplicativos'>Aplicativos</Link></Nav.Link>
                    <Nav.Link><Link className='navbar-link-trade' to='/contato'>Contato</Link></Nav.Link>
                    <Nav.Link><Link className='navbar-link-trade' to='/trade_shop'>Tradeshop</Link></Nav.Link>
                    <Nav.Link><Link className='navbar-link-trade' to='/rede_compras'>Rede de compras</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}