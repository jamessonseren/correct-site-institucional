import React from 'react'
import {Image, Row, Col} from 'react-bootstrap'
import { Link, } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import './Footer.css'

export default function Footer() {
    return (
        <Row style={{backgroundColor: "rgba(14, 14, 14, 0.9)", padding: 20}}>
            <Col lg={2} className="justify-content-center align-items-center d-flex">
                <Image className="p-1 robot" src={require('../../assets/robot.png')} fluid/>
            </Col>
            <Col lg={8} className="justify-content-around align-items-center d-flex" style={{flexDirection: 'column'}}>
                <Row className='text-light align-items-center mb-2'>
                    <a className='navbar-link-trade mr-2' href='https://www.correct.com.br/termos/POLITICA_DE_PRIVACIDADE.pdf'>Segurança e Privacidade</a>
                    |
                    <Link className='navbar-link-trade ml-2' to='/contato'>Contato</Link>
                </Row>
                <Row className='text-light align-items-center mb-2'>
                    <Link className='text-light mr-2 contato'>(67) 3253-7232</Link>
                </Row>
                <Row>
                    <a href={"https://www.facebook.com/pg/correctofc"} target='_blank' rel="noopener noreferrer"><FaFacebook color='white' className='mr-3' /></a>
                    <a href={"https://www.instagram.com/correctofc/"} target='_blank' rel="noopener noreferrer"><FaInstagram color='white' /></a>
                </Row>
            </Col>
            <Col lg={2} className="justify-content-center align-items-center d-flex" style={{flexDirection: 'column'}}>
                <a target='_blank' rel="noopener noreferrer" href='https://play.google.com/store/apps/details?id=com.correct_app'> <Image src={require('../../assets/download_google_play.png')} style={{width: '15vh', marginTop: 10}} rounded fluid/> </a>
                <a href='https://apps.apple.com/br/app/appcorrect/id1527428934'> <Image src={require('../../assets/download_app_store.png')} style={{width: '15vh', marginTop: 10}} rounded fluid/> </a>
            </Col>
            <Col sm={12} className="justify-content-center align-items-center d-flex mt-3 text-center" style={{color: '#ccc'}}>
                © Correct 2018 - 2020 - Todos os direitos reservados.
            </Col>
        </Row>
    )
}
