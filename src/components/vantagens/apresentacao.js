import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Col, Row, Container, Image } from "react-bootstrap";

import "./apresentacaoVant.css";

export default function Presetation() {
  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        className="presentation-mode slide"
      >
        <div className="my-slide fundo_slide1">
          <Container>
            <Row>
              <Col sm={2}></Col>
              <Col sm={6}>
                <Image
                  src={require("../../assets/tradecard_logo_white.png")}
                  className="img-left"
                  rounded
                  fluid
                />
              </Col>
              <Col sm={12}>
                <p className="description">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clube de Vantagens -
                  <span className='font-weight-bold'>TRADECLUB</span>: proporcionando descontos, controle e economia.
                  Disponibiliza ainda, mais do que um Banco pode oferecer.
                  Extensivo aos familiares e amigos.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="my-slide fundo_slide2">
          <Container>
            <Row>
              <Col sm={12}>
                <p className="textBlackVant description">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para o TRADECLUB, a
                  Tradecard foi além dos benefícios de um Clube, chega a tudo
                  que um Banco pode oferecer, agregando muito mais benefícios
                  aos seus Usuários. Veja as vantagens e produtos que o Clube
                  oferece:
                  <br />
                </p>
                <p className="textBlackItens descriptionsm">
                  ✓ Ganha um Banco de presente, podendo utilizar vários recursos
                  sem taxas e juros, através do APP TRADECLUB;
                  <br />
                  ✓ Proporciona descontos e vantagens na rede de compras local,
                  regional e nacional;
                  <br />
                  ✓ Ganha KRATS (Cashback) em todas as compras realizadas, que é
                  creditado automaticamente em sua conta corrente, podendo
                  utilizá-los quando quiser na rede de compras. Conversão
                  automática de KRATS para Real e vice-versa;
                  <br />
                  ✓ Concorre a prêmios, sorteados periodicamente, com base nos
                  comprovantes de compras;
                  <br />
                  ✓ Oferece descontos e/ou vantagens para compras online, na
                  Rede de Compras Nacional e ainda ganha KRATS;
                  <br />
                  ✓ Tem a facilidade de obter instantaneamente as informações de
                  produtos e/ou lojas que oferecem vantagens, através: <br />
                  ✓ Rede de Compras: (com promoções)
                  <br />
                  ✓ TradeShop: (com grandes promoções pontuais)
                  <br />
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="my-slide fundo_slide3">
          <Container>
            <Row>
              <Col sm={12}>
                <p className="textBlackItens descriptionsm">
                  ✓ Facilidade de utilização de GPS disponível para
                  direcionamento às Lojas Físicas;
                  <br />
                  ✓ Controle financeiro através de relatórios da conta corrente
                  TRADECLUB;
                  <br />
                  ✓ Possibilidade de efetuar compras mesmo quando não estiver
                  conectado na internet, através da tecnologia Token.
                  <br />
                  ✓ Transferências entre contas, entre Bancos, CNPJs e CPFs
                  (depósitos e saques);
                  <br />
                  ✓ Pagamentos de contas (boletos – código de barras)
                  <br />
                  ✓ Não tem custos, mensalidades, taxas e nem juros.
                  <br />
                </p>
                <p className="textBlackItens descriptionsm">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A Tradecard não
                  cobra nada por estes produtos/serviços, quando implanta em
                  Empresas/Órgãos Públicos (Sistema Corporativo), como
                  benefícios e, muito pelo contrário, dá ao
                  Colaborador/Servidor, KRATS (Cashback) em cada compra efetuada
                  (KRATS é dinheiro virtual equivalente ao Real).
                </p>
                <p className="textBlackItens descriptionsm">
                  &nbsp;&nbsp;&nbsp;&nbsp;O objetivo desses benefícios é
                  proporcionar uma vida melhor e segura para os
                  Colaboradores/Servidores, evitando o endividamento, não
                  permitindo caírem nas armadilhas de créditos fáceis.
                  Possibilita ainda, o controle absoluto de seus gastos na palma
                  de sua mão, através do APP TRADECLUB;
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel>
    </div>
  );
}
