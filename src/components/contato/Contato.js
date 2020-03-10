import React from 'react'
import {Col, Row, Container, Image} from 'react-bootstrap'
import './contato.css'

export default function Contato(){
    return(
        
        <Container  fluid={true} className='cor'>
            <Row>
                <Col sm={5}></Col>
                <Col className="title" sm={2}><h2>Contato</h2></Col>
            </Row>
            <Row className="paragrafh" style={{ background: 'linear-gradient(to right bottom, #00788c, #0a96ad)',borderBottomRightRadius: 40,borderTopLeftRadius:40}}>
                <Col sm={6} clasName="text text-center dist">
                    <p className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                </Col>
                <Col sm={6}  float="center">
                    <Image src={require('../../assets/talking.jpg')} className="img-right" width="65%" rounded fluid/>
                </Col>
            </Row>
            <Row style={{backgroundColor:'black',borderBottomLeftRadius: 40,borderTopRightRadius:40}}>
                <Col sm={6}>
                    <Image src={require('../../assets/services.jpg')} className="img-left" width="65%" rounded fluid/>
                </Col>
                <Col sm={6}>
                <p className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ptestes</p>
                </Col>
            </Row>
        </Container>
    )
}