import React from 'react';
import {Container } from 'react-bootstrap'
import GuiaComercios from './guia'
import Footer from '../footer/Footer'

export default function Produtos(){
    return(
        <>
            <div>
            <div className="area" >
        <div className="context">
            <Container>
            <GuiaComercios/>
            </Container>
            <Container fluid={'yes'}>
                <Footer/>
            </Container>
        </div>
                <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
            </div>
        </div>
        </>
    )
}