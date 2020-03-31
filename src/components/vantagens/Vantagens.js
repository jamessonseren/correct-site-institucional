import React, {useState, useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import CarouselVantagens from "./Carousel/CarouselVantagens";
import "./vantagens.css";
import {IoMdCheckmark} from 'react-icons/io'
import posed from 'react-pose'

const Box = posed.div({
    visible: { 
        x: 0,
        opacity: 1,
        scaleY: 1,
        transition: { duration: 250 }
    },
    hidden: { 
        x: -500,
        opacity: 0,
        scaleY: 0,
        transition: { duration: 250 }
    }
})

export default function Vantagens() {
  const [isVisible, setVisible] = useState(false)
    
  useEffect(() => {
      setVisible(true)
  }, []) 

  return (
    <Row className='text-light justify-content-center align-items-center'>
      <Col sm={12}>
        <CarouselVantagens />
      </Col>
      <Box className='col-10' pose={isVisible ? 'visible' : 'hidden'}>
        <h4 className='text-center col-12 pt-5'>
          Para o <strong>TRADECLUB</strong>, a Tradecard foi além dos benefícios de um Clube, chega a tudo que um Banco pode oferecer, 
          agregando <strong>muito mais benefícios</strong> aos seus usuários. 
        </h4>
        <Col sm={12} className='mt-3 mb-3'>
          <Row className='justify-content-center align-items-center'>
            <Col sm={4}>
              <ul className="vantagens">
                <li>
                  <IoMdCheckmark className='icon-vantagens' /> 
                  <span>
                    Ganha um <strong>Banco</strong> de presente, podendo utilizar vários recursos <strong>sem taxas e juros</strong>, através do APP Tradecard;
                  </span>
                </li>
                <li>
                  <IoMdCheckmark className='icon-vantagens'/>
                  <span>
                    Proporciona <strong>descontos e vantagens</strong> na rede de compras local, regional e nacional                  
                  </span>
                </li>
                <li>
                  <IoMdCheckmark className='icon-vantagens'/>
                  <span>
                    <strong>Ganha KRATS (Cashback) em todas as compras realizadas</strong>, podendo
                    utilizá-los quando quiser na rede de compras.           
                  </span>
                </li>
                <li>
                  <IoMdCheckmark className='icon-vantagens'/>
                  <span>
                    <strong>Concorre a prêmios</strong>, sorteados periodicamente, com base nos comprovantes de compras;                 
                  </span>
                </li>
              </ul>
            </Col>
            <Col sm={4}>
              <ul className="vantagens">
                <li>
                  <IoMdCheckmark className='icon-vantagens'/>
                  <span>
                    Oferece <strong>descontos e/ou vantagens</strong> para compras online, na Rede de Compras Nacional e ainda <strong>ganha KRATS</strong>;
                  </span>
                </li>
                <li>
                  <IoMdCheckmark className='icon-vantagens'/>
                  <span>
                    Rede de Compras <strong>(com promoções)</strong>
                  </span>
                </li>
                <li>
                  <IoMdCheckmark className='icon-vantagens'/>
                  <span>
                    TradeShop <strong>(com grandes promoções pontuais)</strong>
                  </span>
                </li>
                <li>
                  <IoMdCheckmark className='icon-vantagens'/>
                  <span>
                    Facilidade de <strong>utilização de GPS</strong> disponível para direcionamento às Lojas Físicas;    
                  </span>
                </li>
              </ul>
            </Col>
            <Col sm={4}>
              <ul className="vantagens">
                <li>
                  <IoMdCheckmark className='icon-vantagens'/>
                  <span>
                    <strong>Controle financeiro</strong> através de relatórios da conta de pagamentos Tradecard;        
                  </span>
                </li>
                <li>
                  <IoMdCheckmark className='icon-vantagens'/>
                  <span>
                    Possibilidade de efetuar <strong>compras mesmo quando não estiver conectado na internet</strong>, através da tecnologia Token.          
                  </span>
                </li>
                <li>
                  <IoMdCheckmark className='icon-vantagens'/>
                  <span>
                    Transferências entre contas, entre Bancos, CNPJs e CPFs (depósitos e saques);           
                  </span>
                </li>
                <li>
                  <IoMdCheckmark className='icon-vantagens'/>
                  <span>
                    <strong>Pagamentos de contas</strong> (boletos – código de barras)          
                  </span>
                </li>
                <li>
                  <IoMdCheckmark className='icon-vantagens'/>
                  <span>
                    <strong>Não tem custos, mensalidades, taxas e nem juros.</strong>
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
        <p className='col-12 text-center pb-5'>
          A Tradecard não cobra nada por estes produtos/serviços, quando implanta em Empresas/Órgãos Públicos (Sistema Corporativo), como benefícios e, 
          muito pelo contrário, dá ao Colaborador/Servidor, <strong>KRATS (Cashback) em cada compra efetuada</strong> (KRATS é dinheiro virtual equivalente ao Real).
          O objetivo desses benefícios é <strong>proporcionar uma vida melhor e segura</strong> para os Colaboradores/Servidores, <strong>evitando o endividamento</strong>, não permitindo caírem nas armadilhas de créditos fáceis. 
          Possibilita ainda, o <strong>controle absoluto de seus gastos na palma de sua mão, através do APP TRADECLUB.</strong>
        </p>
      </Box>
    </Row>
  );
}
