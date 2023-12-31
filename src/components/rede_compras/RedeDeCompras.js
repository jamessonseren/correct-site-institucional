import React from 'react'
import {Col, Row, Image, Form} from 'react-bootstrap'
import CollapsiblePanel from './colapse.js'
import {IoIosClose} from 'react-icons/io'
import { MDBModal, MDBModalHeader } from 'mdbreact';
import { Button, ButtonGroup } from 'reactstrap';
import './RedeDeCompras.css'

class RedeDeCompras extends React.Component {
  
    state = {
        result:   [],
        cities:   [],
        parceiros: [],
        estabelecimento_info: '',
        isLoadingModal: true,
        modalVisible: false,
        tipo: 'fisica',
        isLoading: false
    }

    componentDidMount() {
        this.getCities()
        this.getParceiros()
    }

    //Consulta estabelecimento a partir do select
    getRedeCompras = async (event) => {
        this.setState({isLoading: true, result: []})
        let city = event.target.value
        let re = await fetch(`https://www.correct.com.br/B5IxozrETYlXSNXj81PvDtFjVb531fVl55hNEDLK/guia.php?cidade=${city}&apiKey=Y4g3niOIkGkLhmYrm1Yk`)
        re = await re.json()
        this.setState({
            result : re,
            isLoading: false
        })
    }

    //Coleta todos parceiros virtuais
    getParceiros = async () => {
        let response = await fetch(`https://www.correct.com.br/B5IxozrETYlXSNXj81PvDtFjVb531fVl55hNEDLK/parceiros.php?apiKey=TdCGMBIGHF9JZOC6s1cr`)
        let result   = await response.text()
        this.setState({ parceiros : result.split(',') })
    }

    //Coleta todas as cidades disponíveis
    getCities = async () => {
        let response = await fetch('https://www.correct.com.br/B5IxozrETYlXSNXj81PvDtFjVb531fVl55hNEDLK/lista_cidades.php?apiKey=kCvWX9C0sDpPH65uKucz')
        let result   = await response.text()
        this.setState({ cities : result.split(';') })
    }

    //Lista as vantagens oferecidas para club
    renderVantagens = (itens) => itens.split(';').map(place => {
        if(place === ''){
            return true
        }else{
            return <li className="label"> {place} </li>
        }
    })

    getParceiroInfo = async (id_estabelecimento) => {
        this.setState({isLoadingModal: true})
        let response = await fetch(`https://www.correct.com.br/B5IxozrETYlXSNXj81PvDtFjVb531fVl55hNEDLK/parceiroInfo.php?id_estabelecimento=${id_estabelecimento}&apiKey=2L6AcgOMu47bDTprQlIw`)
        let result   = await response.text()
        this.setState({isLoadingModal: false, estabelecimento_info: result})
    };
    
