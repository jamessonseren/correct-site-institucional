import React, { Component } from 'react'
import {Navbar, Nav, Image, Row, Col} from 'react-bootstrap'
import { Link, } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import './footer.css'

export default function Footer() {
    return (
        <>
            <Row className="foot">
                <Col sm={4}>
                    <Row>
                        <Col sm={6}>
                            <Image className="logof" src={require('../../assets/tradecard_logo_white.png')} fluid/>
                        </Col>
                        <Col sm={6}>
                            <Row className="itemRodUm">
                                <Link className='navbar-link-trade' to='/sobre_nos'>Sobre nós</Link>
                            </Row>
                            <Row className="itemRod">
                                <Link className='navbar-link-trade' to='/produtos'>Produtos</Link>
                            </Row>
                            <Row className="itemRod">
                                <Link className='navbar-link-trade' to='/contato'>Contato</Link>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col className="divRodape" sm={4}>
                    <Row className="justify-content-center rodape">© TradeCard 2020 - Todos os direitos reservados.</Row>
                </Col>
                <Col sm={4}>
                    <Row>
                        <Col sm={4}>
                            <Row className="espaco pIcon">
                                <SocialIcon network="email" style={{ height: 40, width: 40 }} bgColor="white" />
                                <p className="socialText">email@Tradecard.com</p>
                            </Row>
                            <Row  className="espaco">
                                <SocialIcon network="facebook" style={{ height: 40, width: 40 }} bgColor="white"/>
                                <p className="socialText">/TradeCard</p>
                            </Row>
                            <Row className="espaco">
                                <SocialIcon network="instagram" style={{ height: 40, width: 40 }} bgColor="white"/>
                                <p className="socialText">@Tradecard</p>
                            </Row>
                        </Col>
                        <Col sm={7}>
                            <Row>
                            <Image className="robo" src={require('../../assets/robot.png')} fluid/>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
