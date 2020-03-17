import React from 'react';
import {Col, Row, Container, Image, Carousel} from 'react-bootstrap'
import ListaProdutos  from './produtosLista'
import Presetation  from './apresentacao.js'
import VantagensCards  from './vantagensCartoes.js'
import ScrollAnimation from 'react-animate-on-scroll';
import "./produtos.css"

export default function Produtos(){
    return(
    <div>
    <Container fluid>
        <Row className="">
            <Presetation />
        </Row>
    </Container>
    <Container fluid>
        <Row className="">
            <VantagensCards/>
        </Row>
    </Container>
    <Container fluid>
        <Row className="">
            <ListaProdutos/>
        </Row>
    </Container>
    </div>
    )
}