    render() {
        const {result, tipo, isLoading} = this.state
        let prevRamo = '';

        const renderCities = this.state.cities.map((item, index) => {
            let city = item.split(",")
            let cidade = city[0]
            let estado = city[1]
            if(cidade === ''){
                return true
            }else{
                return <option key={index} value={cidade}>{`${cidade} - ${estado}`}</option> 
            }
        })

        const renderParceiros = this.state.parceiros.map((item, index) =>{
            let parceiro = item.split(';')
            let logotipo = parceiro[0]
            let id_estabelecimento = parceiro[1]
            if(id_estabelecimento === '' || logotipo === '' || logotipo === 'LOGO_CENTAURO.jpg'){return <></>}
            return( 
                <img 
                    alt="Logo Estabelecimento"
                    key={index} 
                    onClick={() =>{ this.setState({modalVisible: true, logotipo: logotipo}, () => this.getParceiroInfo(id_estabelecimento)) }} 
                    className="col-1 p-0 m-1" style={{cursor: 'pointer'}} 
                    src={`https://sisclub.com.br/upload_logo/${logotipo}`} 
                    style={{cursor: 'pointer'}} 
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
                    <Row className='justify-content-around align-items-center m-0'>
                        <MDBModalHeader className='justify-content-center no-border' >
                            {fantasia}
                        </MDBModalHeader>
                        <IoIosClose color='black' style={{cursor: 'pointer'}} onClick={() => this.setState({modalVisible: false}) } />
                    </Row>
                    <Row className='align-items-center justify-content-center'>
                        <Col sm={5} className='justify-content-center d-flex'> <Image src={`https://sisclub.com.br/upload_logo/${this.state.logotipo}`} /> </Col>
                        <Col sm={5} className='justify-content-center d-flex'>
                            <a style={{borderRadius: '20px'}} color="btn btn-info" href={ecommerce} target='_blank' rel="noopener noreferrer" >Comprar</a>
                        </Col>
                    </Row>
                    <Col sm={12}>
                        <h4 className='font-weight-bold col-12'>Vantagens :</h4>
                        <Col sm={12} style={{fontSize: '10px'}}>
                            {vantagem !== '' && <p>{vantagem}</p>}
                            {cupom !== '' && <p>Cupom de desconto: {cupom}</p>}
                            {gerabonus !== '' && gerabonus === 's' && <p>Acumula KRATS (Creditados até 30 dias após a compra)</p>}
                            {gerabonus !== '' && gerabonus === 'n' && <p>Não Acumula KRATS</p>}
                            {aceitabonus !== '' && aceitabonus === 's' && abrangencia !== 'nacional' && <p>Aceita KRATS como forma de pagamento</p>}
                            {(aceitabonus !== '' && aceitabonus === 'n') || abrangencia === 'nacional' && <p>Não aceita KRATS como forma de pagamento</p>}
                        </Col>
                        <h5 className='col-12'>Aviso:</h5>
                        <Col sm={12} style={{fontSize: '10px'}}>
                            <p className="aviso">Os créditos do seu cartão Correct Club não poderão ser utilizados como meio de pagamento.</p><br/>
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
            var link = `tel:${item.Telefone}`
            return (
                <Row className='border-lista' style={{cursor: 'pointer'}} >
                    {imprimirRamo && <Col sm={12} className="justify-content-center text-light font-weight-bold" style={{backgroundColor: "#00788C"}}> <h3>{item.ramo}</h3> </Col>}
                    <CollapsiblePanel className='col-12 border-lista' 
                        title={
                            <Row className="d-flex justify-content-center" >
                                <Col lg={8}>
                                    <h3 className='text-underline small-font'><u>{item.Nome}</u></h3>
                                    <p className='mb-1'>{item.Cidade} - {item.Estado}</p>
                                    <a href={link} target='_blank' rel="noopener noreferrer" style={{width: '20%'}}><p style={{width: '20%'}} className='mb-0'>{item.Telefone}</p></a>
                                    <p className='text-danger'>Clique para saber mais</p>
                                </Col>
                                <Col className='align-items-center justify-content-end row' lg={4}>
                                    {(item.deal === 's') && <Image src="https://www.sisclub.com.br/images/adiantamento.png" className='col-6' fluid/>}
                                    {(item.club === 's') && <Image src="https://www.sisclub.com.br/images/correct_club.png" className='col-6' fluid/>}
                                    {(item.alim === 's') && <Image src="https://www.sisclub.com.br/images/refeicao.png" className='col-6' fluid/>}
                                    {(item.refei === 's') && <Image src="https://www.sisclub.com.br/images/alimentacao.png" className='col-6' fluid/>}
                                </Col>
                            </Row> 
                        } 
                    >
                        <Col sm={12} className='d-flex column'>
                            <Col lg={6} className='justify-content-center align-items-center'>
                                { item.club === 's' &&
                                    <div>
                                        <h3><u>Vantagens</u></h3>
                                        {this.renderVantagens(item.vantagens)}
                                    </div>
                                }
                            </Col>
                            <Col lg={6} className='justify-content-center align-items-center'>
                                <div>
                                    <h3><u>Endereço</u></h3>
                                    <p className="label">{item.logradouro}, {item.numero} - {item.bairro}</p>
                                    <p className="label">{item.cidade} - {item.estado}</p>
                                </div>
                            </Col>
                        </Col>
                    </CollapsiblePanel>
                </Row>
            )
    })


        return(
            <Row className='align-items-center justify-content-center'>
                <MDBModal isOpen={this.state.modalVisible} toggle={() => this.setState({modalVisible: false})}>
                    {this.state.isLoadingModal ? <div className="spinner-border text-info" style={{display: 'flex', alignSelf: 'center', margin: '1rem'}}></div> : renderEstabelecimentoInfo() }
                </MDBModal>

                <Col sm={12} className="align-items-center justify-content-center d-flex">
                    <ButtonGroup>
                        <Button color="dark"  onClick={() => this.setState({tipo: 'fisica'})} active={this.state.tipo === 'fisica'}>Lojas Físicas</Button>
                        <Button color="dark" onClick={() => this.setState({tipo: 'virtual'})} active={this.state.tipo === 'virtual'}>Lojas Virtuais</Button>
                    </ButtonGroup>
                </Col>

                { tipo === 'fisica' &&
                    <Col sm={12} className="justify-content-center d-flex align-items-center">
                        <Form.Group className='col-6 mt-3'>
                            <Form.Control as="select" onChange={this.getRedeCompras.bind(this)}> 
                                <option value={'selecione'}>Selecione...</option> 
                                {renderCities}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                }

                { tipo === 'virtual' && <Row className='p-5 justify-content-center align-items-center'> {renderParceiros} </Row> }
                { tipo === 'fisica' && this.state.result.length !== 0 &&  <Col sm={8} className='p-5 justify-content-center align-items-center align-self-center col-sm-10'> {renderRedeDeCompras} </Col> }
                { tipo === 'fisica' && this.state.result.length === 0 && 
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <h3 className="text-center">Selecione uma cidade</h3>
                        {isLoading && <div className="spinner-border text-center text-info" style={{display: 'flex', alignSelf: 'center', margin: '1rem'}}></div>}
                    </div>
                }
            </Row>
        )
    }

}

export default RedeDeCompras;