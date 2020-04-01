import React, { useState, useEffect } from 'react';
import {Container, Row} from 'react-bootstrap'
import posed from 'react-pose';
import "./SobreNos.css"

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

export default function SobreNos(){
    const [isVisible, setVisible] = useState(false)
    
    useEffect(() => {
        setVisible(true)
    }, [])

    return(
        <Container fluid={true} className='p-0 m-0'  style={{overflow: 'hidden'}}>
            <Row className='backgroundImage d-flex justify-content-center'>
                <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center ml-5 row col-8'>
                    <p className="description">
                        A <span className='font-weight-bold'>Tradecard</span> surgiu no Brasil em 2018, com a finalidade de trazer o que existe de mais moderno e inovador, nas áreas de Recursos Humanos (benefícios), 
                        <span className='font-weight-bold'> Compras, Pagamentos, Empréstimos, Economia, Saúde, Bem Estar, Diversão, Segurança e muitas outras</span>.
                    </p>
                </Box>
            </Row>
        </Container>
    )
}