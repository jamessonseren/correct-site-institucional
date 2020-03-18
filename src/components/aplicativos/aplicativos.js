import React from 'react';
import {Col, Row, Container, Image} from 'react-bootstrap'
import "./aplicativos.css"

export default function Aplicativos(){
    return(
    <Container className='cor'>
        <Row>
            <Col sm={5}></Col>
            <Col className="title" sm={2}><h2>Aplicativos</h2></Col>
        </Row>
        <Row className="paragrafh" style={{backgroundColor:'black',borderBottomLeftRadius: 40,borderTopRightRadius:40}}>
            <Col sm={3}>
            <Image src={require('../../assets/icon.png')} className="img-right" width="65%" rounded fluid/>
                <Row>
                <Col sm={6}><Image src={require('../../assets/dwnApple.png')} className="img-left" rounded fluid/></Col>
                <Col sm={6}><Image src={require('../../assets/dwnGoogle.png')} className="img-left" rounded fluid/></Col>
                </Row>
            </Col>
            <Col sm={6}>
                <p className="text">TradeCard APP:</p>
                <p className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O aplicativo mobile da TradeCard!&nbsp;Acesse todos serviços da TradeCard na palma da sua mão!<br/>Baixe agora</p>
            </Col>
        </Row>
    </Container>
    )
}