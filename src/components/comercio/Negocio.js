import React, {useEffect, useState} from 'react';
import {Row, Container} from 'react-bootstrap'
import posed from 'react-pose'
import { Link } from "react-router-dom";
import './Negocio.css'

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

export default function Negocio(){

    const [isVisible, setVisible] = useState(false)
    
    useEffect(() => {
        setVisible(true)
    }, [])

    return(
        <Container fluid={true} className='p-0 m-0'  style={{overflow: 'hidden'}}>
            <Row className='d-flex justify-content-around p-5' style={{backgroundColor: 'rgba(0,0,0,0.5)',height: '75vh'}} >
                <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center d-flex col-md-4'>
                    <img src={require('../../assets/app_desktop.png')} className="card_image" alt='Correct Club'/>
                </Box>
                <Box pose={isVisible ? 'visible' : 'hidden'} className='d-flex justify-content-center col-md-4' style={{flexDirection: 'column'}}>
                    <h2 className='text-light font-weight-bold title_app'>Parceiros</h2>
                    <p className="description_subcategoria">
                        Para os parceiros que compõem a Rede de Compras com Lojas Físicas e/ou Virtuais, a <strong><i>Correct</i></strong>, disponibiliza um sistema para administração e controle financeiro, sem custos e taxas, para melhor controle das operações comerciais, recebimentos de vendas, transferências e pagamentos de contas.
                    </p>
                    <Link className='btn-sm btn-club mt-2 text-center button_responsive_app' >Clique para baixar o nosso módulo de vendas</Link>
                </Box>
            </Row> 
            <Row className='d-flex justify-content-around p-5' style={{backgroundColor: 'rgba(0,0,0,0.7)',height: '100vh'}} >
                <Box pose={isVisible ? 'visible' : 'hidden'} className='d-flex justify-content-center row col-md-8' style={{flexDirection: 'column'}}>
                    <h2 className='text-light font-weight-bold title_app'>Outras vantagens para os nossos parceiros</h2>
                    <ul style={{listStyle: 'circle'}} className='text-light list_responsive'>
                      <li>
                        Ganha um <strong>Clube de Vantagens de Presente</strong>, podendo utilizar vários recursos sem taxas e juros, através do <strong>APP Correct;</strong>
                      </li>
                      <li>
                        Fidelização dos Usuários <strong>Correct;</strong>
                      </li>
                      <li>
                        <strong>Divulgação direta aos Usuários</strong>, através de nossas mídias:
                        <ul style={{listStyle: "disc"}}>
                          <li>Murais informativos no Empregador (cartões de benefícios);</li>
                          <li>Rede de Compras (site, APP, Rede Sociais);</li>
                          <li>Blog;</li>
                          <li>Adesivos de identificação;</li>
                          <li>Correct Shop (comunicação direta com o Usuário);</li>
                          <li>Eventos esporádicos para os Usuários;</li>
                        </ul>
                      </li>
                      <li>
                        Facilidade de <strong>recebimento através do sistema de repasse</strong> (depósitos e transferências diretas na conta de pagamento Correct);
                      </li>
                      <li>
                        Possibilidade de escolhas da <strong>técnologia para recebimento das vendas</strong>, tais como:
                        <ul style={{listStyle: "disc"}}>
                          <li>Siscorrect;</li>
                          <li>QR Code e TOKEN Offline;</li>
                          <li>Celular;</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Aumento das vendas</strong> pela aceitação de <strong>Krats como forma de recebimento e da Correct Wallet</strong> (um único sistema de recebimento para todo tipo de cartão);
                      </li>
                      <li>
                        Possibilidade de adesão aos produtos <strong>Fidelidade e Delivery;</strong>
                      </li>
                      <li>Correct Shop, que é uma <strong>ferramenta de marketing, para divulgação de ofertas, promoções, realização de sorteios e descontos especiais aos Usuários</strong>. É a permissão que a <strong>Correct dá aos seus Parceiros para a comunicação direta dos Usuários</strong>.</li>
                      <li>Correct Business - Cartão criado para os Parceiros que possuem "crédito a receber", originados pelas vendas com Cartões de Benefícios ou de Créditos, através do nosso APP Correct. Sem taxas de antecipação de crédito e ainda ganha Krats (Cashback) na utilização.</li>
                    </ul>
                </Box>
            </Row>
        </Container>
    )
}