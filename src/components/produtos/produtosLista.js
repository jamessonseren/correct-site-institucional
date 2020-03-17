import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import adiantamento from "../../assets/cartoes/adianta.png";
import alimentacao from "../../assets/cartoes/trade_alimentacao.png";
import tradeclub from "../../assets/cartoes/tradeclub.png";
import tradecard from "../../assets/cartoes/tradecard.png";
import delivery from "../../assets/cartoes/trade_delivery.png";
import {Col, Row, Container, Image} from 'react-bootstrap'

import './apresentacao.css'

export default function ListaProdutos() {
  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        useKeyboardArrows
        className="presentation-mode"
      >

        <div className="my-slide fundoProdutos">
        <Container>
          <Row>
              <Col sm={4}>
                  <Image className="imgLogoProduto" src={require('../../assets/tradecard_logo_white.png')} rounded fluid/>
              </Col>
              <Col sm={8}>
                  <p className="textoProdutos">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plataforma que proporciona muitos benefícios controlados em um só instrumento tecnológico, facilitando a vida dos profissionais de Recursos Humanos, na gestão dos benefícios, podendo ser através de cartões pós-pagos e pré-pagos.
                    Mantém o controle dos limites estabelecidos por operação de desconto em folha de pagamento, garantindo o limite original definido. A variação do comprometimento do limite, ficará nos cartões pós-pagos (Adiantamento Salarial ou Convênio), ou seja, mensalmente os limites desses cartões poderão ser flexíveis, podendo chegar a zero, conforme novos comprometimentos de descontos em folha possam acontecer, por motivos da entrada de novos benefícios, faltas, afastamentos ou outros. 
                  </p>
              </Col>
          </Row>
          </Container>
        </div>

        <div className="my-slide fundoProdutos">
        <Container>
          <Row>
              <Col sm={4}>
                  <Image src={require('../../assets/cartoes/adianta.png')} rounded fluid/>
              </Col>
              <Col sm={8}>
                  <p className="textoProdutos">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Adiantamento Salarial: com limite pré-definido, que possibilita atender as necessidades de compras no dia a dia do Usuário (Colaborador/Servidor), com desconto em folha de pagamento. Ganho de Krats (Cashback).</p>
              </Col>
          </Row>
          </Container>
        </div>

        <div className="my-slide fundoProdutos">
        <Container>
          <Row>
              <Col sm={4}>
                  <Image src={require('../../assets/cartoes/convenio.png')} rounded fluid/>
              </Col>
              <Col sm={8}>
                  <p className="textoProdutos">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Convênio: com limite pré-definido, que possibilita atender as necessidades de compras do dia a dia do Usuário (Colaborador/Servidor), em segmento(s) específico(s), determinado(s) pela Gestão, com desconto em folha de pagamento. Ex: Farmácias, Oficinas de Motos ou qualquer outro segmento, podendo ainda ser misto ou aleatório. Ganho de Krats (Cashback).</p>
              </Col>
          </Row>
          </Container>
        </div>

        <div className="my-slide fundoProdutos">
        <Container>
          <Row>
              <Col sm={4}>
                  <Image src={require('../../assets/cartoes/alimentacao.png')} rounded fluid/>
              </Col>
              <Col sm={8}>
                  <p className="textoProdutos">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alimentação: com benefício específico para aquisição de gêneros alimentícios. Pode ser utilizado em supermercados, mercearias, açougues, padarias e similares. Facilitando as rotinas das Empresa/Órgão Público e substituindo as cestas básicas. Ganho de Krats (Cashback).</p>
              </Col>
          </Row>
          </Container>
        </div>

        <div className="my-slide fundoProdutos">
        <Container>
          <Row>
              <Col sm={4}>
                  <Image src={require('../../assets/cartoes/refeicao.png')} rounded fluid/>
              </Col>
              <Col sm={8}>
                  <p className="textoProdutos">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Refeição: com benefício específico para aquisição de refeições prontas. Pode ser utilizado em restaurantes, padarias, lanchonetes e similares. Facilitando a rotina da Empresa/Órgão Público e dando mais qualidade de vida ao seu Colaborador/Servidor. Ganho de Krats (Cashback).</p>
              </Col>
          </Row>
          </Container>
        </div>

        <div className="my-slide fundoProdutos">
        <Container>
          <Row>
              <Col sm={4}>
                  <Image src={require('../../assets/cartoes/ambos.png')} rounded fluid/>
              </Col>
              <Col sm={8}>
                  <p className="textoProdutos">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para o mundo moderno das pessoas físicas que se importam com a praticidade dos procedimentos, com a desburocratização, obtenção de descontos e economia, com o avanço da tecnologia e suas tendências, para obter vantagens nas atividades do seu dia a dia, a Tradecard, como princípio, proporciona o melhor relacionamento com todos que são envolvidos nesses processos e revoluciona sua atuação, com a composição de vários serviços em um só instrumento “APP TRADECLUB”, permitindo com facilidade e comodidade, o controle na palma da sua mão. Basta um celular!</p>
              </Col>
          </Row>
          </Container>
        </div>

      </Carousel>
    </div>
  );
}
