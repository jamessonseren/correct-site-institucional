import React, { useState, useEffect } from 'react';
import {Container} from 'react-bootstrap'
import posed from 'react-pose';
import "./SobreNos.css"

const Box = posed.div({
    visible: { 
        x: 0,
        opacity: 1,
        transition: { duration: 1000 }
    },
    hidden: { 
        x: -500,
        opacity: 0.3,
        transition: { duration: 1000 }
    }
});

export default function SobreNos(){
    const [isVisible, setVisible] = useState(false)
    
    useEffect(() => {
        setVisible(true)
    })

    return(
        <Container fluid={true} className='p-0 m-0'>
            <Container fluid={true} className='backgroundImage d-flex'>
                <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-end ml-4 row'>
                    <h1> Sobre Nós </h1>
                </Box>
            </Container>
            <Container fluid={true} className="section p-5">
                <Box pose={isVisible ? 'visible' : 'hidden'}>
                    <p className="description ">
                        A Tradecard surgiu no Brasil em 2018, com sede em Campo Grande/MS, 
                        com a finalidade de trazer o que existe de mais moderno e inovador, nas áreas de Recursos Humanos (benefícios), 
                        Compras, Pagamentos, Empréstimos, Economia, Saúde, Bem Estar, Diversão, Segurança e muitas outras. 
                        Fez grandes investimentos em “Tecnologia misturado com apreço aos seus Usuários”, focado nas necessidades cotidiana de seus Clientes, 
                        pessoas Físicas e Jurídicas, permitindo a eles, como novo conceito de mercado – “Liberdade de Ação e Conveniência”.
                    </p>
                    <p className="description">
                        Para o mundo corporativo, em abril de 2020, a Tradecard lança no mercado brasileiro, grandes novidades na área de Recursos Humanos - 
                        Benefícios,  transformando o que caracteriza produtos de benefícios, como Vales Alimentação, Refeição, Combustível, Adiantamento Salarial, 
                        Empréstimos Consignado (juros reduzidos), Programas de Saúde e outros, em uma Plataforma de Auto-gestão de Benefícios, 
                        permitindo aos gestores a liberdade de acesso decisório quanto à escolha do tipo e prazo de duração, 
                        permitindo ainda a definição dos parâmetros necessários a concessão de cada benefícios, 
                        adaptando-os às suas políticas internas, leis, sindicatos e outros motivos se houverem.
                    </p>
                </Box>
            </Container> 
        </Container>
    )
}