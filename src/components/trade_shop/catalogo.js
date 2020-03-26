import React from 'react'
import {Col, Row, Container, Image, Form} from 'react-bootstrap'
import { Button, ButtonGroup } from 'reactstrap';
import './catalogo.css'

class Catalogo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: '',
            cities: '',
            ofertas:[],
            tipo: 'virtuais',
            selCity:'Acorizal'
        }
    }

    componentDidMount() {
        this.getCities()
        this.checkOfertas('Acorizal')
        this.getShop()
    }

    //Consulta estabelecimento a partir do select
    checkOfertas = async (city) => {
        let re = await fetch(`https://www.sisclub.com.br/ws_tradecard/indicador-de-ofertas.php?cidade=${city}&cifra=ZttQ0kjSJDdQ0Hv2UmP0`)
        re = await re.json()
        this.setState({
            ofertas : re
        })
        console.log(this.state.ofertas)
    }

    //Consulta estabelecimento a partir do select
    checkOfertasSelect = async (event) => {
        let city = event.target.value
        let re = await fetch(`https://www.sisclub.com.br/ws_tradecard/indicador-de-ofertas.php?cidade=${city}&cifra=ZttQ0kjSJDdQ0Hv2UmP0`)
        re = await re.json()
        this.setState({
            ofertas : re,
            selCity : city
        })
    }

    //Coleta todas as cidades disponíveis
    getCities = async () => {
        let re = await fetch('https://www.sisclub.com.br/ws_tradecard/lista_cidades.php?cifra=kCvWX9C0sDpPH65uKucz')
        re = await re.text()
        let dados    = re.split(';')
        this.setState({
            cities : dados
        })
    }

    getShop = async () => {
        let re = await fetch(`https://www.sisclub.com.br/ws_tradecard/tradeshop.php?cifra=HCADir2rVpBB0ROA1PxY`)
        re = await re.text()
        this.setState({
            result : re
        })
        console.log(re)
    }

    
    //Retorna cidade
    pushCity = (item) => {
        let dados = item.split(',')
        var cidade = dados[0]
        return cidade
    }

    //Retorna label para opção no select
    pushLabel = (item) => {
        let dados = item.split(',')
        var cidade = dados[0]
        var estado = dados[1]
        let label = `${cidade.toUpperCase()} - ${estado}`
        return label
    }

    renderShop = () => {
        var data = this.state.result.split(',')
        return data.map((produto,id) => {
            var item = produto.split(';')
            if(item !== '' && item !== null && item !== undefined){
                var logotipo  = item[0]
                var descricao = item[1]
                var preco     = item[2]
                var imagem    = item[3] 
                var link      = item[4]
                var preco_inicio      = item[5]

                var url = `https://starkclub.com.br/club/uploadIMG/${imagem}`
                var logo = `https://sisclub.com.br/upload_logo/${logotipo}`
                if(link === undefined){return false}
                return (
                    <Container className="justify-content-center item">
                        <Row className="justify-content-around">
                            <Col sm={6}>
                                <a href={link}><Image src={url} fluid/></a>
                            </Col>
                            <Col >
                                <Row>
                                    <h3 className="descricao">{descricao}</h3>
                                </Row>
                                <Row className="info">
                                    <Col sm={6}>
                                        <Row>
                                            <Col sm={{ span: 11, offset: 1 }}>
                                            <p> de R$ {parseFloat(preco).toFixed(2).replace('.',',')} por R$ {parseFloat(preco_inicio).toFixed(2).replace('.',',')}</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    
                                    <Col sm={6}>
                                        <Row>
                                            <Col sm={{ span: 6, offset: 5 }}>
                                                <Image className="pull-right" src={logo} fluid/>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Button href={link}>
                                        Comprar
                                    </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                )
            }
        })
    }

    render() {
        return(
            <div className="fundoBranco">
                <Container>
                    <Row className="justify-content-md-center">
                        <h3 className="esp">TradeShop:</h3>
                    </Row>
                    <Row className="justify-content-around">
                        <ButtonGroup>
                            <Button color="dark"  onClick={() => this.setState({tipo: 'fisica'})} active={this.state.tipo === 'fisica'}>Lojas Físicas</Button>
                            <Button color="dark" onClick={() => this.setState({tipo: 'virtuais'})} active={this.state.tipo === 'virtuais'}>Lojas Virtuais</Button>
                        </ButtonGroup>
                    </Row>

                    {
                        (this.state.tipo === 'fisica') ? <Row className="justify-content-md-center esp">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Control as="select"
                                onChange={this.checkOfertasSelect.bind(this)}>
                                {this.state.cities.map((item, index) =>
                                    <option key={index} value={this.pushCity(item)}> {
                                        this.pushLabel(item)
                                    } </option>
                                )}
                                </Form.Control>
                            </Form.Group>
                        </Row> : ''
                    }
                    
                    {
                        (this.state.tipo === 'virtuais') ?
                            <Row>
                        {
                            this.renderShop()
                        }
                         </Row>
                    :
                       <>
                       {
                            (this.state.ofertas && this.state.ofertas.length > 0) ?
                                this.state.ofertas.map((item,index) =>
                                    <span key={index}>
                                        <Container key={item.promo_id}>
                                            <div>
                                                <div>
                                                    <Row>
                                                        <Col sm={4}>
                                                            <h3 className="tituloEstab"> {item.Nome} </h3>
                                                            <p className="infoLocal">
                                                                {item.Cidade} ({item.Estado})<br />
                                                                {item.logradouro}, {item.numero}<br />
                                                                {item.telefone_formatado}
                                                            </p>
                                                        </Col>
                                                        <Col sm={8}>
                                                            <h5 className="tituloEstab">{item.titulo_promo}</h5>
                                                            <p className="descricaoPromo"> {item.descricao} </p>
                                                            <p className="validade">
                                                            {(item.dura_estoque === 1) ?
                                                                
                                                                `Promoção válida enquanto durarem os estoques e válida de ${item.data_inicio} até ${item.data_final}`
                                                                :
                                                                `Promoção válida de ${item.data_inicio} até ${item.data_final}`
                                                            }
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                    {(item.deal === 's') ? <img src="https://www.starkclub.com.br/new/img2/StarkDeal.png" width="28%"/> : ''}
                                                    {(item.club === 's') ? <img src="https://www.starkclub.com.br/new/img2/StarkClub.png" width="28%"/> : ''}
                                                    {(item.alim === 's') ? <img src="https://www.starkclub.com.br/new/img2/starkticket.png" width="28%"/> : ''}
                                                    {(item.ref === 's') ? <img src="https://www.starkclub.com.br/new/img2/starkticketAl.png" width="28%"/> : ''}
                                                </div>
                                            </div>
                                        </Container>
                                    </span>
                                ) : (<Row className="justify-content-md-center">
                                <h3 className="esp">Nenhuma oferta disponível em {this.state.selCity}</h3>
                                </Row>)
                        }
                       </>
                    }
                </Container>
            </div>
        )
    }

}

export default Catalogo;