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
                    <Container fluid={'yes'}>
                        <GuiaComercios/>
                    </Container>
                    <Container fluid={'yes'}>
                        <Footer/>
                    </Container>
                </div>
            </div>
        </div>
        </>
    )
}