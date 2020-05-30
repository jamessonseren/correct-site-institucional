import React from 'react'
import {Col, Row} from 'react-bootstrap'
import { MDBInput, MDBAlert } from "mdbreact";
import MuiPhoneNumber from "material-ui-phone-number";
import { Button, ButtonGroup } from 'reactstrap';
import './contato.css'
import posed from 'react-pose'
  
const Box = posed.div({
    visible: { 
        x: 0,
        opacity: 1,
        scaleY: 1,
        transition: { duration: 250 }
    },
    hidden: { 
        x: -500,
        opacity: 0,
        scaleY: 0,
        transition: { duration: 250 }
    }
});

const apiKey = "G8icTPGPQJhd0uMHRqaE";

class Contato extends React.Component {
    state = {
        nome: '',
        email: '',
        message: '',
        empresa: '',
        tipo: 'pf',
        err: false, 
        success: false,
        phone : '',
        cidade : '',
        isVisible: false,
    }

    componentDidMount(){ this.setState({isVisible: true}) }

    submit = async () => {
        this.setState({isLoading: true})
        const {nome, email, message, empresa, tipo, cidade, phone} = this.state

        if(nome === '' || email === '' || message === ''){
            this.setState({err: true, isLoading: false})
            return true
        }
        if(tipo === 'pj' && empresa === ''){
            this.setState({err: true, isLoading: false})
            return true
        }

        let url = `https://www.sisclub.com.br/ws_tradecard/sendEmail.php?nome=${nome}&email=${email}&message=${message}&empresa=${empresa}&tipo=${tipo}&phone=${phone}&cidade=${cidade}&apiKey=${apiKey}`
        await fetch(url, { mode: "no-cors"})
        this.setState({
            err: false, 
            success: true,
            nome: '',
            email: '',
            message: '',
            empresa: '',
            tipo: 'pf',
            isLoading: false,
            phone : '',
            cidade:''
        })
    }

    render() {
        return(
            <Box pose={this.state.isVisible ? 'visible' : 'hidden'}>
                <Row className='justify-content-center align-items-center d-flex padding-sm height_responsive_contato' style={{backgroundColor: 'rgba(0,0,0,0.7)', height: '90vh'}}>
                    <Col sm={8} className="mt-5 text-light">
                        <h1 className='text-center title_contato'>Entre em contato conosco!</h1>
                        <p className='text-center'>Preencha o formulário abaixo e aguarde nosso contato em breve.</p>
                    </Col>
                    <Col sm={8} className="justify-content-md-center">
                        <Row className="justify-content-around">
                            <ButtonGroup>
                                <Button color="dark"  onClick={() => this.setState({tipo: 'pf'})} active={this.state.tipo === 'pf' ? true : false}>Pessoa física</Button>
                                <Button color="dark" onClick={() => this.setState({tipo: 'pj'})} active={this.state.tipo === 'pj' ? true : false}>Pessoa jurídica</Button>
                            </ButtonGroup>
                        </Row>
                    </Col>
                    <Col sm={6} className="justify-content-center mb-5">
                        <MDBInput label="Nome" className='input' required value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value}) } />
                        <MDBInput label="E-mail" className='input' required value={this.state.email} onChange={(e) => this.setState({email: e.target.value}) } />
                        <MDBInput label="Cidade" className='input' required value={this.state.cidade} onChange={(e) => this.setState({cidade: e.target.value}) } />
                        <MuiPhoneNumber
                            name="phone"
                            label="Telefone"
                            data-cy="user-phone"
                            defaultCountry={"br"}
                            className='input-tel'
                            value={this.state.phone}
                            onChange={value => this.setState({phone: value})}
                        />
                        {this.state.tipo === 'pj' && <MDBInput label="Empresa" value={this.state.empresa} className='input' onChange={(e) => this.setState({empresa: e.target.value}) } /> }
                        <MDBInput className='input' required type="textarea" label="Mensagem" value={this.state.message} onChange={(e) => this.setState({message: e.target.value})} />
                        <button onClick={() => this.submit()} className="btn-club w-100">
                            {this.state.isLoading ? 
                                <div className="spinner-border text-light"></div>
                            :
                                'Enviar'
                            }
                        </button>
                        {this.state.err && <MDBAlert color='primary' className='mt-3'> Preencha todos os campos </MDBAlert> }
                        {this.state.success && <MDBAlert color='success' className='mt-3'> Mensagem enviada com sucesso! </MDBAlert> }
                    </Col>
                </Row>
            </Box>
        )
    }
}

export default Contato;