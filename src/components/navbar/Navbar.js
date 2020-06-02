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
                    <Nav.Link><Link className='navbar-link-trade' to='/'>Sobre Nós</Link></Nav.Link>
                    <Nav.Link><Link className='navbar-link-trade' to='/para_voce'>Para Você</Link></Nav.Link> 
                    <Nav.Link><Link className='navbar-link-trade' to='/para_empresas'>Para Empresas</Link></Nav.Link>
                    <Nav.Link><Link className='navbar-link-trade' to='/para_seu_negocio'>Parceiros Comerciais</Link></Nav.Link> 
                    <Nav.Link><Link className='navbar-link-club' to='/correct_club'>Correct Club</Link></Nav.Link>
                    <Nav.Link><Link className='navbar-link-trade' to='/contato'>Contato</Link></Nav.Link>
                    <Nav.Link><Link className='navbar-link-trade' to='/correct_shop'>Correct Shop</Link></Nav.Link>
                    <Nav.Link><Link className='navbar-link-trade' to='/rede_compras'>Rede de compras</Link></Nav.Link>
                    {/* <a style={{backgroundColor: '#00788c', color: 'white', borderWidth: 0, padding: 10, outline: 'none', fontSize: '0.8rem', borderRadius: '20px', textAlign: 'center'}} className='font-weight-bold'>Baixe o APP</a> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}