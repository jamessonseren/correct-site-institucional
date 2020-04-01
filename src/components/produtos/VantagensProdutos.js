import React from "react";
import {Col, Row, Image } from 'react-bootstrap'
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
                <h3 className='mb-3 text-center'>
                  Para os cartões de <strong> Adiantamento Salarial</strong> e <strong>Convênio</strong>, 
                  a <strong>Tradecard</strong> oferece as seguintes vantagens:
                </h3>
                <ul className="products">
                  <li>
                    <GiBank className='icon-vantagens'/> 
                    <span>
                      Ganha um <strong>Banco</strong> de presente, podendo utilizar vários recursos <strong>sem taxas e juros</strong>, através do <strong>APP Tradecard</strong>;
                    </span>
                  </li>
                  <li>
                    <GiBuyCard className='icon-vantagens'/>
                    <span>
                      Compras na Rede <strong>Tradeclub com prazo (média de 45 dias) e sem juros;</strong>
                    </span>
                  </li>
                  <li>
                    <AiOutlineClockCircle className='icon-vantagens'/> 
                    <span>
                      Não precisa esperar dia do pagamento para realizar suas <strong>compras</strong>;
                    </span>
                  </li>
                  <li>
                    <FaHandshake className='icon-vantagens'/> 
                    <span>
                      Obtém facilidades nas compras sem burocracia, com tecnologia e <strong>sem consultas no SPC/Serasa</strong>;
                    </span>
                  </li>
                  <li>
                    <MdRedeem className='icon-vantagens'/> 
                    <span>
                      <strong>Rede TRADECLUB</strong> de compras na cidade, podendo inclusive, dar sugestões de estabelecimentos comerciais de sua preferência;
                    </span>
                  </li>
                  <li>
                    <GiCardExchange className='icon-vantagens'/> 
                    <span>
                      Ganha <strong>KRATS (Cashback)</strong> em todas as compras realizadas, que é creditado automaticamente em sua conta de pagamentos, no Cartão do Clube de Vantagens - TRADECLUB;
                    </span>
                  </li>
                  <li>
                    <FaCommentsDollar className='icon-vantagens'/> 
                    <span>
                      Cartão Virtual que proporciona maior <strong>segurança e facilidade de pagamentos;</strong>
                    </span>
                  </li>
                  <li>
                    <MdSignalWifiOff className='icon-vantagens'/> 
                    <span>
                      Possibilidade de efetuar compras mesmo quando não estiver conectado na internet, através da <strong>tecnologia Token;</strong>
                    </span>
                  </li>
                  <li>
                    <GiCardPickup className='icon-vantagens'/> 
                    <span> Utilização destes benefícios é opcional e seu limite renovado mensalmente; </span>
                  </li>
                  <li>
                    <FaPercent className='icon-vantagens'/> 
                    <strong>Não tem custos, mensalidades, taxas e nem juros.</strong>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className='p-5'>
              <Col sm={6} className='text-light'>
                <h3 className='text-center'>
                  Para os cartões de <strong>Alimentação</strong> e <strong>Refeição</strong>, a <strong>Tradecard</strong> oferece as seguintes vantagens:
                </h3>
                <ul className="products">
                  <li>
                    <GiBank className='icon-vantagens'/> 
                    <span>
                      Ganha um <strong>Banco</strong> de presente, podendo utilizar vários recursos <strong>sem taxas e juros</strong>, através do <strong>APP Tradecard</strong>;
                    </span>
                  </li>
                  <li>
                    <FaHandshake className='icon-vantagens'/> 
                    <span>
                      <strong>Desburocratização</strong> e automação dos processos de convênios
                    </span>
                  </li>
                  <li>
                    <FaTasks className='icon-vantagens'/> 
                    <span>
                      <strong>Padronização de benefícios</strong> a todos os Colaboradores/Servidores, independentemente do local de trabalho                    
                    </span>
                  </li>
                  <li>
                    <GiCardExchange className='icon-vantagens'/> 
                    <span>
                      <strong>Ganha KRATS (Cashback)</strong> em todas as compras realizadas, que é creditado automaticamente em sua conta de pagamentos, no Cartão do Clube de Vantagens - TRADECLUB;
                    </span>
                  </li>
                  <li>
                    <IoMdCheckmarkCircleOutline className='icon-vantagens'/> 
                    <span>
                      Vale Alimentação contempla a <strong>minimização de processos e custos</strong> em relação a substituição da Cesta Básica.
                    </span>
                  </li>
                  <li>
                    <FaClipboardList className='icon-vantagens'/> 
                    <span>
                      <strong>Autogestão dos processos de convênios</strong>, permitindo que a área de Recursos Humanos tenha o controle de todos os procedimentos administrativos sobre o sistema, de forma centralizada ou não.
                    </span>
                  </li>
                  <li>
                    <MdSignalWifiOff className='icon-vantagens'/>
                    <span>
                      Possibilidade de efetuar compras mesmo quando não estiver conectado na internet, através da tecnologia Token
                    </span>
                  </li>
                  <li>
                    <FaPercent className='icon-vantagens'/> 
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
