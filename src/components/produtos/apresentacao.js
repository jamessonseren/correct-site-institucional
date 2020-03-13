import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import adiantamento from "../../assets/cartoes/trade_adiantamento.png";
import alimentacao from "../../assets/cartoes/trade_alimentacao.png";
import tradeclub from "../../assets/cartoes/tradeclub.png";
import tradecard from "../../assets/cartoes/tradecard.png";
import delivery from "../../assets/cartoes/trade_delivery.png";
import {Col, Row, Container, Image} from 'react-bootstrap'

import './apresentacao.css'

export default function Presetation() {
  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        className="presentation-mode slide"
      >
        <div className="my-slide fundo_slide_1">
        <Container>
          <Row>
              <Col sm={4}>
                  <Image src={require('../../assets/cell-phone.png')} className="img-left" rounded fluid/>
              </Col>
              <Col sm={8}>
                  <p className="textBlack">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para o mundo moderno das pessoas físicas que se importam com a praticidade dos procedimentos, com a desburocratização, obtenção de descontos e economia, com o avanço da tecnologia e suas tendências, para obter vantagens nas atividades do seu dia a dia, a Tradecard, como princípio, proporciona o melhor relacionamento com todos que são envolvidos nesses processos e revoluciona sua atuação, com a composição de vários serviços em um só instrumento “APP TRADECLUB”, permitindo com facilidade e comodidade, o controle na palma da sua mão. Basta um celular!</p>
              </Col>
          </Row>
          </Container>
        </div>

        <div className="my-slide fundo_slide_2">
        <Container>
          <Row>
              <Col sm={7}>
                  <p className="textGray">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para o mundo moderno das pessoas físicas que se importam com a praticidade dos procedimentos, com a desburocratização, obtenção de descontos e economia, com o avanço da tecnologia e suas tendências, para obter vantagens nas atividades do seu dia a dia, a Tradecard, como princípio, proporciona o melhor relacionamento com todos que são envolvidos nesses processos e revoluciona sua atuação, com a composição de vários serviços em um só instrumento “APP TRADECLUB”, permitindo com facilidade e comodidade, o controle na palma da sua mão. Basta um celular!</p>
              </Col>
              <Col sm={4}>
                  <Image src={require('../../assets/cell-phone.png')} className="img-left" rounded fluid/>
              </Col>
          </Row>
          </Container>
        </div>

        <div className="my-slide fundo_slide_3">
        <Container>
          <Row>
          <Col sm={2}></Col>
              <Col sm={8}>
              <p className="textOutline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quando se trata de segurança nas operações, a Tradecard desenvolveu seus sistemas com as melhores ferramentas existentes no mercado mundial, permitindo aos seus usuários a tranquilidade e confiança, bem como, a acessibilidade na tecnologia de forma simples, prática e rápida. Como exemplo, possibilita opções de uso de senhas conforme sua comodidade: Digitando ou reconhecimentos Digital ou Facial.<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pensando na comodidade de seus Usuários e em situações que impossibilitem a conexão com a internet, a Tradecard também buscou uma solução, desenvolvendo a função chamada “Token”, que gera códigos que possibilitam a utilização do APP quando da realização das compras.
                Veja agora o que a Tradecard traz para Vocês:
              </p>
              </Col>
          </Row>
          </Container>
        </div>
      </Carousel>
    </div>
  );
}
