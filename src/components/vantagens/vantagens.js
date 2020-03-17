import React from 'react';
import {Col, Row, Container, Image, Carousel} from 'react-bootstrap'
import ProdutosPessoaFisica  from './produtos_pessoas_fisicas.js'
import Presetation  from './apresentacao.js'
import ScrollAnimation from 'react-animate-on-scroll';
import "./vantagens.css"

export default function Vantagens(){
    return(
    <div>
    <Container fluid>
        <Row className="">
            <Presetation />
        </Row>
    </Container>
    <Container fluid>
        <Row className="">
            <ProdutosPessoaFisica />
        </Row>
    </Container>
    </div>
    )
}