import React from 'react';
import {Col, Row, Container, Image, Carousel} from 'react-bootstrap'
import CarouselComponent  from './carrosselProdutos'
import Presetation  from './apresentacao.js'
import ScrollAnimation from 'react-animate-on-scroll';
import "./vantagens.css"

export default function Produtos(){
    return(
    <div>
    <Container fluid>
        <Row className="">
            <Presetation />
        </Row>
    </Container>
    </div>
    )
}