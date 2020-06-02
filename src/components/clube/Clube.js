import React, {useEffect, useState} from 'react';
import {Row, Container} from 'react-bootstrap'
import posed from 'react-pose'
import { Link } from "react-router-dom";
import './Clube.css'

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
        <Container fluid={true} className='p-0 m-0'  style={{overflow: 'hidden'}}>
            <h2 className=' text-center m-0 pt-5 title_responsive_clube'>Conheça o seu Clube de Vantagens</h2>
            <Row className='d-flex justify-content-around p-5 height_responsive_clube' style={{height: '60vh'}} >
                <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center row col-lg-4'>
                    <img src={require('../../assets/robot_rede.png')} className="card_image" alt='Correct Club'/>
                </Box>
                <Box pose={isVisible ? 'visible' : 'hidden'} className='d-flex justify-content-center row col-lg-4' style={{flexDirection: 'column'}}>
                    <h2 className=' font-weight-bold title_responsive_clube'>Rede de Compras</h2>
                    <p className="description_subcategoria_clube ">
                        Aproveite toda nossa <strong>Rede de Compras Local, com Vantagens, Descontos e Sorteios exclusivos</strong> para você! 
                        <br/>Além de todas as vantagens em sua região, disponibilizamos a <strong>Rede de Compras Online</strong>, com mais de 160 parceiros em diversos segmentos.
                        <br/><strong>Com a <strong><i>Correct</i></strong> seu Cashback já está garantido!</strong>
                    </p>
                    <Link to='/rede_compras' className='btn-sm btn-club mt-2 text-center' >Clique para saber mais</Link>
                </Box>
            </Row> 
            <Row className='d-flex justify-content-around p-5 height_responsive_clube' style={{backgroundColor: 'rgba(0,0,0,0.1)',height: '60vh'}} >
                <Box pose={isVisible ? 'visible' : 'hidden'} className='d-flex justify-content-center row col-lg-4' style={{flexDirection: 'column'}}>
                    <h2 className=' font-weight-bold title_responsive_clube'>Correct Shop</h2>
                    <p className="description_subcategoria_clube ">
                        Nossos Parceiros estão empenhados para sua maior satisfação, por isso, disponibilizamos um canal direto entre eles e você. Com o Correct Shop você tem acesso a todas as <strong>promoções exclusivas, seja Online ou Local.</strong>
                        <br/><strong>Fique por dentro de todas as promoções!</strong>
                    </p>
                    <Link to='/correct_shop' className='btn-sm btn-club mt-2 text-center' >Clique para saber mais</Link>
                </Box>
                <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center row col-lg-4'>
                    <img src={require('../../assets/robot_shop.png')} className="card_image" alt='Correct Shop'/>
                </Box>
            </Row> 
            <Row className='d-flex justify-content-around p-5 height_responsive_clube' style={{height: '60vh'}} >
                <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center row col-lg-4'>
                    <img src={require('../../assets/cartoes/parceiros_fidelidade.png')} className="card_image" alt='Fidelidade'/>
                </Box>
                <Box pose={isVisible ? 'visible' : 'hidden'} className='d-flex justify-content-center row col-lg-4' style={{flexDirection: 'column'}}>
                    <h2 className=' font-weight-bold title_responsive_clube'>Fidelidade</h2>
                    <p className="description_subcategoria_clube ">
                       O <strong>Clube de Vantagens</strong> disponibiliza aos Associados, vários Estabelecimentos que oferecem <strong>Fidelização</strong>, promovendo suas <strong>Vantagens</strong>. Disponibiliza também, GPS para facilidade de percurso e toda tecnologia desenvolvida para o maior conforto e facilidades nos processos de pedidos (cardápios), pagamentos e controle. Além das promoções pontuais oferecidas, o ganho sempre de Krats (Cashback).
                    </p>
                </Box>
            </Row> 
            <Row className='d-flex justify-content-around p-5 height_responsive_clube' style={{backgroundColor: 'rgba(0,0,0,0.1)',height: '60vh'}} >
                <Box pose={isVisible ? 'visible' : 'hidden'} className='d-flex justify-content-center row col-lg-4' style={{flexDirection: 'column'}}>
                    <h2 className=' font-weight-bold title_responsive_clube'>Delivery</h2>
                    <p className="description_subcategoria_clube ">
                        Além das vantagens que o <strong>Fidelidade</strong> oferece, o <strong>Delivery</strong> permite a comodidade de um sistema simples, rápido e seguro, na escolha de seus pedidos e forma de pagamento, no conforto de sua casa, escritório ou outros locais.
                    </p>
                </Box>
                <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center row col-lg-4'>
                    <img src={require('../../assets/cartoes/parceiros_delivery.png')} className="card_image" alt='Delivery'/>
                </Box>
            </Row> 
            <Row className='d-flex justify-content-around p-5 height_responsive_clube' style={{height: '80vh'}} >
                <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center row col-lg-4'>
                    <img src={require('../../assets/cartoes/card_solimed.png')} className="card_image" style={{width:  '60% !important'}} alt='Saúde e bem estar'/>
                </Box>
                <Box pose={isVisible ? 'visible' : 'hidden'} className='d-flex justify-content-center row col-lg-4' style={{flexDirection: 'column'}}>
                    <h2 className=' font-weight-bold title_responsive_clube'>Assistencia Social à Saude</h2>
                    <p className="description_subcategoria_clube ">
                        Atendimento excelente direto e diferenciado, com preços reduzidos, em estabelecimentos e profissionais da <strong>àrea de saúde e bem estar.</strong>
                    </p>
                    <Row>
                        <ul style={{listStyle: 'circle', fontSize: '0.8rem'}} className='col-lg-4 '>
                            <li>Hospitais</li>
                            <li>Clínicas Médicas</li>
                            <li>Clínicas Odontológicas</li>
                            <li>Médicos de diversas especialidades</li>
                        </ul>    
                        <ul style={{listStyle: 'circle', fontSize: '0.8rem'}} className='col-lg-4 '>
                            <li>Medicina Alternativa</li>
                            <li>Academias</li>
                            <li>Pilates</li>
                            <li>Laboratórios de Análises Clinicas</li>
                        </ul>
                        <ul style={{listStyle: 'circle', fontSize: '0.8rem'}} className='col-lg-4 '>
                            <li>Farmácias</li>
                            <li>Farmácias de Manipulação</li>
                            <li>Outros relacionados à saúde e bem-estar</li>
                        </ul>
                    </Row>
                    <span className='text-info font-weight-bold'>*Consulte disponibilidade em sua região</span>
                </Box>
            </Row> 
        </Container>
    )
}