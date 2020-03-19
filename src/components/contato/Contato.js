import React from 'react'
import {Col, Row} from 'react-bootstrap'
import { MDBInput, MDBFormInline, MDBAlert } from "mdbreact";
import './contato.css'

const apiKey = "G8icTPGPQJhd0uMHRqaE";

class Contato extends React.Component {
    state = {
        nome: '',
        email: '',
        message: '',
        empresa: '',
        tipo: 'pf',
        err: false, 
        success: false
    }

    submit = async () => {
        this.setState({isLoading: true})
        const {nome, email, message, empresa, tipo} = this.state

        if(nome == '' || email == '' || message == ''){
            this.setState({err: true, isLoading: false})
            return true
        }
        if(tipo == 'pj' && empresa == ''){
            this.setState({err: true, isLoading: false})
            return true
        }

        let url = `https://www.sisclub.com.br/ws_tradecard/sendEmail.php?nome=${nome}&email=${email}&message=${message}&empresa=${empresa}&tipo=${tipo}&apiKey=${apiKey}`
        await fetch(url, { mode: "no-cors"})
        this.setState({
            err: false, 
            success: true,
            nome: '',
            email: '',
            message: '',
            empresa: '',
            tipo: 'pf',
            isLoading: false
        })
    }
    

    render() {
        return(
            <Row className='justify-content-center align-items-center'>
                <Col sm={8} className="mt-5 text-light">
                    <h1 className='text-center'>Entre em contato conosco!</h1>
                </Col>
                <Col sm={8} className="justify-content-md-center mt-5">
                    <MDBFormInline className='justify-content-around'>
                        <MDBInput onClick={() => this.setState({tipo: 'pf'})} checked={this.state.tipo == 'pf' ? true : false} label="Pessoa física" type="radio"
                           />
                        <MDBInput onClick={() => this.setState({tipo: 'pj'})} checked={this.state.tipo == 'pj' ? true : false} label="Pessoa jurídica" type="radio" />
                    </MDBFormInline>
                </Col>
                <Col sm={8} className="justify-content-md-center">
                    <MDBInput label="Nome" className='input' value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value}) } />
                    <MDBInput label="E-mail" className='input' value={this.state.email} onChange={(e) => this.setState({email: e.target.value}) } />
                    {this.state.tipo == 'pj' && <MDBInput label="Empresa" value={this.state.empresa} className='input' onChange={(e) => this.setState({empresa: e.target.value}) } /> }
                    <MDBInput className='input' type="textarea" label="Mensagem" value={this.state.message} onChange={(e) => this.setState({message: e.target.value})} />
                    <button onClick={() => this.submit()} className="btn-trade">
                        {this.state.isLoading ? 
                            <div className="spinner-border text-light"></div>
                        :
                            'Enviar'
                        }
                    </button>      
                    {this.state.err && <MDBAlert color='primary' className='mt-3'> Preencha todos os campos </MDBAlert> }
                    {this.state.success && <MDBAlert color='success' className='mt-3'> E-mail enviado com sucesso! </MDBAlert> }

                </Col>
            </Row>
        )
    }
}

export default Contato;