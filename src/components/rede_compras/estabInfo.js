import React, { useState, useEffect } from "react";
import { Container, Button } from "reactstrap";
import './guia.css'

function EstabInfo({ children, ...props }) {

  const [token, setToken] = useState('');
  const { id_estab } = props;

  useEffect(() => {
    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual
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
          <h3>{fantasia}</h3>
          {vantagem !== '' && <p>{vantagem}</p>}
          {cupom != '' && <p>Cupom de desconto: {cupom}</p>}
          {gerabonus != '' && gerabonus == 's' && <p>Acumula KRATS (Creditados até 30 dias após a compra)</p>}
          {gerabonus != '' && gerabonus == 'n' && <p>Não Acumula KRATS</p>}
          {aceitabonus != '' && aceitabonus == 's' && abrangencia != 'nacional' && <p>Aceita KRATS como forma de pagamento</p>}
          {aceitabonus != '' && aceitabonus == 'n' || abrangencia == 'nacional' && <p>Não aceita KRATS como forma de pagamento</p>}
          <Button outline color="danger" href={ecommerce}>Comprar</Button>
          <h4>Aviso:</h4>
          <p>Os créditos do seu cartão Tradeclub não poderão ser utilizados como meio de pagamento.</p>
          <p>Consulte as regras e formas de pagamento de cada parceiro nacional.</p>
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
