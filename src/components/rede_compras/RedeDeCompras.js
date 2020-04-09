import React from 'react'
import {Col, Row, Container, Image, Form} from 'react-bootstrap'
import CollapsiblePanel from './colapse.js'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import CollapsiblePanelParceiros from './parceiros.js'
import EstabInfo from './estabInfo.js'
import {Modal} from 'mdbreact'
import { Button, ButtonGroup } from 'reactstrap';
import './guia.css'

class RedeDeCompras extends React.Component {
  
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
    renderBandeiras = (itens) => itens.split('§').map(place => <li> {place} </li>)

    //Lista as vantagens oferecidas para club
    renderVantagens = (itens) => itens.split(';').map(place => <li className="label"> {place} </li>)

    getParceiroInfo = async (id_estabelecimento) => {
        this.setState({isLoadingModal: true})
        let response = await fetch(`https://www.sisclub.com.br/ws_tradecard/parceiroInfo.php?id_estabelecimento=${id_estabelecimento}&cifra=2L6AcgOMu47bDTprQlIw`)
        let result   = await response.text()
        this.setState({isLoadingModal: false, estabelecimento_info: result})
    };
    
    render() {
        const {result, tipo} = this.state
        let prevRamo = '';
        let ramoAtual= '';
        
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

        const renderRedeDeCompras = result.map((item, index) =>{
            if(prevRamo !== item.ramo){
                var imprimirRamo = true
            }else{
                var imprimirRamo = false
            }
            prevRamo = item.ramo
            return (
                <Row>
                    {imprimirRamo && <Col sm={12} className="justify-content-center ramo-title"> <h3>{item.ramo}</h3> </Col>}
                    <CollapsiblePanel className='col-12'  
                        title={
                            <Col sm={12} className="d-flex text-light justify-content-center border-lista padding-sm" >
                                <Col sm={8}>
                                    <h3 className='text-underline'><u>{item.Nome}</u></h3>
                                    <p className='mb-1'>{item.Cidade} - {item.Estado}</p>
                                    <p className='mb-0'>{item.Telefone}</p>
                                </Col>
                                <Col className='align-items-center justify-content-end row' sm={4}>
                                    {(item.deal === 's') && <Image src="https://www.starkclub.com.br/new/img2/StarkDeal.png" className='col-6' fluid/>}
                                    {(item.club === 's') && <Image src="https://www.starkclub.com.br/new/img2/StarkClub.png" className='col-6' fluid/>}
                                    {(item.alim === 's') && <Image src="https://www.starkclub.com.br/new/img2/starkticket.png" className='col-6' fluid/>}
                                    {(item.refei === 's') && <Image src="https://www.starkclub.com.br/new/img2/starkticketAl.png" className='col-6' fluid/>}
                                    {(item.qrcode === 1) && <Image src="https://www.starkclub.com.br/new/img2/venda_qrcode_vermelho.png" className='col-6' fluid/>}
                                </Col>
                            </Col> 
                        } 
                    >
                        <Row className='d-flex text-light padding-sm'>
                            <Col sm={4} className='justify-content-center align-items-center'>
                                { item.deal === 's' &&
                                    <div>
                                        <h3><u>Adiantamento Salarial</u></h3>
                                        <ul>
                                            {this.renderBandeiras(item.bandeiras)}
                                        </ul>
                                    </div>
                                }
                            </Col>
                            <Col sm={4} className='justify-content-center align-items-center'>
                                { item.club === 's' &&
                                    <div>
                                        <h3><u>Vantagens</u></h3>
                                        {this.renderVantagens(item.vantagens)}
                                    </div>
                                }
                            </Col>
                            <Col sm={4} className='justify-content-center align-items-center m-1'>
                                <div>
                                    <h3><u>Endereço</u></h3>
                                    <p className="label">{item.logradouro}, {item.numero} - {item.bairro}</p>
                                    <p className="label">{item.cidade} - {item.estado}</p>
                                </div>
                            </Col>
                        </Row>
                    </CollapsiblePanel>
                </Row>
            )
    })


        return(
            <Row className='align-items-center justify-content-center'>
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
                    <Col sm={12} className="justify-content-center d-flex align-items-center">
                        <Form.Group controlId="exampleForm.ControlSelect1" className='col-6 mt-3'>
                            <Form.Control as="select" onChange={this.getRedeCompras.bind(this)}> 
                                <option value={'selecione'}>Selecione...</option> 
                                {renderCities}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                }

                { tipo === 'virtual' && <Row className='p-5 justify-content-center align-items-center'> {renderParceiros} </Row> }
                { tipo === 'fisica' && <Col sm={8} className='p-5 justify-content-center align-items-center align-self-center'> {renderRedeDeCompras} </Col> }
            </Row>
        )
    }

}

export default RedeDeCompras;