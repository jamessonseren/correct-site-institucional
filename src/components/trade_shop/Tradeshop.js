import React from 'react'
import {Col, Row, Image, Form} from 'react-bootstrap'
import { Button, ButtonGroup } from 'reactstrap';
import './checkDevice.css'

class Tradeshop extends React.Component {

    state = { shop: [], cities: [], ofertas: [], tipo: 'virtuais', cidade: 'selecione' }

    componentDidMount() {
        this.getCities()
        this.getShop()
    }

    //Consulta estabelecimento a partir do select
    getOfertas = async (event) => {
        let city = event.target.value
        let response = await fetch(`https://www.correct.com.br/B5IxozrETYlXSNXj81PvDtFjVb531fVl55hNEDLK/indicador_de_ofertas.php?cidade=${city}&apiKey=ZttQ0kjSJDdQ0Hv2UmP0`)
        let result = await response.json()
        this.setState({ ofertas : result, cidade : city })
    }

    //Coleta todas as cidades disponíveis
    getCities = async () => {
        let response = await fetch('https://www.correct.com.br/B5IxozrETYlXSNXj81PvDtFjVb531fVl55hNEDLK/lista_cidades.php?apiKey=kCvWX9C0sDpPH65uKucz')
        let result   = await response.text()
        this.setState({ cities : result.split(';') })
    }

    //Pega itens do TradeShop
    getShop = async () => {
        let response = await fetch(`https://www.correct.com.br/B5IxozrETYlXSNXj81PvDtFjVb531fVl55hNEDLK/correctShop.php?apiKey=HCADir2rVpBB0ROA1PxY`)
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
                    <Col sm={4} className='p-5 text-light'>
                        <Row className='justify-content-around align-items-center'> 
                            <a href={link} target='_blank' rel="noopener noreferrer" className='d-flex justify-content-center align-items-center mb-3'>
                                <Image src={url} fluid style={{borderRadius: 10, width: '50%', height: 'auto'}} />
                            </a>
                        </Row>
                        <Col sm={12} className='align-items-center justify-content-center mb-4'> 
                            <h5 className='text-center title'><strong>{descricao}</strong></h5>
                            <h5 className='text-center text'><del>De: R$ {parseFloat(preco).toFixed(2).replace('.',',')}</del></h5>
                            <h3 className='text-center strong'><strong className='strong'>Por: R$ {parseFloat(preco_inicio).toFixed(2).replace('.',',')}</strong></h3>
                        </Col>
                        <Row className='align-items-center justify-content-center'> 
                            <a href={link} className='btn-club' style={{width: '70%', textAlign: 'center'}} target='_blank' rel="noopener noreferrer">Comprar</a>
                        </Row>
                    </Col>
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
                <Row className='align-items-center justify-content-center text-light padding-sm'>
                    <Col sm={4} className='align-items-center justify-content-center'>
                        <h3 className="text-justify title-sm"><strong> {item.Nome} </strong></h3>
                        <p className="text-justify">
                            {item.Cidade} ({item.Estado})<br />
                            {item.logradouro}, {item.numero}<br />
                            {item.telefone_formatado}
                        </p>
                    </Col>
                    <Col sm={4} className='align-items-center justify-content-center'>
                        <h5 className="text-justify title-sm"><strong>{item.titulo_promo}</strong></h5>
                        <p className="text-justify"> {item.descricao} </p>
                        <p className="text-justify"> <strong>
                        {(item.dura_estoque === 1) ?
                            `Promoção válida enquanto durarem os estoques e válida de <strong>${item.data_inicio}</strong> até <strong>${item.data_final}</strong>`
                            :
                            `Promoção válida de ${item.data_inicio} até ${item.data_final}`
                        } </strong>
                        </p>
                    </Col>
                    <Col sm={4}>
                        {item.deal === 's' && <img alt='StarkDeal' src="https://www.starkclub.com.br/new/img2/StarkDeal.png" width="50%" className='mt-2 text-center'/>}
                        {item.club === 's' && <img alt='StarkClub' src="https://www.starkclub.com.br/new/img2/StarkClub.png" width="50%" className='mt-2 text-center'/>}
                        {item.alim === 's' && <img alt='StarkTicket' src="https://www.starkclub.com.br/new/img2/starkticket.png" width="50%" className='mt-2 text-center'/>}
                        {item.ref === 's' && <img  alt='StarkTicket Alimentação'src="https://www.starkclub.com.br/new/img2/starkticketAl.png" width="50%" className='mt-2 text-center'/>}
                    </Col>
                </Row>
            </Col>
            )
        })

        return(
            <Row className='align-items-center justify-content-center'>
                <Col sm={8} className='justify-content-center align-items-center d-flex'>
                    <Row className="justify-content-around">
                        <ButtonGroup>
                            <Button color="dark"  onClick={() => this.setState({tipo: 'fisica'})} active={this.state.tipo === 'fisica'}>Lojas Físicas</Button>
                            <Button color="dark" onClick={() => this.setState({tipo: 'virtuais'})} active={this.state.tipo === 'virtuais'}>Lojas Virtuais</Button>
                        </ButtonGroup>
                    </Row>
                </Col>
                { this.state.tipo === 'fisica' &&
                    <Col sm={12} className="justify-content-center align-items-center d-flex mt-3">
                        <Form.Control as="select" className='col-6' onChange={this.getOfertas.bind(this)} >
                            <option value={'selecione'}>Selecione...</option> 
                            {renderCities}
                        </Form.Control>
                    </Col>
                }

                { this.state.tipo === 'virtuais' ? 
                    <Col sm={12}>
                        <Row className="justify-content-around">
                        {this.renderShop()}
                        </Row>
                    </Col>
                :
                    <>
                        { this.state.ofertas.length > 0 ?
                            renderPromos                        
                        : 
                            <Row className="justify-content-md-around mt-3 mb-3 text-light padding-sm'">
                                <Col sm={12}>
                                    <Row>
                                        {this.state.cidade === 'selecione' ? 
                                            <h3 className="text-light text-center">Selecione uma cidade</h3>
                                        :
                                            <h3 className="text-light text-center">Nenhuma oferta disponível em {this.state.cidade}</h3>
                                        }
                                    </Row>
                                </Col>
                            </Row>
                        }
                    </>
                }
            </Row>
        )
    }
}

export default Tradeshop;