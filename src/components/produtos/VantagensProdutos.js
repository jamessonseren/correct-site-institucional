import React from "react";
import {Col, Row, Container, Image } from 'react-bootstrap'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {GiBank, GiBuyCard, GiCardExchange, GiCardPickup} from 'react-icons/gi'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {MdRedeem, MdSignalWifiOff} from 'react-icons/md'
import {FaCommentsDollar, FaHandshake, FaTasks, FaClipboardList, FaPercent} from 'react-icons/fa'
import './VantagensProdutos.css'

export default function VantagensProdutos() {
  return (
          <Row style={{backgroundColor: '#141414'}} className='p3 products'>
            <Col sm={12} className='p-5'></Col>
            <Col sm={6} className='text-light p-5 justify-content-center align-items-center'>
              <Container>
                <Image src={require('../../assets/adiantamento_convenio.png')} style={{width: '100%'}} rounded fluid/>
              </Container>
            </Col>
            <Col sm={6} className='text-light'>
              <h3 className='mb-3 text-center'>Para os cartões de <strong> Adiantamento Salarial</strong> e <strong>Convênio</strong>, 
                a <strong>Tradecard</strong> oferece as seguintes vantagens:
              </h3>
              <ul className="p-5">
                <li>
                  <GiBank style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  <span>
                    Ganha um <strong>Banco</strong> de presente, podendo utilizar vários recursos sem taxas e juros, através do <strong>APP Tradecard</strong>;
                  </span>
                </li>
                <li>
                  <GiBuyCard style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/>
                  <span>
                    Compras na Rede <strong>Tradeclub</strong> com prazo (média de 45 dias) e sem juros;
                  </span>
                </li>
                <li>
                  <AiOutlineClockCircle style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  <span>
                    Não precisa esperar dia do pagamento para realizar suas <strong>compras</strong>;
                  </span>
                </li>
                <li>
                  <FaHandshake style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  <span>
                    Obtém facilidades nas compras sem burocracia, com tecnologia e <strong>sem consultas no SPC/Serasa</strong>;
                  </span>
                </li>
                <li>
                  <MdRedeem style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  <span>
                    Rede TRADECLUB de compras na cidade, podendo inclusive, dar sugestões de estabelecimentos comerciais de sua preferência;
                  </span>
                </li>
                <li>
                  <GiCardExchange style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  Ganha KRATS (Cashback) em todas as compras realizadas, que é creditado automaticamente em sua conta corrente, no Cartão do Clube de Vantagens - TRADECLUB;
                </li>
                <li>
                  <FaCommentsDollar style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  Cartão Virtual que proporciona maior segurança e facilidade de pagamentos;
                </li>
                <li>
                  <MdSignalWifiOff style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  Possibilidade de efetuar compras mesmo quando não estiver conectado na internet, através da tecnologia Token;
                </li>
                <li>
                  <GiCardPickup style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  Utilização destes benefícios é opcional e seu limite renovado mensalmente;
                </li>
                <li>
                  <FaPercent style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  Não tem custos: mensalidades, taxas e nem juros.
                </li>
              </ul>
            </Col>
              <Col sm={6} className='text-light border-top p-5'>
                <Container className='p-5'>
                <h3 className='mb-3 text-center'>Para os cartões de <strong>Alimentação</strong> e <strong>Refeição</strong>, a <strong>Tradecard</strong> oferece as seguintes vantagens:&nbsp;</h3>
                <ul className="p-5">
                  <li>
                    <GiBank style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                    <span>
                      Ganha um <strong>Banco</strong> de presente, podendo utilizar vários recursos sem taxas e juros, através do <strong>APP Tradecard</strong>;
                    </span>
                  </li>
                  <li>
                    <FaHandshake style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                    Desburocratização e automação dos processos de convênios
                  </li>
                  <li>
                    <FaTasks style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                    Padronização de benefícios a todos os Colaboradores/Servidores, independentemente do local de trabalho
                  </li>
                  <li>
                    <GiCardExchange style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                    Ganha KRATS (Cashback) em todas as compras realizadas, que é creditado automaticamente em sua conta corrente, no Cartão do Clube de Vantagens - TRADECLUB;
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                    Vale Alimentação contempla a <strong>minimização de processos e custos</strong> em relação a substituição da Cesta Básica, tais como: <strong>livre escolha de produtos</strong> dos Colaboradores/Servidores e para o Empregador a cotação, compra, armazenamento, distribuição e outros
                  </li>
                  <li>
                    <FaClipboardList style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                    Autogestão dos processos de convênios, permitindo que a área de Recursos Humanos tenha o controle de todos os procedimentos administrativos sobre o sistema, de forma centralizada ou não
                  </li>
                  <li>
                    <MdSignalWifiOff style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                    Possibilidade de efetuar compras mesmo quando não estiver conectado na internet, através da tecnologia Token
                  </li>
                  <li>
                    <FaPercent style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                    Não tem custos: mensalidades, taxas e nem juros.
                  </li>
                </ul>
                </Container>
              </Col>
              <Col sm={6} className='text-light border-top'>
                <Container className='p-5'>
                  <Image src={require('../../assets/alimentacao_refeicao.png')} style={{width: '100%'}} rounded fluid/>
                </Container>
              </Col>
          </Row>
  );
}
