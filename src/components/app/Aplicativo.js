import React, {useEffect, useState} from 'react';
import {Row, Container} from 'react-bootstrap'
import posed from 'react-pose'
import { Link } from "react-router-dom";
import './Aplicativo.css'

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

export default function Aplicativo(){

    const [isVisible, setVisible] = useState(false)
    
    useEffect(() => {
        setVisible(true)
    }, [])

    return(
        <Container fluid={true} className='p-0 m-0'  style={{overflow: 'hidden'}}>
            <Row className='d-flex justify-content-around p-5' style={{backgroundColor: 'rgba(0,0,0,0.5)',height: '50vh'}} >
                <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center row col-4'>
                    <img src={require('../../assets/app_desktop.png')} className="card_image" alt='Correct Club'/>
                </Box>
                <Box pose={isVisible ? 'visible' : 'hidden'} className='d-flex justify-content-center row col-6' style={{flexDirection: 'column'}}>
                    <h1 className='text-light font-weight-bold'>O aplicativo completo e TOTALMENTE GRATUITO, desenvolvido ESPECIALMENTE para Você!</h1>
                    <p className="description_subcategoria">
                        Não criamos simplesmente uma Carteira Digital, e sim, um imenso Clube de Vantagens, onde você:
                    </p>
                    <ul style={{listStyle: 'circle'}} className='text-light'>
                        <li>Ganha Krats (Cashback) em todas as suas compras;</li>
                        <li>Realiza transações financeiras (TED / DOC / Emissão de Boleto) <strong>sem custos ou taxas;</strong></li>
                        <li>Faz pagamento de boletos (Contas de água, luz, etc...);</li>
                        <li>Pode armazenar e realizar pagamento com todos os seus cartões em um único lugar (Correct Wallet);</li>
                        <li>Tem opção de escolha de diversos tipos Fidelização;</li>
                        <li>Garante seu entreterimento;</li>
                        <li>Além de todas essas Vantagens, temos as melhores opções de <strong>Delivery</strong> com as melhores promoções.</li>
                    </ul>
                </Box>
            </Row> 
            <Row className='d-flex justify-content-around p-5' style={{backgroundColor: 'rgba(0,0,0,0.7)',height: '50vh'}} >
                <Box pose={isVisible ? 'visible' : 'hidden'} className='d-flex justify-content-center row col-6' style={{flexDirection: 'column'}}>
                    <h1 className='text-light font-weight-bold'>Correct Wallet (Carteira Digital)</h1>
                    <p className="description_subcategoria">
                        Armazene e realize pagamento com todos os seus cartões em um único lugar e ganhe Krats (Cashback) em toda compra.
                    </p>
                    <h2 className='text-success font-weight-bold'>Não é promoção, é VANTAGEM! Não importa o valor da compra, seu Cashback está GARANTIDO!</h2>
                </Box>
                <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center row col-4'>
                    <img src={require('../../assets/app_desktop.png')} className="card_image" alt='Correct Club'/>
                </Box>
            </Row>
            <Row className='d-flex justify-content-around p-5' style={{backgroundColor: 'rgba(0,0,0,0.5)',height: '50vh'}} >
                <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center row col-4'>
                    <img src={require('../../assets/app_desktop.png')} className="card_image" alt='Correct Club'/>
                </Box>
                <Box pose={isVisible ? 'visible' : 'hidden'} className='d-flex justify-content-center row col-6' style={{flexDirection: 'column'}}>
                    <h1 className='text-light font-weight-bold'>Aqui seu dinheiro vale mais!</h1>
                    <p className="description_subcategoria">
                        Realize compras com qualquer cartão de um forma prática e segura e ainda ganhe Krats (Cashback)!
                    </p>
                    <ul style={{listStyle: 'circle'}} className='text-light'>
                        <li>Pague com QR-Code ou TOKEN Offline (tecnologia exclusiva <strong><i>Correct</i></strong>)</li>
                        <li>Realize transações financeiras (TED / DOC / Emissão de Boleto) <strong>sem custos ou taxas;</strong></li>
                        <li>Faça pagamento de boletos (Contas de água, luz, etc...);</li>
                        <li>Tenha a opção de escolha entre diversos tipos Fidelização com excelentes vantagens;</li>
                        <li>Além de tudo isso, temos as melhores opções de <strong>Delivery</strong> com grandes promoções.</li>
                    </ul>
                </Box>
            </Row> 
            <Row className='d-flex justify-content-around p-5' style={{backgroundColor: 'rgba(0,0,0,0.7)',height: '50vh'}} >
                <Box pose={isVisible ? 'visible' : 'hidden'} className='d-flex justify-content-center row col-6' style={{flexDirection: 'column'}}>
                    <h1 className='text-warning font-weight-bold'>Divirta-se!</h1>
                    <h3 className=" text-warning description_subcategoria">
                        Dentro do APP temos uma área específica para seu entreterimento, com jogos e biscoito da sorte!
                    </h3>
                </Box>
                <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center row col-4'>
                    <img src={require('../../assets/app_desktop.png')} className="card_image" alt='Correct Club'/>
                </Box>
                <div className='align-items-center justify-content-center d-flex w-100' style={{flexDirection: 'column'}}>
                    <h4 style={{color: '#00788b'}} className='text-center font-weight-bold'>E ainda você ganha todos os benefícios oferecidos pelo Correct Club!</h4>
                    <Link to='/correct_club' className='btn-sm btn-club mt-2'>Clique para saber mais</Link>
                </div>
            </Row> 
        </Container>
    )
}