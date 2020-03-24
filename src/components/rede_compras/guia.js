import React, {useState} from 'react'
import {Col, Row, Container, Image, Form} from 'react-bootstrap'
import posed from 'react-pose';
import CollapsiblePanel from './colapse.js'
import CollapsiblePanelParceiros from './parceiros.js'
import { MDBInput, MDBFormInline, MDBAlert } from "mdbreact";
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
            partners: '',
            selCity:'',
            idPart:0,
            partInfo:'',
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
        console.log(dados)
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

    getParceiroInfo = async (id) => {
        let id_estabelecimento = id
        let response = await fetch(`https://www.sisclub.com.br/ws_tradecard/parceiroInfo.php?id_estabelecimento=${id_estabelecimento}&cifra=2L6AcgOMu47bDTprQlIw`)
        let result   = await response.text()
        let dados    = result.split(';')
        this.setState({
            partInfo : dados
        })
        console.log(result)
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
        let id_estabelecimento = data[1]
        if(path != undefined || path != ''){
            return `https://sisclub.com.br/upload_logo/${path}`
        }
        else{
            return ''
        }
    }

    pushId = (item) => {
        let data = item.split(';')
        let path = data[0]
        let id_estabelecimento = data[1]
        if(id_estabelecimento != undefined || id_estabelecimento != ''){
            return id_estabelecimento
        }
        else{
            return ''
        }
    }

    //Auxilia no efeito Zebra
    check = (i) =>{
        return (i%2 === 0) ? 1 : 0
    }
    
    render() {
        const {result, isOpen, cities, partners, tipo} = this.state
        let ndx = 0;
        let ramoAtual='';
        
        return(
            <Container className=''>
                    <div className="fundoBranco">
                        {result?
                            <div>
                            <Row className="justify-content-md-center">
                                <h3 className="esp">Rede de compras:</h3>
                            </Row>
                            <Row className="justify-content-around">
                                <MDBFormInline className=''>
                                    <MDBInput onClick={() => this.setState({tipo: 'virtual'})} checked={this.state.tipo == 'virtual' ? true : false} label="Loja virtual" type="radio" className="op"/>
                                    <MDBInput onClick={() => this.setState({tipo: 'fisica'})} checked={this.state.tipo == 'fisica' ? true : false} label="Loja Física" type="radio" />
                                </MDBFormInline>
                            </Row>
                            
                            {
                                (tipo=='fisica') ? <Row className="justify-content-md-center esp">
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
                            
                            {(tipo == 'virtual') ? <Container>
                                {partners.map((item, index) =>
                                    <span key={index}>
                                        <CollapsiblePanelParceiros title={ (this.pushImg(item) != '' && this.pushImg(item) != 'https://sisclub.com.br/upload_logo/') ? <Image src={this.pushImg(item)} fluid width="300px"/> : '' }>
                                            <span>
                                                <Row className="justify-content-md-center ramo">
                                                    { (this.pushId(item) != '') ? this.pushId(item) : '' }
                                                </Row>
                                            </span>
                                        </CollapsiblePanelParceiros>
                                    </span>
                                )}
                            </Container> : ''}

                            {(tipo == 'fisica') ?
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
                        :null}
                            </div> : ''}

                    </div>
                   
            </Container>
        )
    }

}

export default GuiaComercios;