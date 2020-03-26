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

  const getParceiroInfo = async() => {
      let id_estabelecimento = id_estab
      let response = await fetch(`https://www.sisclub.com.br/ws_tradecard/parceiroInfo.php?id_estabelecimento=${id_estabelecimento}&cifra=2L6AcgOMu47bDTprQlIw`)
      let result   = await response.text()
      setToken(result)
  };

  const show = () => {
    //console.log('aqui'+token)
    let result = token;
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
              <Col sm={1}>
                <Image src={logo} />
              </Col>
              <Col sm={{ span: 5, offset: 1 }}>
                <h3>{fantasia}</h3>
              </Col>
              <Col sm={{ span: 1, offset: 4 }}>
                <Button outline color="danger" href={ecommerce}>Comprar</Button>
              </Col>
          </Row>
          <Container>
            <Row className="vantagens">
              <h5>Vantagens :</h5>
            </Row>
            <Row>
              {vantagem !== '' && <p>{vantagem}</p>}
              {cupom != '' && <p>Cupom de desconto: {cupom}</p>}
              {gerabonus != '' && gerabonus == 's' && <p>Acumula KRATS (Creditados até 30 dias após a compra)</p>}
              {gerabonus != '' && gerabonus == 'n' && <p>Não Acumula KRATS</p>}
              {aceitabonus != '' && aceitabonus == 's' && abrangencia != 'nacional' && <p>Aceita KRATS como forma de pagamento</p>}
              {aceitabonus != '' && aceitabonus == 'n' || abrangencia == 'nacional' && <p>Não aceita KRATS como forma de pagamento</p>}
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
