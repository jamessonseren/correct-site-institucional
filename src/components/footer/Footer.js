import React from 'react'
import {Image, Row, Col} from 'react-bootstrap'
import { Link, } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <Row style={{backgroundColor: "rgba(14, 14, 14, 0.9)", padding: 20}}>
            <Col sm={2} className="justify-content-center align-items-center d-flex">
                <Image className="p-3" style={{width: '70%'}} src={require('../../assets/robot.png')} fluid/>
            </Col>
            <Col sm={8} className="justify-content-center align-items-center d-flex" style={{flexDirection: 'column'}}>
                <Row>
                    <span  className='ml-2 mr-2 text-light'>
                    <Link className='navbar-link-trade ml-2 mr-2'>Privacidade</Link>
                    |
                    <Link className='navbar-link-trade ml-2 mr-2'>Segurança</Link>
                    |
                    <Link className='navbar-link-trade ml-2 mr-2' to='/contato'>Contato</Link>
                    </span>
                </Row>
                <Row className='mt-3'>
                    <FaFacebook color='white' className='mr-3' size={30}/>
                    <FaInstagram color='white' size={30}/>
                </Row>
                <div className='mt-3 text-light'>
                    <span className='text-lightml-2 mr-2 text-light'>
                    <Link className='text-light ml-2 mr-2'>(67) 3253-7232</Link>
                    |
                    <Link className='text-light ml-2 mr-2'>teste@tradecard.net.br</Link>
                    </span>
                </div>
            </Col>
            <Col sm={2} className="justify-content-center align-items-center d-flex" style={{flexDirection: 'column'}}>
                <a> <Image src={require('../../assets/download_google_play.png')} style={{width: '50%'}} rounded fluid/> </a>
                <a> <Image src={require('../../assets/download_app_store.png')} style={{width: '50%', marginTop: 10}} rounded fluid/> </a>
            </Col>
            <Col sm={12} className="justify-content-center align-items-center d-flex" style={{color: '#ccc'}}>
                © Tradecard 2018 - 2020 - Todos os direitos reservados.
            </Col>
        </Row>
    )
}
