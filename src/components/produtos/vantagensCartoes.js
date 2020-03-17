import React from "react";
import {Col, Row, Container } from 'react-bootstrap'

import './apresentacao.css'

export default function VantagensCards() {
  return (
    <div
    className="presentation-mode">
        <div className="my-slide sem_fundo">
          <Container fluid>
            <Row>
                <Col sm={6} style={{color:'white'}}>
                <h3>Cartões Pré-Pagos</h3>
                <p className="textoEmBranco">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para os cartões de Adiantamento Salarial e Convênio, a Tradecard oferece as seguintes vantagens:</p>
                <p className="textoEmBrancotab">
                  Ganha um Banco de presente, podendo utilizar vários recursos sem taxas e juros, através do APP TRADECLUB; 
                  <br/>Compras na Rede TRADECLUB com prazo (média de 45 dias) e sem juros; 
                  <br/>Não precisa esperar dia do pagamento para realizar suas compras;
                  <br/>Obtém facilidades nas compras sem burocracia, com tecnologia e sem consultas no SPC/Serasa;
                  <br/>Rede TRADECLUB de compras na cidade, de acordo com as necessidades dos Usuários (Colaboradores/Servidores), podendo inclusive, dar sugestões de estabelecimentos comerciais de sua preferência;
                  <br/>Ganha KRATS (Cashback) em todas as compras realizadas, que é creditado automaticamente em sua conta corrente, no Cartão do Clube de Vantagens - TRADECLUB;
                  <br/>Cartão Virtual que proporciona maior segurança e facilidade de pagamentos;
                  <br/>Possibilidade de efetuar compras mesmo quando não estiver conectado na internet, através da tecnologia Token;
                  <br/>Utilização destes benefícios é opcional e seu limite renovado mensalmente;
                  <br/>Não tem custos: mensalidades, taxas e nem juros.
                </p>
                </Col>
                <Col sm={6}>
                <h3>Cartões Pós-Pagos</h3>
                <p className="textoEmPreto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para os cartões de Adiantamento Salarial e Convênio, a Tradecard oferece as seguintes vantagens:</p>
                <p className="textoEmPretotab">
                  Ganha um Banco de presente, podendo utilizar vários recursos sem taxas e juros, através do APP TRADECLUB; 
                  <br/>Compras na Rede TRADECLUB com prazo (média de 45 dias) e sem juros; 
                  <br/>Não precisa esperar dia do pagamento para realizar suas compras;
                  <br/>Obtém facilidades nas compras sem burocracia, com tecnologia e sem consultas no SPC/Serasa;
                  <br/>Rede TRADECLUB de compras na cidade, de acordo com as necessidades dos Usuários (Colaboradores/Servidores), podendo inclusive, dar sugestões de estabelecimentos comerciais de sua preferência;
                  <br/>Ganha KRATS (Cashback) em todas as compras realizadas, que é creditado automaticamente em sua conta corrente, no Cartão do Clube de Vantagens - TRADECLUB;
                  <br/>Cartão Virtual que proporciona maior segurança e facilidade de pagamentos;
                  <br/>Possibilidade de efetuar compras mesmo quando não estiver conectado na internet, através da tecnologia Token;
                  <br/>Utilização destes benefícios é opcional e seu limite renovado mensalmente;
                  <br/>Não tem custos: mensalidades, taxas e nem juros.
                </p>
                </Col>
            </Row>
          </Container>
        </div>
    </div>
  );
}
