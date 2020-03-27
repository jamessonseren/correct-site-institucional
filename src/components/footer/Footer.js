import React from 'react'
import {Image, Row, Col} from 'react-bootstrap'
import { Link, } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import './footer.css'

export default function Footer() {
    return (
        <Row style={{backgroundColor: "rgba(14, 14, 14, 0.9)"}}>
            <Col sm={2} className="justify-content-center align-items-center d-flex">
                <Image className="p-3" style={{width: '70%'}} src={require('../../assets/robot.png')} fluid/>
            </Col>
            <Col sm={8} className="justify-content-center align-items-center d-flex" style={{flexDirection: 'column'}}>
                <Row>
                    <Link className='navbar-link-trade'>Privacidade</Link>
                    <span className='ml-2 mr-2 text-light'>|</span>
                    <Link className='navbar-link-trade'>Segurança</Link>
                    <span className='ml-2 mr-2 text-light'>|</span>
                    <Link className='navbar-link-trade' to='/contato'>Contato</Link>
                </Row>
                <Row className='mt-3'>
                    <FaFacebook color='white' className='mr-3' size={30}/>
                    <FaInstagram color='white' size={30}/>
                </Row>
                <Row className='mt-3 text-light'>
                    <span className='navbar-link-trade'>(67) 3253-7232</span>
                    <span className='ml-2 mr-2 text-light'>|</span>
                    <span className='navbar-link-trade'>teste@tradecard.net.br</span>
                </Row>
            </Col>
            <Col sm={2} className="justify-content-center align-items-center d-flex" style={{flexDirection: 'column'}}>
                <a> <Image src={require('../../assets/download_google_play.png')} style={{width: '50%'}} rounded fluid/> </a>
                <a> <Image src={require('../../assets/download_app_store.png')} style={{width: '50%', marginTop: 10}} rounded fluid/> </a>
            </Col>
            <Col sm={12} className="justify-content-center align-items-center d-flex" style={{color: '#ccc'}}>
                © TradeCard 2018-2020 - Todos os direitos reservados.
            </Col>

            {/* <Col sm={10}>
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
                        <Row className="espaco pIcon">
                            <SocialIcon network="email" style={{ height: 40, width: 40 }} bgColor="white" />
                            <p className="socialText">email@Tradecard.com</p>
                            <SocialIcon network="facebook" style={{ height: 40, width: 40 }} bgColor="white"/>
                            <p className="socialText">/TradeCard</p>
                            <SocialIcon network="instagram" style={{ height: 40, width: 40 }} bgColor="white"/>
                            <p className="socialText">@Tradecard</p>
                        </Row>
                        <Row  className="espaco">
                        </Row>
                        <Row className="espaco">
                        </Row>
                    <Col sm={7}>
                        <Row>
                        <Image className="robo" src={require('../../assets/robot.png')} fluid/>
                        </Row>
                    </Col>
                </Row>
            </Col> */}
        </Row>
    )
}
