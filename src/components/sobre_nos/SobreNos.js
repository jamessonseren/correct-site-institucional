import React from 'react';
import {Col, Row, Container, Image} from 'react-bootstrap'
import "./sobreNos.css"

export default function SobreNos(){
    return(
    <div>
    <Container fluid={true} className='fundoImg'>
        
    <h2 className="center item animated fadeInLeft">Sobre Nós<div class="fadingEffect"></div></h2>
    </Container>
    <Container fluid={true} className="fundo">
        <Row className="">
            <p className="text item animatedOne fadeInLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A Tradecard surgiu no Brasil em 2018, com sede em Campo Grande/MS, com a finalidade de trazer o que existe de mais moderno e inovador, nas áreas de Recursos Humanos (benefícios), Compras, Pagamentos, Empréstimos, Economia, Saúde, Bem Estar, Diversão, Segurança e muitas outras. Fez grandes investimentos em “Tecnologia misturado com apreço aos seus Usuários”, focado nas necessidades cotidiana de seus Clientes, pessoas Físicas e Jurídicas, permitindo a eles, como novo conceito de mercado – “Liberdade de Ação e Conveniência”.</p>
        </Row>
        <Row className="">
            <p className="text item animatedTwo fadeInLeft">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para o mundo corporativo, em abril de 2020, a Tradecard lança no mercado brasileiro, grandes novidades na área de Recursos Humanos - Benefícios,  transformando o que caracteriza produtos de benefícios, como Vales Alimentação, Refeição, Combustível, Adiantamento Salarial, Empréstimos Consignado (juros reduzidos), Programas de Saúde e outros, em uma Plataforma de Auto-gestão de Benefícios, permitindo aos gestores a liberdade de acesso decisório quanto à escolha do tipo e prazo de duração, permitindo ainda a definição dos parâmetros necessários a concessão de cada benefícios, adaptando-os às suas políticas internas, leis, sindicatos e outros motivos se houverem.</p>
        </Row>
    </Container>
    </div>
    )
}