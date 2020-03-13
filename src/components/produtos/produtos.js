import React from 'react';
import {Col, Row, Container, Image, Carousel} from 'react-bootstrap'
import CarouselComponent  from './carrosselProdutos'
import Presetation  from './apresentacao.js'
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
        {/*<Row className="paragrafh" style={{ backgroundColor:"#303030",borderBottomRightRadius: 40,borderTopLeftRadius:40}}>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('../../assets/talking.jpg')}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Olaá</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('../../assets/talking.jpg')}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>fim</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Row>*/}
    
    <Container>
        <Row className="">
            <CarouselComponent />
        </Row>
    </Container>
    </div>
    )
}