import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col } from "reactstrap";
import {Image } from 'react-bootstrap'
import './guia.css'

function EstabInfo({ children, ...props }) {

  const [token, setToken] = useState('');
  const { id_estab, logo } = props;

  useEffect(() => {
    if (id_estab !== null) {
      getParceiroInfo();
    }
  }, []);

  //Coleta informações de estabelecimento de acordo com o id informado
  const getParceiroInfo = async() => {
      let id_estabelecimento = id_estab
      let response = await fetch(`https://www.sisclub.com.br/ws_tradecard/parceiroInfo.php?id_estabelecimento=${id_estabelecimento}&cifra=2L6AcgOMu47bDTprQlIw`)
      let result   = await response.text()
      setToken(result)
  };

  const show = () => {
    let result      = token;
    let dados       = result.split(';')
    let fantasia    = dados[0]
    let vantagem    = dados[1]
    let cupom       = dados[2]
    let ecommerce   = dados[3]
    let gerabonus   = dados[4]
    let aceitabonus = dados[5]
    let abrangencia = dados[6]

    return(
      <Container>
        <div className="estabInfo">
          <Row>
              <Col sm={4}> <Image src={logo} /> </Col>
              <Col sm={4}>
                <h3 className='text-center'><strong>{fantasia}</strong></h3>
              </Col>
              <Col sm={4}>
                <Button outline color="danger" href={ecommerce}>Comprar</Button>
              </Col>
          </Row>
          <Container>
            <Row className="vantagens">
              <h5 className='text-center'><strong>Vantagens :</strong></h5>
            </Row>
            <Row className="ml-5 mr-5 p-5 justify-content-center align-items-center text-light padding-sm">
              {vantagem !== '' && <p className='text-center'>{vantagem}</p>}
              {cupom != '' && <p  className='text-center'>Cupom de desconto: {cupom}</p>}
              {gerabonus != '' && gerabonus == 's' && <p  className='text-center'>Acumula KRATS (Creditados até 30 dias após a compra)</p>}
              {gerabonus != '' && gerabonus == 'n' && <p className='text-center'>Não Acumula KRATS</p>}
              {aceitabonus != '' && aceitabonus == 's' && abrangencia != 'nacional' && <p className='text-center'>Aceita KRATS como forma de pagamento</p>}
              {aceitabonus != '' && aceitabonus == 'n' || abrangencia == 'nacional' && <p className='text-center'>Não aceita KRATS como forma de pagamento</p>}
            </Row>
            <Row>
                <h4>Aviso:</h4>
            </Row>
            <Row>
              <p className="aviso">Os créditos do seu cartão Tradeclub não poderão ser utilizados como meio de pagamento.</p><br/>
            </Row>
            <Row>
              <p className="aviso">Consulte as regras e formas de pagamento de cada parceiro nacional.</p>
            </Row>
          </Container>
        </div>
      </Container>
    )
  };

  return (
    <div className="coll-panel">
      {show()}
    </div>
  );
}

export default EstabInfo;
