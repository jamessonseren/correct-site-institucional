import React from "react";
import {Col, Row } from 'react-bootstrap'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {GiBank, GiBuyCard} from 'react-icons/gi'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {MdRedeem} from 'react-icons/md'
import {FaCommentsDollar} from 'react-icons/fa'
import './VantagensProdutos.css'

export default function VantagensProdutos() {
  return (
          <Row style={{backgroundColor: '#141414'}} className='p3 products'>
             <Col sm={6}>
            </Col>
            <Col sm={6} className='text-light p-5 border-right justify-content-center align-items-center'>
              <h3 className='mb-3 text-center'>Para os cartões de <strong> Adiantamento Salarial</strong> e <strong>Convênio</strong>, 
                a <strong>Tradecard</strong> oferece as seguintes vantagens:
              </h3>
              <ul>
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
                  <IoMdCheckmarkCircleOutline style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
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
                  <IoMdCheckmarkCircleOutline style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  Ganha KRATS (Cashback) em todas as compras realizadas, que é creditado automaticamente em sua conta corrente, no Cartão do Clube de Vantagens - TRADECLUB;
                </li>
                <li>
                  <FaCommentsDollar style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  Cartão Virtual que proporciona maior segurança e facilidade de pagamentos;
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  Possibilidade de efetuar compras mesmo quando não estiver conectado na internet, através da tecnologia Token;
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  Utilização destes benefícios é opcional e seu limite renovado mensalmente;
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  Não tem custos: mensalidades, taxas e nem juros.
                </li>
              </ul>
            </Col>
           
            <Col sm={6} className='text-light p-3'>
              <h2 className='text-center font-weight-bold mb-3'>Cartões Pré-Pagos</h2>
              <h5 className='mb-3'>Para os cartões de Adiantamento Salarial e Convênio, a Tradecard oferece as seguintes vantagens:</h5>
              <ul>
                <li>
                  <IoMdCheckmarkCircleOutline style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                    Ganha um Banco de presente, podendo utilizar vários recursos sem taxas e juros, através do APP TRADECLUB;
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  Compras na Rede TRADECLUB com prazo (média de 45 dias) e sem juros;
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  Não precisa esperar dia do pagamento para realizar suas compras;
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  Obtém facilidades nas compras sem burocracia, com tecnologia e sem consultas no SPC/Serasa;
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  Rede TRADECLUB de compras na cidade, de acordo com as necessidades dos Usuários (Colaboradores/Servidores), podendo inclusive, dar sugestões de estabelecimentos comerciais de sua preferência;
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  Ganha KRATS (Cashback) em todas as compras realizadas, que é creditado automaticamente em sua conta corrente, no Cartão do Clube de Vantagens - TRADECLUB;
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  Cartão Virtual que proporciona maior segurança e facilidade de pagamentos;
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  Possibilidade de efetuar compras mesmo quando não estiver conectado na internet, através da tecnologia Token;
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  Utilização destes benefícios é opcional e seu limite renovado mensalmente;
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline style={{color: '#28a745', fontSize: 40, marginRight: 10, width: '10%'}}/> 
                  Não tem custos: mensalidades, taxas e nem juros.
                </li>
              </ul>
            </Col>
          </Row>
  );
}
