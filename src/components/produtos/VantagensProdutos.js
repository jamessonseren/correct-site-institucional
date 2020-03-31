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
          <>
            <Row style={{backgroundColor: 'rgba(0,0,0,0.5)'}} className='p-5'>
              <Col sm={6} className='d-flex justify-content-center align-items-center'>
                <Image src={require('../../assets/adiantamento_convenio.png')} style={{width: '100%'}} rounded fluid/>
              </Col>
              <Col sm={6} className='text-light'>
                <h4 className='mb-3 text-center'>
                  Para os cartões de <strong> Adiantamento Salarial</strong> e <strong>Convênio</strong>, 
                  a <strong>Tradecard</strong> oferece as seguintes vantagens:
                </h4>
                <ul className="products">
                  <li>
                    <GiBank style={{color: '#28a745', fontSize: 30, marginRight: 10, width: '5%'}}/> 
                    <span>
                      Ganha um <strong>Banco</strong> de presente, podendo utilizar vários recursos <strong>sem taxas e juros</strong>, através do <strong>APP Tradecard</strong>;
                    </span>
                  </li>
                  <li>
                    <GiBuyCard style={{color: '#28a745', fontSize: 30, marginRight: 10, width: '5%'}}/>
                    <span>
                      Compras na Rede <strong>Tradeclub com prazo (média de 45 dias) e sem juros;</strong>
                    </span>
                  </li>
                  <li>
                    <AiOutlineClockCircle style={{color: '#28a745', fontSize: 30, marginRight: 10, width: '5%'}}/> 
                    <span>
                      Não precisa esperar dia do pagamento para realizar suas <strong>compras</strong>;
                    </span>
                  </li>
                  <li>
                    <FaHandshake style={{color: '#28a745', fontSize: 30, marginRight: 10, width: '5%'}}/> 
                    <span>
                      Obtém facilidades nas compras sem burocracia, com tecnologia e <strong>sem consultas no SPC/Serasa</strong>;
                    </span>
                  </li>
                  <li>
                    <MdRedeem style={{color: '#28a745', fontSize: 30, marginRight: 10, width: '5%'}}/> 
                    <span>
                      <strong>Rede TRADECLUB</strong> de compras na cidade, podendo inclusive, dar sugestões de estabelecimentos comerciais de sua preferência;
                    </span>
                  </li>
                  <li>
                    <GiCardExchange style={{color: '#28a745', fontSize: 30, marginRight: 10, width: '5%'}}/> 
                    <span>
                      Ganha <strong>KRATS (Cashback)</strong> em todas as compras realizadas, que é creditado automaticamente em sua conta de pagamentos, no Cartão do Clube de Vantagens - TRADECLUB;
                    </span>
                  </li>
                  <li>
                    <FaCommentsDollar style={{color: '#28a745', fontSize: 30, marginRight: 10, width: '5%'}}/> 
                    <span>
                      Cartão Virtual que proporciona maior <strong>segurança e facilidade de pagamentos;</strong>
                    </span>
                  </li>
                  <li>
                    <MdSignalWifiOff style={{color: '#28a745', fontSize: 30, marginRight: 10, width: '5%'}}/> 
                    <span>
                      Possibilidade de efetuar compras mesmo quando não estiver conectado na internet, através da <strong>tecnologia Token;</strong>
                    </span>
                  </li>
                  <li>
                    <GiCardPickup style={{color: '#28a745', fontSize: 30, marginRight: 10, width: '5%'}}/> 
                    <span> Utilização destes benefícios é opcional e seu limite renovado mensalmente; </span>
                  </li>
                  <li>
                    <FaPercent style={{color: '#28a745', fontSize: 30, marginRight: 10, width: '5%'}}/> 
                    <strong>Não tem custos, mensalidades, taxas e nem juros.</strong>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className='p-5'>
              <Col sm={6} className='text-light'>
                <h4 className='text-center'>
                  Para os cartões de <strong>Alimentação</strong> e <strong>Refeição</strong>, a <strong>Tradecard</strong> oferece as seguintes vantagens:
                </h4>
                <ul className="products">
                  <li>
                    <GiBank style={{color: '#28a745', fontSize: 30, marginRight: 10, width: '5%'}}/> 
                    <span>
                      Ganha um <strong>Banco</strong> de presente, podendo utilizar vários recursos <strong>sem taxas e juros</strong>, através do <strong>APP Tradecard</strong>;
                    </span>
                  </li>
                  <li>
                    <FaHandshake style={{color: '#28a745', fontSize: 30, marginRight: 10, width: '5%'}}/> 
                    <span>
                      <strong>Desburocratização</strong> e automação dos processos de convênios
                    </span>
                  </li>
                  <li>
                    <FaTasks style={{color: '#28a745', fontSize: 30, marginRight: 10, width: '5%'}}/> 
                    <span>
                      <strong>Padronização de benefícios</strong> a todos os Colaboradores/Servidores, independentemente do local de trabalho                    
                    </span>
                  </li>
                  <li>
                    <GiCardExchange style={{color: '#28a745', fontSize: 30, marginRight: 10, width: '5%'}}/> 
                    <span>
                      <strong>Ganha KRATS (Cashback)</strong> em todas as compras realizadas, que é creditado automaticamente em sua conta de pagamentos, no Cartão do Clube de Vantagens - TRADECLUB;
                    </span>
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline style={{color: '#28a745', fontSize: 30, marginRight: 10, width: '5%'}}/> 
                    <span>
                      Vale Alimentação contempla a <strong>minimização de processos e custos</strong> em relação a substituição da Cesta Básica.
                    </span>
                  </li>
                  <li>
                    <FaClipboardList style={{color: '#28a745', fontSize: 30, marginRight: 10, width: '5%'}}/> 
                    <span>
                      <strong>Autogestão dos processos de convênios</strong>, permitindo que a área de Recursos Humanos tenha o controle de todos os procedimentos administrativos sobre o sistema, de forma centralizada ou não.
                    </span>
                  </li>
                  <li>
                    <MdSignalWifiOff style={{color: '#28a745', fontSize: 30, marginRight: 10, width: '5%'}}/>
                    <span>
                      Possibilidade de efetuar compras mesmo quando não estiver conectado na internet, através da tecnologia Token
                    </span>
                  </li>
                  <li>
                    <FaPercent style={{color: '#28a745', fontSize: 30, marginRight: 10, width: '5%'}}/> 
                    <span>
                      <strong>Não tem custos: mensalidades, taxas e nem juros.</strong>
                    </span>
                  </li>
                </ul>
              </Col>
              <Col sm={6} className='d-flex justify-content-center align-items-center'>
                <Image src={require('../../assets/alimentacao_refeicao.png')} style={{width: '100%'}} rounded fluid/>
              </Col>
            </Row>
          </>
         
  );
}
