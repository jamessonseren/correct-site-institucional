import React, { useState, useEffect } from 'react';
import {Container, Row} from 'react-bootstrap'
import posed from 'react-pose';
import { Link } from "react-router-dom";
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
            <Row className='d-flex justify-content-center p-5 backgroundImage'>
                <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center row col-8'>
                    <p className="description">
                        A <strong><i>Correct</i></strong> surgiu no Brasil em 2018, com a finalidade de trazer o que existe de mais moderno e inovador, em um único APP. Atuamos nas áreas de Benefícios (RH), 
                        Intermediação de Negócios (Compras / Vendas), Pagamentos, Economia Familiar, Saúde e Bem Estar, Entretenimento, Clube de Vantagens e outras.
                    </p>
                </Box>
            </Row>
            <Row className='d-flex justify-content-around p-5' style={{height: '60vh'}} >
                <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center row col-md-4'>
                    <p className="description_subcategoria">
                        Para as Pessoas Físicas que buscam <strong>praticidade, descontos, economia e vantagens</strong>, lançamos o APPCorrect. Dentro do APP você pode realizar compras, pagamentos, recargas e muito mais, tudo isso na palma da sua mão.
                        <br/><strong>Aqui seu Cashback é garantido em toda compra!</strong>
                    </p>
                    <Link to='/para_voce' className='w-100'><button className='btn-sm w-100 btn-club'>Saiba mais</button> </Link>
                </Box>
                <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center row col-md-4'>
                    <img src={require('../../assets/robot_celular.png')} className="logotipo" alt='Correct Logo'/>
                </Box>
            </Row>
            <Row className='d-flex justify-content-around p-5' style={{backgroundColor: 'rgba(0,0,0,0.1)', height: '60vh'}}>
                <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center row col-md-4'>
                    <img src={require('../../assets/robot.png')} className="robot_description" alt='Correct Logo'/>
                </Box>
                <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center row col-md-4'>
                    <p className="description_subcategoria">
                        Para o mundo Corporativo, a <strong><i>Correct</i></strong> lança no Mercado Brasileiro uma grande novidade na área de Recursos Humanos (Benefícios), como <strong>Adiantamento Salarial, Vale Alimentação, Refeição, Combustível, Programas de Saúde e outros</strong>. Tudo isso em uma plataforma de autogestão.
                        <br/><strong>Você escolhe como quer trabalhar!</strong>
                    </p>
                    <Link to='/para_empresas' onclick={() => window.scrollTo(0, 0)} className='w-100'><button className='btn-sm w-100 btn-club'>Saiba mais</button> </Link>
                </Box>
            </Row>
        </Container>
    )
}