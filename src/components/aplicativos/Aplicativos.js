import React, {useEffect, useState} from 'react';
import {Col, Row, Container, Image} from 'react-bootstrap'
import posed from 'react-pose'
import './Aplicativos.css'

const Box = posed.div({
    visible: { 
        x: 0,
        opacity: 1,
        scaleY: 1,
        transition: { duration: 250 }
    },
    hidden: { 
        x: -500,
        opacity: 0,
        scaleY: 0,
        transition: { duration: 250 }
    }
});

export default function Aplicativos(){

    const [isVisible, setVisible] = useState(false)
    
    useEffect(() => {
        setVisible(true)
    }, [])

    return(
        <Container className='p-5'>
            <Row className='justify-content-center'>
                <Col sm={3}>
                    <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center d-flex'>
                        <Image src={require('../../assets/main_screen_app.png')} style={{width: '80%'}} className='app-image' rounded fluid/>
                    </Box>
                </Col>

                <Col>
                    <Box pose={isVisible ? 'visible' : 'hidden'}>
                        <h3 className='text-light app-title' style={{fontWeight: 600}}>APP Correct</h3>
                        <p className='text-light text-justify mb-5 app-description' >
                            Para o mundo moderno das pessoas físicas que se importam com a praticidade dos procedimentos, 
                            com a desburocratização, obtenção de descontos e economia, com o avanço da tecnologia e suas tendências, 
                            para obter vantagens nas atividades do seu dia a dia, a Correct, como princípio, proporciona o melhor 
                            relacionamento com todos que são envolvidos nesses processos e revoluciona sua atuação, com a composição de vários serviços em um só instrumento 
                            <strong> "APP Correct"</strong>, permitindo com facilidade e comodidade, o controle na palma da sua mão. Basta um celular!
                        </p>
                        <a href='#'> <Image src={require('../../assets/download_google_play.png')} style={{width: '20%'}} className='icon-download' rounded fluid/> </a>
                        <a href='#'> <Image src={require('../../assets/download_app_store.png')} style={{width: '21%'}} className='ml-5 icon-download' rounded fluid/> </a>
                    </Box>
                </Col>
            </Row>
            <Row className='justify-content-between container-margin'>
                <Col className='p-0'>
                    <Box pose={isVisible ? 'visible' : 'hidden'}>
                        <h3 className='text-light app-title' style={{fontWeight: 600}}>Módulo de vendas - Correct</h3>
                        <p className='text-light text-justify app-description'>
                            O Módulo de vendas da Correct permite realizar vendas através de QR-Code e Token com técnologia e segurança de ponta!
                        </p>
                        <a href='#'> <Image src={require('../../assets/download_windows.png')} style={{width: '28%'}} className='mt-4 icon-download' rounded fluid/> </a>
                    </Box>
                </Col>
                <Col lg={5} className='align-items-center justify-content-center d-flex'>
                    <Box pose={isVisible ? 'visible' : 'hidden'}>
                        <Image src={require('../../assets/app_windows.png')} style={{width: '100%'}} rounded fluid/>
                    </Box>
                </Col>
            </Row>
        </Container>
    )
}