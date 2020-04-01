import React from 'react'
import {Col, Row, Container, Image, Form} from 'react-bootstrap'
import { Button, ButtonGroup } from 'reactstrap';

class Tradeshop extends React.Component {

    state = { shop: [], cities: [], ofertas: [], tipo: 'virtuais', cidade: 'selecione' }

    componentDidMount() {
        this.getCities()
        this.getShop()
    }

    //Consulta estabelecimento a partir do select
    getOfertas = async (event) => {
        let city = event.target.value
        let response = await fetch(`https://www.sisclub.com.br/ws_tradecard/indicador-de-ofertas.php?cidade=${city}&cifra=ZttQ0kjSJDdQ0Hv2UmP0`)
        let result = await response.json()
        this.setState({ ofertas : result, cidade : city })
    }

    //Coleta todas as cidades disponíveis
    getCities = async () => {
        let response = await fetch('https://www.sisclub.com.br/ws_tradecard/lista_cidades.php?cifra=kCvWX9C0sDpPH65uKucz')
        let result   = await response.text()
        this.setState({ cities : result.split(';') })
    }

    //Pega itens do TradeShop
    getShop = async () => {
        let response = await fetch(`https://www.sisclub.com.br/ws_tradecard/tradeshop.php?cifra=HCADir2rVpBB0ROA1PxY`)
        let result   = await response.text()
        this.setState({ shop : result.split(',') })
    }

    renderShop = () => {
        return this.state.shop.map(( produto, index) => {
            let item = produto.split(';')
            if(item === '' && item === null && item === undefined){return true}
            let logotipo      = item[0]
            let descricao     = item[1]
            let preco         = item[2]
            let imagem        = item[3] 
            let link          = item[4]
            let preco_inicio  = item[5]
            let url = `https://starkclub.com.br/club/uploadIMG/${imagem}`
            let logo = `https://sisclub.com.br/upload_logo/${logotipo}`
            if(link === undefined){return false}
            return (
                <Row className="ml-5 mr-5 p-5 justify-content-center align-items-center text-light" key={index}>
                    <Col sm={3}>
                        <a href={link} target='_blank'>
                            <Image src={url} fluid style={{borderRadius: 10}} />
                        </a>
                    </Col>
                    <Col sm={5}>
                        <Row className='justify-content-around align-items-center'> 
                            <h3 className='font-weight-bold'>{descricao}</h3> 
                            <Image src={logo} fluid style={{borderRadius: 10}}/>
                        </Row>
                        <Col sm={12} className='align-items-center justify-content-center mt-4 mb-4'> 
                            <h5 className='text-center'>De: R$ {parseFloat(preco).toFixed(2).replace('.',',')} </h5>
                            <h2 className='text-center'>Por: <strong> R$ {parseFloat(preco_inicio).toFixed(2).replace('.',',')} </strong> </h2>
                        </Col>
                        <Row className='align-items-center justify-content-center'> 
                            <a href={link} className='btn-trade' style={{width: '50%', textAlign: 'center'}} target='_blank'>Comprar</a>
                        </Row>
                    </Col>
                </Row>
            )
        })
    }

    render() {

        const renderCities = this.state.cities.map((item, index) => {
            let city = item.split(",")
            let cidade = city[0]
            let estado = city[1]
            return <option key={index} value={cidade}>{`${cidade} - ${estado}`}</option> 
        })

        const renderPromos = this.state.ofertas.map((item,index) => {
            return (

            <Col sm={8} key={index} className='border-bottom p-4'>
                <Row className='align-items-center justify-content-center text-light'>
                    <Col sm={4} className='align-items-center justify-content-center'>
                        <h3 className="text-center font-weight-bold"> {item.Nome} </h3>
                        <p className="text-center">
                            {item.Cidade} ({item.Estado})<br />
                            {item.logradouro}, {item.numero}<br />
                            {item.telefone_formatado}
                        </p>
                    </Col>
                    <Col sm={4} className='align-items-center justify-content-center'>
                        <h5 className="text-center font-weight-bold">{item.titulo_promo}</h5>
                        <p className="text-center"> {item.descricao} </p>
                        <p className="text-center">
                        {(item.dura_estoque === 1) ?
                            `Promoção válida enquanto durarem os estoques e válida de <strong>${item.data_inicio}</strong> até <strong>${item.data_final}</strong>`
                            :
                            `Promoção válida de ${item.data_inicio} até ${item.data_final}`
                        }
                        </p>
                    </Col>
                    <Col sm={4}>
                        {item.deal === 's' && <img src="https://www.starkclub.com.br/new/img2/StarkDeal.png" width="50%" className='mt-2 text-center'/>}
                        {item.club === 's' && <img src="https://www.starkclub.com.br/new/img2/StarkClub.png" width="50%" className='mt-2 text-center'/>}
                        {item.alim === 's' && <img src="https://www.starkclub.com.br/new/img2/starkticket.png" width="50%" className='mt-2 text-center'/>}
                        {item.ref === 's' && <img src="https://www.starkclub.com.br/new/img2/starkticketAl.png" width="50%" className='mt-2 text-center'/>}
                    </Col>
                </Row>
            </Col>
            )
        })

        return(
            <Row className='align-items-center justify-content-center'>
                <Col sm={12} className='justify-content-center align-items-center d-flex'>
                    <ButtonGroup>
                        <Button color="dark"  onClick={() => this.setState({tipo: 'fisica'})} active={this.state.tipo === 'fisica'}>Lojas Físicas</Button>
                        <Button color="dark" onClick={() => this.setState({tipo: 'virtuais'})} active={this.state.tipo === 'virtuais'}>Lojas Virtuais</Button>
                    </ButtonGroup>
                </Col>
                { this.state.tipo === 'fisica' &&
                    <Col sm={12} className="justify-content-center align-items-center d-flex mt-3">
                        <Form.Control as="select" className='col-2' onChange={this.getOfertas.bind(this)} >
                            <option value={'selecione'}>Selecione...</option> 
                            {renderCities}
                        </Form.Control>
                    </Col>
                }

                { this.state.tipo === 'virtuais' ? 
                    <Col sm={12}>
                        {this.renderShop()}
                    </Col>
                :
                    <>
                        { this.state.ofertas.length > 0 ?
                            renderPromos                        
                        : 
                            <Row className="justify-content-md-center mt-3 mb-3">
                                {this.state.cidade === 'selecione' ? 
                                    <h3 className="text-light">Selecione uma cidade</h3>
                                :
                                    <h3 className="text-light">Nenhuma oferta disponível em {this.state.cidade}</h3>
                                }
                            </Row>
                        }
                    </>
                }
            </Row>
        )
    }
}

export default Tradeshop;