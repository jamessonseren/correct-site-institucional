import React from 'react';
import {Col, Row, Container, Image, Carousel} from 'react-bootstrap'
import GuiaComercios from './guia'

export default function Produtos(){
    return(
    <div>
    <Container fluid>
        <Row className="">
        <GuiaComercios/>
        </Row>
    </Container>
    </div>
    )
}