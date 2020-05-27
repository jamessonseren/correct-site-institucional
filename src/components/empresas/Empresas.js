import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import posed from 'react-pose';
import "./Empresas.css"

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
    const [isVisibleHeader, setVisibleHeader] = useState(false)
    const [ísPreOrPos, setPreOrPos] = useState(true)
    
    useEffect(() => {
        setVisible(true)
        setVisibleHeader(true)
    }, [])

    const showPreOrPos = (show) => {
        setVisible(false)
        setTimeout(() => {
            setPreOrPos(show)
            setVisible(true)
        }, 200);
    }

    return(
        <Container fluid={true} className='p-0 m-0' style={{overflow: 'hidden'}}>
            {/* Header */}
            <h2 className='text-light text-center col-12 d-flex justify-content-center p-2 m-0 pt-5' style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>Benefícios</h2>
            <Box pose={isVisibleHeader ? 'visible' : 'hidden'} className='d-flex justify-content-center p-5' style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                <Col sm={3} className='d-flex justify-content-center align-items-center' onClick={() => showPreOrPos(true)} style={{flexDirection: 'column', cursor: 'pointer', opacity: !ísPreOrPos ? 0.5 : 1 }}>
                    <img src={require('../../assets/cartoes/card_adiantamento.png')} style={{width: '100%'}} alt='Cartões Pós-pagos'/>
                    <h4 className='text-light'>
                        Pós pagos
                    </h4>
                </Col>
                <Col sm={3} className='d-flex justify-content-center align-items-center' onClick={() => showPreOrPos(false)} style={{flexDirection: 'column', cursor: 'pointer', opacity: ísPreOrPos ? 0.5 : 1}}>
                    <img src={require('../../assets/cartoes/card_alimentacao.png')} style={{width: '100%'}} alt='Cartões Pré-pagos'/>
                    <h4 className='text-light'>
                        Pré pagos
                    </h4>
                </Col>
            </Box>
            {/* Body */}
            {ísPreOrPos ?
                <div>
                    {/* PÓS PAGOS */}
                    <Row className='d-flex justify-content-around p-5' style={{backgroundColor: 'rgba(0,0,0,0.7)', height: '50vh'}} >
                        <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center row col-4'>
                            <img src={require('../../assets/cartoes/card_adiantamento.png')} className="card_image" alt='Cartão de adiantamento salárial'/>
                        </Box>
                        <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center row col-4'>
                            <p className="description_subcategoria">
                            Com limite pré-definido, que possibilita atender as necessidades de compras do dia a dia do Usuário, em segmentos específico(s), determinado(s) pela Gestão, com desconto em folha de pagamento. Ex: Farmácias, Oficinas de Motos ou qualquer outro segmento, podendo ainda ser livre escolha, Ganho de Krats (Cashback).
                            </p>
                        </Box>
                    </Row>
                    <Row className='d-flex justify-content-around p-5' style={{backgroundColor: 'rgba(0,0,0,0.5)', height: '50vh',}}>
                        <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center row col-4'>
                            <p className="description_subcategoria">
                                Com limite pré-definido, que possibilita atender as necessidades de compras do dia a dia do Usuário, em segmentos específico(s), determinado(s) pela Gestão, com desconto em folha de pagamento. Ex: Farmácias, Oficinas de Motos ou qualquer outro segmento, podendo ainda ser de livre escolha. Ganho de Krats (Cashback).
                            </p>
                        </Box>
                        <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center row col-4'>
                            <img src={require('../../assets/cartoes/card_convenio.png')} className="card_image" alt='Cartão convênio'/>
                        </Box>
                    </Row>
                    <div className='align-items-center justify-content-center d-flex w-100 pb-5' style={{flexDirection: 'column', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <h4 style={{color: '#00788b'}} className='text-center font-weight-bold'>Adquirindo qualquer benefício, ganhe o Correct Club!</h4>
                        <button className='btn-sm btn-club mt-2'>Clique para saber mais</button>
                    </div>
                </div>
            :
                <div>
                    {/* PRÉ PAGOS */}
                    <Row className='d-flex justify-content-around p-5' style={{backgroundColor: 'rgba(0,0,0,0.7)',height: '50vh'}} >
                        <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center row col-4'>
                            <img src={require('../../assets/cartoes/card_alimentacao.png')} className="card_image" alt='Cartão Vale Alimentação Logo'/>
                        </Box>
                        <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center row col-4'>
                            <p className="description_subcategoria">
                                Com benefício específico para aquisição de gêneros alimentícios. Pode ser utilizado em supermercados, mercearias, açougues, padarias e similares. Facilitando as rotinas das Empresas e substituindo as cestas básicas. Ganho de Krats (Cashback).
                            </p>
                        </Box>
                    </Row>
                    <Row className='d-flex justify-content-around p-5' style={{backgroundColor: 'rgba(0,0,0,0.5)', height: '50vh'}}>
                        <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center row col-4'>
                            <p className="description_subcategoria">
                                Com benefício específico para aquisição de refeições prontas. Pode ser utilizado em restaurantes, padarias, lanchonetes e similares. Facilitando a rotina da Empresa e dando mais qualidade de vida ao seu Colaborador. Ganho de Krats (Cashback)
                            </p>
                        </Box>
                        <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center row col-4'>
                            <img src={require('../../assets/cartoes/card_refeicao.png')} className="card_image" alt='Cartão Vale Refeição'/>
                        </Box>
                    </Row>
                    <Row className='d-flex justify-content-around p-5' style={{backgroundColor: 'rgba(0,0,0,0.7)', height: '50vh'}}>
                        <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center row col-6'>
                            <h4 className='text-light'>Outras Vantagens</h4>
                            <ul className="description_subcategoria" style={{listStyle: 'circle'}}>
                                <li>
                                    Para os cartões alimentação e refeição se for de interesse do empregador, a Correct mantém registro no PAT, proporcionando a Empresa, redução de custos, isenção de encargos e incentivos fiscais.
                                </li>
                                <li>
                                    Moldamos nossos benefícios pré-pagos conforme a necessidade da sua empresa, além dos cartões acima temos: Combustível, Cesta de Natal e outros. Também com ganho Krats (Cashback)
                                </li>
                            </ul>
                            <div className='align-items-center justify-content-center d-flex w-100' style={{flexDirection: 'column'}}>
                                <h4 style={{color: '#00788b'}} className='text-center font-weight-bold'>Adquirindo qualquer benefício, ganhe o Correct Club!</h4>
                                <button className='btn-sm btn-club mt-2'>Clique para saber mais</button>
                            </div>
                        </Box>
                    </Row>
                </div>
            }
        </Container>
    )
}