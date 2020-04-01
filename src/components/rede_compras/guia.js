import React from 'react'
import {Col, Row, Container, Image, Form} from 'react-bootstrap'
import CollapsiblePanel from './colapse.js'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import CollapsiblePanelParceiros from './parceiros.js'
import EstabInfo from './estabInfo.js'
import {Modal} from 'mdbreact'
import { Button, ButtonGroup } from 'reactstrap';
import './guia.css'

class GuiaComercios extends React.Component {
  
    state = {
        result:   [],
        cities:   [],
        parceiros: [],
        estabelecimento_info: '',
        isLoadingModal: true,
        modalVisible: false,
        tipo: 'fisica'
    }

    componentDidMount() {
        this.getCities()
        this.getParceiros()
    }

    //Altenar
    toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }))

    //Consulta estabelecimento a partir do select
    getRedeCompras = async (event) => {
        let city = event.target.value
        let re = await fetch(`https://www.sisclub.com.br/ws_tradecard/guia.php?cidade=${city}&cifra=Y4g3niOIkGkLhmYrm1Yk`)
        re = await re.json()
        this.setState({
            result : re
        })
    }

    //Coleta todos parceiros virtuais
    getParceiros = async () => {
        let response = await fetch(`https://www.sisclub.com.br/ws_tradecard/parceiros.php?cifra=TdCGMBIGHF9JZOC6s1cr`)
        let result   = await response.text()
        this.setState({ parceiros : result.split(',') })
    }

    //Coleta todas as cidades disponíveis
    getCities = async () => {
        let response = await fetch('https://www.sisclub.com.br/ws_tradecard/lista_cidades.php?cifra=kCvWX9C0sDpPH65uKucz')
        let result   = await response.text()
        this.setState({ cities : result.split(';') })
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

    //Retorna endereço de imagem
    pushImg = (item) => {
        let data = item.split(';')
        let path = data[0]
        if(path !== undefined || path !== '')
            return `https://sisclub.com.br/upload_logo/${path}`
        return ''
    }

    //Retorna id do estabelecimento
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

    getParceiroInfo = async (id_estabelecimento) => {
        this.setState({isLoadingModal: true})
        let response = await fetch(`https://www.sisclub.com.br/ws_tradecard/parceiroInfo.php?id_estabelecimento=${id_estabelecimento}&cifra=2L6AcgOMu47bDTprQlIw`)
        let result   = await response.text()
        this.setState({isLoadingModal: false, estabelecimento_info: result})
    };
    
    render() {
        const {result, tipo} = this.state
        let ndx = 0;
        let ramoAtual='';
        
        const renderCities = this.state.cities.map((item, index) => {
            let city = item.split(",")
            let cidade = city[0]
            let estado = city[1]
            return <option key={index} value={cidade}>{`${cidade} - ${estado}`}</option> 
        })

        const renderParceiros = this.state.parceiros.map((item, index) =>{
            let parceiro = item.split(';')
            let logotipo = parceiro[0]
            let id_estabelecimento = parceiro[1]
            if(id_estabelecimento == '' || logotipo == ''){return <></>}
            return( 
                <Image 
                    key={index} 
                    onClick={() =>{ console.log(this.state.modalVisible); this.setState({modalVisible: true, logotipo: logotipo}, () => this.getParceiroInfo(id_estabelecimento)) }} 
                    className="col-1 p-0 m-1" style={{cursor: 'pointer'}} 
                    src={`https://sisclub.com.br/upload_logo/${logotipo}`} 
                    fluid 
                /> 
            )  
        })

        const renderEstabelecimentoInfo = () => {
            let estabelecimento = this.state.estabelecimento_info.split(';')
            let fantasia    = estabelecimento[0]
            let vantagem    = estabelecimento[1]
            let cupom       = estabelecimento[2]
            let ecommerce   = estabelecimento[3]
            let gerabonus   = estabelecimento[4]
            let aceitabonus = estabelecimento[5]
            let abrangencia = estabelecimento[6]
            return (
                <>
                    <MDBModalHeader className='justify-content-center'>{fantasia}</MDBModalHeader>
                    <Row className='align-items-center justify-content-center'>
                        <Col sm={5}> <Image src={`https://sisclub.com.br/upload_logo/${this.state.logotipo}`} /> </Col>
                        <Col sm={5}>
                            <Button outline color="danger" href={ecommerce}>Comprar</Button>
                        </Col>
                    </Row>
                    <Col sm={12}>
                        <h4 className='font-weight-bold col-12'>Vantagens :</h4>
                        <Col sm={12} style={{fontSize: '10px'}}>
                            {vantagem !== '' && <p>{vantagem}</p>}
                            {cupom != '' && <p>Cupom de desconto: {cupom}</p>}
                            {gerabonus != '' && gerabonus == 's' && <p>Acumula KRATS (Creditados até 30 dias após a compra)</p>}
                            {gerabonus != '' && gerabonus == 'n' && <p>Não Acumula KRATS</p>}
                            {aceitabonus != '' && aceitabonus == 's' && abrangencia != 'nacional' && <p>Aceita KRATS como forma de pagamento</p>}
                            {aceitabonus != '' && aceitabonus == 'n' || abrangencia == 'nacional' && <p>Não aceita KRATS como forma de pagamento</p>}
                        </Col>
                        <h5 className='col-12'>Aviso:</h5>
                        <Col sm={12} style={{fontSize: '10px'}}>
                            <p className="aviso">Os créditos do seu cartão Tradeclub não poderão ser utilizados como meio de pagamento.</p><br/>
                            <p className="aviso">Consulte as regras e formas de pagamento de cada parceiro nacional.</p>
                        </Col>
                    </Col>
                </>
            )
        }

        return(
            <Row>
                <MDBModal isOpen={this.state.modalVisible} toggle={() => this.setState({modalVisible: false})}>
                    {this.state.isLoadingModal ? <div className="spinner-border text-light"></div> : renderEstabelecimentoInfo() }
                </MDBModal>

                <Col sm={12} className="align-items-center justify-content-center d-flex">
                    <ButtonGroup>
                        <Button color="dark"  onClick={() => this.setState({tipo: 'fisica'})} active={this.state.tipo === 'fisica'}>Lojas Físicas</Button>
                        <Button color="dark" onClick={() => this.setState({tipo: 'virtual'})} active={this.state.tipo === 'virtual'}>Lojas Virtuais</Button>
                    </ButtonGroup>
                </Col>

                { tipo === 'fisica' &&
                    <Row className="justify-content-md-center esp">
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select" onChange={this.getRedeCompras.bind(this)}> 
                                {renderCities}
                            </Form.Control>
                        </Form.Group>
                    </Row>
                }

                { tipo === 'virtual' && <Row className='p-5 justify-content-center align-items-center'> {renderParceiros} </Row> }

                    {
                        (tipo === 'fisica') ?
                            <Container>
                                <div>
                                    {result.map((item, index) =>
                                        <div>
                                            <div class="hide"> { ndx= (item.ramo !== ramoAtual) ? ndx+1 : ndx } </div>
                                            
                                            <div className={(this.check(ndx)) ? 'listraUm ' : 'listraDois '} >
                                            
                                                <span key={index}>
                                                    <Row className="justify-content-md-center ramo" onClick={this.toggle}>{ (item.ramo !== ramoAtual) ? ramoAtual = item.ramo : '' }</Row>
                                                    
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
                </Row>
        )
    }

}

export default GuiaComercios;