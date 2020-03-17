import React from "react";
import { Carousel } from "react-responsive-carousel";
import {Col, Row, Container, Image} from 'react-bootstrap'

import './apresentacaoVant.css'

export default function ProdutosPessoaFisica() {
  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        className="presentation-mode slide"
      >
        <div className="my-slide dark_theme">
          <Container>
              <Row>
                  <Col sm={12}>
                      <p className="textBlackVant">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TradeWallet: </p>
                      <p className="textBlackItens">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Carteira Virtual que carrega todos os cartões (benefícios e crédito). Tem a opção de escolha do cartão para efetuar pagamentos. Utiliza único sistema “APP TRADECLUB” para pagamentos e controle, utilizando senha única, válida para todos os cartões. Conta também, com arquivos de agenda e cadastros necessários para o dia a dia. Todas informações da carteira são criptografadas, por questões de segurança. </p>
                  </Col>
              </Row>
            </Container>
        </div>
        
        <div className="my-slide dark_theme">
          <Container>
              <Row>
                  <Col sm={12}>
                      <Row>
                        <Col sm={4}>
                          <p className="textBlackVant">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fidelidade:
                          </p>
                        </Col>
                      </Row>
                      <p className="textBlackItens">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O Clube de Vantagens disponibiliza aos Associados, com um único recurso (APP TRADECLUB), vários Estabelecimentos que oferecem Fidelização, promovendo suas vantagens. Disponibiliza também, GPS para facilidade de percurso e toda tecnologia desenvolvida para o maior conforto e facilidades nos processos de pedidos (cardápios), pagamentos e controle. Obtendo atendimento personalizado e promoções específicas. Além das promoções pontuais oferecidas, o ganho sempre de Krats (Cashback)!
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Com isso, os Estabelecimentos ganham com a transformação dos Clientes em Fregueses. Conseguem obter informações importantes para o atendimento personalizado. E consequentemente, através da tecnologia aplicada, conseguem redução de custos e melhorias na qualificação de mão de obra, bem como, na sofisticação do atendimento aos seus Fidelizados.     
                      </p>
                  </Col>
              </Row>
            </Container>
        </div>

        <div className="my-slide dark_theme">
          <Container>
              <Row>
                  <Col sm={12}>
                      <p className="textBlackVant">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delivery: </p>
                      <p className="textBlackItens">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Além das vantagens que o Fidelidade oferece, o Delivery permite a comodidade de um sistema simples, rápido e seguro, na escolha de seus pedidos e forma de pagamento, no conforto de sua casa, escritório ou outros locais.</p>
                  </Col>
              </Row>
            </Container>
        </div>
      </Carousel>
    </div>
  );
}
