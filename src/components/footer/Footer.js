import React from 'react'
import {Image, Row, Col} from 'react-bootstrap'
import { Link, } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <Row style={{backgroundColor: "rgba(14, 14, 14, 0.9)", padding: 20}}>
            <Col sm={2} className="justify-content-center align-items-center d-flex">
                <Image className="p-3" style={{width: '45vh'}} src={require('../../assets/robot.png')} fluid/>
            </Col>
            <Col sm={8} className="justify-content-center align-items-center d-flex" style={{flexDirection: 'column'}}>
                <Row>
                    <Col sm={12}>
                        <span  className='ml-2 mr-2 text-light navbar-link-trade'>
                        <Link className='navbar-link-trade pad'>Privacidade</Link>
                        |
                        <Link className='navbar-link-trade pad'>Segurança</Link>
                        |
                        <Link className='navbar-link-trade pad' to='/contato'>Contato</Link>
                        </span>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <FaFacebook color='white' className='mr-3 iconFooter' />
                    <FaInstagram color='white' className=' iconFooter' />
                </Row>
                <Row>
                    <Col sm={12}>
                            <span className='text-light text-light fontr'>
                            <Link className='text-light pad'>(67) 3253-7232</Link>
                            |
                            <Link className='text-light pad'>teste@tradecard.net.br</Link>
                            </span>
                    </Col>
                </Row>
            </Col>
            <Col sm={2} className="justify-content-center align-items-center d-flex" style={{flexDirection: 'column'}}>
                <a> <Image src={require('../../assets/download_google_play.png')} style={{width: '25vh', marginTop: 10}} rounded fluid/> </a>
                <a> <Image src={require('../../assets/download_app_store.png')} style={{width: '25vh', marginTop: 10}} rounded fluid/> </a>
            </Col>
            <Col sm={12} className="justify-content-center navbar-link-trade align-items-center d-flex" style={{color: '#ccc'}}>
                © Tradecard 2018 - 2020 - Todos os direitos reservados.
            </Col>
        </Row>
    )
}
