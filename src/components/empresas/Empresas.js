import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import posed from 'react-pose';
import { Link } from "react-router-dom";
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
            <h2 className=' text-center col-12 d-flex justify-content-center p-2 m-0 pt-5'>Benefícios</h2>
            <Box pose={isVisibleHeader ? 'visible' : 'hidden'} className='d-flex justify-content-center p-5'>
                <Col sm={3} className='d-flex justify-content-center align-items-center' onClick={() => showPreOrPos(true)} style={{flexDirection: 'column', cursor: 'pointer', opacity: !ísPreOrPos ? 0.5 : 1 }}>
                    <img src={require('../../assets/cartoes/card_adiantamento.png')} style={{width: '100%'}} alt='Cartões Pós-pagos'/>
                    <h4 className=' text-center'>
                        Pós pagos
                    </h4>
                </Col>
                <Col sm={3} className='d-flex justify-content-center align-items-center' onClick={() => showPreOrPos(false)} style={{flexDirection: 'column', cursor: 'pointer', opacity: ísPreOrPos ? 0.5 : 1}}>
                    <img src={require('../../assets/cartoes/card_alimentacao.png')} style={{width: '100%'}} alt='Cartões Pré-pagos'/>
                    <h4 className=' text-center'>
                        Pré pagos
                    </h4>
                </Col>
            </Box>
            {/* Body */}
            {ísPreOrPos ?
                <div>
                    {/* PÓS PAGOS */}
                    <Row className='d-flex justify-content-around p-5' style={{backgroundColor: 'rgba(0,0,0,0.1)', height: '50vh'}} >
                        <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center row col-md-4'>
                            <img src={require('../../assets/cartoes/card_adiantamento_reto.png')} className="card_image" alt='Cartão de adiantamento salárial'/>
                        </Box>
                        <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center row col-md-4'>
                            <p className=" description_cartoes_empresa">
                                Com limite pré-definido, que possibilita atender as necessidades de compras do dia a dia. Com desconto em folha e sempre com ganho de Krats (Cashback) em cada compra.
                            </p>
                        </Box>
                    </Row>
                    <Row className='d-flex justify-content-around p-5' style={{height: '70vh',}}>
                        <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center row col-md-4'>
                            <p className=" description_cartoes_empresa">
                                Com limite pré-definido, que possibilita atender as necessidades de compras do dia a dia do Usuário, em segmento(s) específico(s), determinado(s) pela Gestão, com desconto em folha de pagamento. Ex: Farmácias, Oficinas de Motos ou qualquer outro segmento, podendo ainda ser de livre escolha. Ganho de Krats (Cashback).
                            </p>
                        </Box>
                        <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center row col-md-4'>
                            <img src={require('../../assets/cartoes/card_convenio_reto.png')} className="card_image" alt='Cartão convênio'/>
                        </Box>
                    </Row>
                    <Row className='d-flex justify-content-around p-5' style={{backgroundColor: 'rgba(0,0,0,0.1)', height: '130vh'}}>
                        <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center row col-md-6'>
                            <h4 className=''>Outras Vantagens</h4>
                            <ul className=" description_cartoes_empresa" style={{listStyle: 'circle'}}>
                                <li>
                                    Ganha um Clube de Vantagens de presente, podendo utilizar vários recursos sem taxas e juros, através do APP Correct;
                                </li>
                                <li>
                                    Compras na Rede Correct com prazo (médio de 45 dias) e sem juros;
                                </li>
                                <li>
                                    Não precisa esperar o dia do pagamento para realizar suas compras;
                                </li>
                                <li>
                                    Obtém facilidades nas compras sem burocracia, com tecnologia e sem consultas no SPC/Serasa;
                                </li>
                                <li>
                                    Rede Correct de compras na cidade, de acordo com as necessidades dos usuários, podendo inclusive, dar sugestões de estabelecimentos comerciais de sua preferência;
                                </li>
                                <li>
                                    Ganha Krats (Cashback) em todas as compras realizadas, que é creditado automaticamente em sua conta Correct;
                                </li>
                                <li>
                                    Cartão Virtual, através do APP Correct, que proporciona maior segurança e facilidade nos pagamentos;
                                </li>
                                <li>
                                    Possibilidade de efetuar compras, mesmo quando não estiver conectado na internet, através da tecnologia TOKEN;
                                </li>
                                <li>
                                    Não tem custos: mensalidades, taxas e nem juros.
                                </li>
                            </ul>
                            <div className='align-items-center justify-content-center d-flex w-100' style={{flexDirection: 'column'}}>
                                <h4 style={{color: '#00788b'}} className='text-center font-weight-bold empresa_beneficio_responsive'>Adquirindo qualquer benefício, ganhe o Correct Club!</h4>
                                <Link to='/correct_club' className='btn-sm btn-club mt-2'>Clique para saber mais</Link>
                            </div>
                        </Box>
                    </Row>
                </div>
            :
                <div>
                    {/* PRÉ PAGOS */}
                    <Row className='d-flex justify-content-around p-5' style={{backgroundColor: 'rgba(0,0,0,0.1)',height: '50vh'}} >
                        <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center row col-md-4'>
                            <img src={require('../../assets/cartoes/card_alimentacao_reto.png')} className="card_image" alt='Cartão Vale Alimentação Logo'/>
                        </Box>
                        <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center row col-md-4'>
                            <p className=" description_cartoes_empresa">
                                Com benefício específico para aquisição de gêneros alimentícios. Pode ser utilizado em supermercados, mercearias, açougues, padarias e similares. Facilitando as rotinas das Empresas e substituindo as cestas básicas. Ganho de Krats (Cashback).
                            </p>
                        </Box>
                    </Row>
                    <Row className='d-flex justify-content-around p-5' style={{height: '50vh'}}>
                        <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center row col-md-4'>
                            <p className=" description_cartoes_empresa">
                                Com benefício específico para aquisição de refeições prontas. Pode ser utilizado em restaurantes, padarias, lanchonetes e similares. Facilitando a rotina da Empresa e dando mais qualidade de vida ao seu Colaborador. Ganho de Krats (Cashback)
                            </p>
                        </Box>
                        <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center row col-md-4'>
                            <img src={require('../../assets/cartoes/card_refeicao_reto.png')} className="card_image" alt='Cartão Vale Refeição'/>
                        </Box>
                    </Row>
                    <Row className='d-flex justify-content-around p-5' style={{backgroundColor: 'rgba(0,0,0,0.1)', height: '120vh'}}>
                        <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center row col-md-6'>
                            <h4 className=''>Outras Vantagens</h4>
                            <ul className=" description_cartoes_empresa" style={{listStyle: 'circle'}}>
                                <li>
                                    Ganha um Clube de Vantagens de presente, podendo utilizar vários recursos sem taxas e juros, através do APP Correct;
                                </li>
                                <li>
                                    Desburocratização e automação dos processos de convênios;
                                </li>
                                <li>
                                    Padronização dos Benefícios a todos Usuários, independentemente do local de trabalho;
                                </li>
                                <li>
                                    Ganha Krats (Cashback) em todas as compras realizadas, que são creditados automaticamente em sua conta Correct;
                                </li>
                                <li>
                                    Vale Alimentação contempla a minimização de processos e custos, em relação a substituição da Cesta Básica, tais como: Usuários com livre escolha na aquisição dos produtos e para o Empregador a cotação, compra, armazenamento, distribuição e outros;
                                </li>
                                <li>
                                    Autogestão dos processos de Convênios, permitindo que a área de Recursos Humanos tenha o controle de todos os procedimentos administrativos sobre o sistema, de forma centralizada ou não;
                                </li>
                                <li>
                                    Possibilidade de efetuar compras, mesmo quando não estiver conectado na internet, através da tecnologia TOKEN;
                                </li>
                                <li>
                                    Não tem custos: mensalidades, taxas e nem juros.
                                </li>
                                <li>
                                    Para os cartões alimentação e refeição se for de interesse do empregador, a <strong><i>Correct</i></strong> mantém registro no PAT, proporcionando a Empresa, redução de custos, isenção de encargos e incentivos fiscais.
                                </li>
                                <li>
                                    Moldamos nossos benefícios pré-pagos conforme a necessidade da sua empresa, além dos cartões acima temos: Combustível, Cesta de Natal e outros. Também com ganho Krats (Cashback)
                                </li>
                            </ul>
                            <div className='align-items-center justify-content-center d-flex w-100' style={{flexDirection: 'column'}}>
                                <h4 style={{color: '#00788b'}} className='text-center font-weight-bold empresa_beneficio_responsive'>Adquirindo qualquer benefício, ganhe o Correct Club!</h4>
                                <Link to='/correct_club' className='btn-sm btn-club mt-2'>Clique para saber mais</Link>
                            </div>
                        </Box>
                    </Row>
                </div>
            }
        </Container>
    )
}