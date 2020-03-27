import React, {useEffect, useState} from 'react';
import {Col, Row, Container, Image} from 'react-bootstrap'
import posed from 'react-pose'
import "./aplicativos.css"
  
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
            <Col sm={3} className='align-items-center justify-content-center d-flex'>
                <Box pose={isVisible ? 'visible' : 'hidden'}>
                    <Image src={require('../../assets/main_screen_app.png')} style={{width: '80%'}} rounded fluid/>
                </Box>
            </Col>

            <Col>
                <Box pose={isVisible ? 'visible' : 'hidden'}>
                    <h4 className='text-light' style={{fontWeight: 500}}>APP Tradecard</h4>
                    <p className='text-light text-justify' style={{textIndent: '1.5rem'}}>
                        Para o mundo moderno das pessoas físicas que se importam com a praticidade dos procedimentos, 
                        com a desburocratização, obtenção de descontos e economia, com o avanço da tecnologia e suas tendências, 
                        para obter vantagens nas atividades do seu dia a dia, a Tradecard, como princípio, proporciona o melhor 
                        relacionamento com todos que são envolvidos nesses processos e revoluciona sua atuação, com a composição de vários serviços em um só instrumento 
                        <strong> "APP Tradcard"</strong>, permitindo com facilidade e comodidade, o controle na palma da sua mão. Basta um celular!
                    </p>
                    <a> <Image src={require('../../assets/download_google_play.png')} style={{width: '20%'}} rounded fluid/> </a>
                    <a> <Image src={require('../../assets/download_app_store.png')} style={{width: '21%'}} className='ml-5' rounded fluid/> </a>
                </Box>
            </Col>
        </Row>
    </Container>
    )
}