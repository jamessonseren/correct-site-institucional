import React from 'react'
import {Col, Row, Container, Image, Form} from 'react-bootstrap'
import CollapsiblePanel from './colapse.js'
import CollapsiblePanelParceiros from './parceiros.js'
import EstabInfo from './estabInfo.js'
import { Button, ButtonGroup } from 'reactstrap';
import './guia.css'

class GuiaComercios extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: '',
            cities: '',
            partners: '',
            tipo:'fisica'
        }
    }

    componentDidMount() {
        this.getCities()
        this.getContent()
        this.getParceiros()
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

    //Coleta todos parceiros virtuais
    getParceiros = async () => {
        let re = await fetch(`https://www.sisclub.com.br/ws_tradecard/parceiros.php?cifra=TdCGMBIGHF9JZOC6s1cr`)
        re = await re.text()
        let dados    = re.split(',')
        this.setState({
            partners : dados
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

    pushImg = (item) => {
        let data = item.split(';')
        let path = data[0]
        if(path !== undefined || path !== '')
            return `https://sisclub.com.br/upload_logo/${path}`
        return ''
    }

    pushId = (item) => {
        let data = item.split(';')
        let id_estabelecimento = data[1]
        if(id_estabelecimento !== undefined || id_estabelecimento !== '')
            return id_estabelecimento
        return ''
    }

    //Auxilia no efeito Zebra
    check = (i) =>{
        return (i%2 === 0) ? 1 : 0
    }
    
    render() {
        const {result, cities, partners, tipo} = this.state
        let ndx = 0;
        let ramoAtual='';
        
        return(
                    <div className="fundoBranco">
                        {result?
                            <div>
                            <Row className="justify-content-md-center">
                                <h3 className="esp">Rede de compras:</h3>
                            </Row>
                            <Row className="justify-content-around">
                                <ButtonGroup>
                                    <Button color="dark"  onClick={() => this.setState({tipo: 'fisica'})} active={this.state.tipo === 'fisica'}>Lojas Físicas</Button>
                                    <Button color="dark" onClick={() => this.setState({tipo: 'virtual'})} active={this.state.tipo === 'virtual'}>Lojas Virtuais</Button>
                                </ButtonGroup>
                            </Row>
                            
                            {
                                (tipo === 'fisica') ? <Row className="justify-content-md-center esp">
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
                            </Row> : ''
                            }
                            
                            {(tipo === 'virtual') ? <Container>
                                {partners.map((item, index) =>
                                    <span key={index}>
                                        <CollapsiblePanelParceiros title={ (this.pushImg(item) != '' && this.pushImg(item) != 'https://sisclub.com.br/upload_logo/') ? <Image src={this.pushImg(item)} fluid width="300px"/> : '' }>
                                            <span>
                                                <Row className="justify-content-md-center ramo">
                                                    { (this.pushId(item) !== '') ? 
                                                        <EstabInfo logo={this.pushImg(item)} id_estab={this.pushId(item)}></EstabInfo> : '' }
                                                </Row>
                                            </span>
                                        </CollapsiblePanelParceiros>
                                    </span>
                                )}
                            </Container> : ''}

                            {(tipo === 'fisica') ?
                            <Container>
                            <div>
                            {result.map((item, index) =>
                                <div>
                                    <div class="hide">
                                        {
                                            ndx= (item.ramo !== ramoAtual) ? ndx+1 : ndx
                                        }
                                    </div>
                                    <div className={(this.check(ndx)) ? 'listraUm ' : 'listraDois '} >
                                    
                                        <span key={index}>
                                            <Row className="justify-content-md-center ramo" onClick={this.toggle}>
                                                {
                                                    (item.ramo !== ramoAtual) ? ramoAtual = item.ramo : ''
                                                }
                                            </Row>
                                            
                                            <CollapsiblePanel 
                                            title={
                                                <div className="basicInfo">
                                                <Row><p className="label">{item.Nome}</p></Row>
                                                <Row><p className="label">{item.Cidade} - {item.Estado}</p></Row>
                                                <Row><p>{item.Telefone}</p></Row>
                                            </div>
                                            } 
                                            color={ndx}
                                            >
                                            <span>
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
                                            </span>
                                    </CollapsiblePanel>
                                        </span>
                                    </div>
                                </div>
                            )}
                            </div>
                        </Container>
                        :null}
                            </div> : ''}
                    </div>
        )
    }

}

export default GuiaComercios;