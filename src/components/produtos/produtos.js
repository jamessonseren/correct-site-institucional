import React from 'react';
import {Col, Row, Container, Image, Carousel} from 'react-bootstrap'
import CarouselComponent  from './carrosselProdutos'
import Presetation  from './apresentacao.js'
import Vantagens  from './vantagens.js'
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
        <ScrollAnimation delay={200} animateIn='fadeIn' animateOnce={true}>
            <Row>
            <Col sm={5}></Col>
            <Col sm={4}>
                <h1 className="title">
                    Produtos:
                </h1>
            </Col>
            </Row>
        </ScrollAnimation>
    </Container>
    <Container>
        <Row className="">
            <CarouselComponent />
        </Row>
    </Container>
    <Container>
        <Row className="">
            {/*<Vantagens />*/}
        </Row>
    </Container>
    </div>
    )
}