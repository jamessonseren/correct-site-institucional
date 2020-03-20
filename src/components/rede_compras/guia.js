import React from 'react'
import {Col, Row, Container, Image, Form} from 'react-bootstrap'
import posed from 'react-pose';
import './guia.css'

const itemConfig = {
    open: { height: 'auto', opacity:1, flip:true },
    closed: { height: '1px', opacity:0, flip: true } 
}

const Item = posed.div(itemConfig)

class GuiaComercios extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: '',
            isOpen: true,
            cities: '',
            selCity:''
        }
    }

    componentDidMount() {
        this.getCities()
        this.getContent()
    }

    toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }))

    //Carrega página com estabelecimentos da primeira cidade do select
    getContent = async () => {
        let re = await fetch(`https://www.sisclub.com.br/ws_tradecard/guia.php?cidade=Acorizal&cifra=Y4g3niOIkGkLhmYrm1Yk`)
        re = await re.json()
        this.setState({
            result : re
        })
    }

    //Consulta estabelecimento a partir do select
    getContentBySelect = async (event) => {
        let city = event.target.value
        let re = await fetch(`https://www.sisclub.com.br/ws_tradecard/guia.php?cidade=${city}&cifra=Y4g3niOIkGkLhmYrm1Yk`)
        re = await re.json()
        this.setState({
            result : re
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
        console.log(this.state.cities)
    }

    //Lista as bandeiras autorizadas
    listar = (itens) => {
        return (
        itens.split('§').map(place => <p className="label"> {place} </p>)
        )
    }

    //Lista as vantagens oferecidas para club
    vantagens = (itens) => {
        return (
        itens.split(';').map(place => <li className="label"> {place} </li>)
        )
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

    //Auxilia no efeito Zebra
    check = (i) =>{
        return (i%2 === 0) ? 1 : 0
    }

    render() {
        const {result, isOpen, cities} = this.state
        let ndx = 0;
        let ramoAtual='';

        return(
            <Container  fluid={true} className='cor'>
                <Row className="justify-content-md-center">
                    <Col sm={8}>
                    <Container className="fundoBranco">
                        {result?
                            <div>
                            <Row className="justify-content-md-center">
                                <h3 className="titulo">Rede de compras:</h3>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control as="select"
                                    onChange={this.getContentBySelect.bind(this)}>
                                    {cities.map((item, index) =>
                                        <option key={index} value={this.pushCity(item)}> {
                                            this.pushLabel(item)
                                        } </option>
                                    )}
                                    </Form.Control>
                                </Form.Group>
                            </Row>
                            {result.map((item, index) =>
                                <div className={(this.check(ndx)) ? 'listraUm' : 'listraDois'} >
                                <div className="hide">{ndx=ndx+1}</div>
                                <span key={index}>
                                    <Row className="justify-content-md-center ramo" onClick={this.toggle}>
                                        {
                                            (item.ramo !== ramoAtual) ? ramoAtual = item.ramo : ''
                                        }
                                    </Row>
                                    <div className="basicInfo">
                                        <Row><p className="label">{item.Nome}</p></Row>
                                        <Row><p className="label">{item.Cidade} - {item.Estado}</p></Row>
                                        <Row><p>{item.Telefone}</p></Row>
                                    </div>
                                    <Item key={index}  className="item" pose={isOpen ? 'open' : 'closed'}>
                                        <Container>
                                            <Row className="final">
                                                <Col className="justify-content-md-center">
                                                    <Row  className="justify-content-md-center images">
                                                        <Col sm={2}>{(item.deal === 's') ? <Image src="https://www.starkclub.com.br/new/img2/StarkDeal.png" fluid/> : ""}</Col>
                                                        <Col sm={2}>{(item.club === 's') ? <Image src="https://www.starkclub.com.br/new/img2/StarkClub.png" fluid/> : ""}</Col>
                                                        <Col sm={2}>{(item.alim === 's') ? <Image src="https://www.starkclub.com.br/new/img2/starkticket.png" fluid/> : ""}</Col>
                                                        <Col sm={2}>{(item.refei === 's') ? <Image src="https://www.starkclub.com.br/new/img2/starkticketAl.png" fluid/> : ""}</Col>
                                                        <Col sm={2}>{(item.qrcode === 1) ? <Image src="https://www.starkclub.com.br/new/img2/venda_qrcode_vermelho.png" fluid/> : ""}</Col>
                                                    </Row>
                                                    <Row className="justify-content-md-center">
                                                        <Col sm={3}>
                                                            {
                                                                (item.deal === 's') ?
                                                                <div className="new-line">
                                                                    <h5>Adiantamento Salarial</h5>
                                                                    {this.listar(item.bandeiras)}
                                                                </div>
                                                                :
                                                                ''
                                                            }
                                                        </Col>
                                                        <Col sm={3}>
                                                            {
                                                                (item.club === 's') ?
                                                                <div className="new-line">
                                                                    <h5>Vantagens</h5>
                                                                    {this.vantagens(item.vantagens)}
                                                                </div>
                                                                :
                                                                ''
                                                            }
                                                        </Col>
                                                        <Col sm={4}>
                                                            <div className="new-line">
                                                                <h5>Endereço</h5>
                                                                <p className="label">{item.logradouro}, {item.numero} - {item.bairro}</p>
                                                                <p className="label">{item.cidade} - {item.estado}</p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                               </Col>
                                           </Row>
                                       </Container>
                                    </Item>
                                </span>
                                </div>
                            )}
                            </div>
                        :null}
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default GuiaComercios;