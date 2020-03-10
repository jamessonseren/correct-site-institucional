import React from 'react';
import {Col, Row, Container, Image} from 'react-bootstrap'
import "./sobreNos.css"

export default function SobreNos(){
    return(
    <Container className='cor'>
        <Row>
            <Col sm={5}></Col>
            <Col className="title" sm={2}><h2>Sobre Nós</h2></Col>
        </Row>
        <Row className="paragrafh" style={{ background: 'linear-gradient(to left top, #00788c, #82ffa1)'}}>
            <Col sm={6} clasName="text text-center dist">
                <p className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A Tradecard surgiu no Brasil em 2018, com sede em Campo Grande/MS, com a finalidade de trazer o que existe de mais moderno e inovador, nas áreas de Recursos Humanos (benefícios), Compras, Pagamentos, Empréstimos, Economia, Saúde, Bem Estar, Diversão, Segurança e muitas outras. Fez grandes investimentos em “Tecnologia misturado com apreço aos seus Usuários”, focado nas necessidades cotidiana de seus Clientes, pessoas Físicas e Jurídicas, permitindo a eles, como novo conceito de mercado – “Liberdade de Ação e Conveniência”.</p>
            </Col>
            <Col sm={6}  float="center">
                <Image src={require('../../assets/talking.jpg')} className="img-right" width="65%" rounded fluid/>
            </Col>
        </Row>
        <Row style={{backgroundColor:'black'}}>
            <Col sm={6}>
                <Image src={require('../../assets/services.jpg')} className="img-left" width="65%" rounded fluid/>
            </Col>
            <Col sm={6}>
            <p className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para o mundo corporativo, em abril de 2020, a Tradecard lança no mercado brasileiro, grandes novidades na área de Recursos Humanos - Benefícios,  transformando o que caracteriza produtos de benefícios, como Vales Alimentação, Refeição, Combustível, Adiantamento Salarial, Empréstimos Consignado (juros reduzidos), Programas de Saúde e outros, em uma Plataforma de Auto-gestão de Benefícios, permitindo aos gestores a liberdade de acesso decisório quanto à escolha do tipo e prazo de duração, permitindo ainda a definição dos parâmetros necessários a concessão de cada benefícios, adaptando-os às suas políticas internas, leis, sindicatos e outros motivos se houverem.</p>
            </Col>
        </Row>
    </Container>
    )
}