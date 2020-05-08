import React, { useState, useEffect } from 'react';
import {Container, Row, Image} from 'react-bootstrap'
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
                <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center row col-10'>
                    <p className="description">
                        A <strong>Tradecard</strong> surgiu no Brasil em 2018, com a finalidade de trazer o que existe de mais moderno e inovador, nas áreas de Recursos Humanos (benefícios), 
                        <strong> Compras, Pagamentos, Empréstimos, Economia, Saúde, Bem Estar, Diversão, Segurança e muitas outras</strong>.
                    </p>
                </Box>
            </Row>
            <Row className='p-5' >
                <Box pose={isVisible ? 'visible' : 'hidden'} className='col-6 align-items-center justify-content-center d-flex' style={{flexDirection: 'column'}}>
                    <h2 className='whiteFont'>Para o mundo corporativo:</h2>
                    <p  className='whiteFont'>
                        Para o mundo corporativo, em abril de 2020, a <strong>Tradecard lança no mercado brasileiro</strong>, grandes novidades na <strong>área de Recursos Humanos - Benefícios,  
                        transformando o que caracteriza produtos de benefícios, como Vales Alimentação, Refeição, Combustível, Adiantamento Salarial, Empréstimos Consignado (juros reduzidos), 
                        Programas de Saúde e outros, em uma Plataforma de Auto-gestão de Benefícios</strong>, permitindo aos gestores a liberdade de acesso decisório quanto à escolha do tipo e prazo de duração, 
                        permitindo ainda a definição dos parâmetros necessários a concessão de cada benefícios, adaptando-os às suas políticas internas, leis, sindicatos e outros motivos se houverem.
                    </p>
                </Box>
                <Box pose={isVisible ? 'visible' : 'hidden'} className='col-6 align-items-center justify-content-center d-flex'>
                    <Image src={require('../../assets/icon_beneficio_pj.png')} style={{width: '40%'}} rounded fluid/>
                </Box>
            </Row>
            <Row className='p-5' style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                <Box pose={isVisible ? 'visible' : 'hidden'} className='col-6 align-items-center justify-content-center d-flex'>
                    <Image src={require('../../assets/icon_beneficio_pf.png')} style={{width: '40%'}} rounded fluid/>
                </Box>
                <Box pose={isVisible ? 'visible' : 'hidden'} className='col-6 align-items-center justify-content-center d-flex' style={{flexDirection: 'column'}}>
                    <h2 className='whiteFont'>Para o mundo das pessoas físicas:</h2>
                    <p  className='whiteFont'>
                        Para o mundo moderno das pessoas físicas que se importam com a <strong>praticidade dos procedimentos, 
                        com a desburocratização, obtenção de descontos e economia, com o avanço da tecnologia e suas tendências, 
                        para obter vantagens nas atividades do seu dia a dia</strong>, a Tradecard, como princípio, proporciona o melhor relacionamento 
                        com todos que são envolvidos nesses processos e revoluciona sua atuação, com a composição de vários serviços em um só instrumento <strong>“APP TRADECLUB”</strong>, 
                        permitindo com facilidade e comodidade, o controle na palma da sua mão. Basta um celular!
                    </p>
                </Box>
            </Row>
        </Container>
    )
}