import React from 'react'
import {Col, Row, Container, Form} from 'react-bootstrap'
import './contato.css'

class Contato extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            telefone: '',
            empresa: '',
            tipo:'pf'
        }
    }

    render() {
        return(
            <Container  fluid={true} className='cor'>
            <Row className="justify-content-md-center">
                <h3 className="titulo">Entre em contato conosco!</h3>
            </Row>
            <Row className="justify-content-md-center">
                    {this.state.tipo === 'pf' ?
                        <>
                            <Form.Check
                                type="radio"
                                label="Pessoa Física"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                className="esp"
                                value="pf"
                                custom
                                checked
                                onChange={this.onTipoChange.bind(this)}
                            />
                            <Form.Check
                                type="radio"
                                label="Pessoa Jurídica"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                value="pj"
                                custom
                                onChange={this.onTipoChange.bind(this)}
                            />
                        </>
                        :
                        this.state.tipo === 'pj' ?
                        <>
                            <Form.Check
                                type="radio"
                                label="Pessoa Física"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                className="esp"
                                value="pf"
                                custom
                                onChange={this.onTipoChange.bind(this)}
                            />
                            <Form.Check
                                type="radio"
                                label="Pessoa Jurídica"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                value="pj"
                                custom
                                checked
                                onChange={this.onTipoChange.bind(this)}
                            />
                        </>
                        :
                        ''
                    }
            </Row>
                <Row className="justify-content-md-center">
                    <Col sm={6}>
                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div className="form-group">
                                <input type="text" placeholder="Nome:" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Email:" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="Telefone:" className="form-control" value={this.state.telefone} onChange={this.onTelChange.bind(this)} />
                            </div>
                            {(this.state.tipo === 'pj') 
                                ?
                            <div className="form-group">
                                <input type="text" placeholder="Empresa:" className="form-control" value={this.state.empresa} onChange={this.onEmpresa.bind(this)} />
                            </div> : ''
                            }
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Mensagem:" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                            </div>
                            <div className="wrapper">
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    onTelChange(event) {
        this.setState({telefone: event.target.value})
    }

    onEmpresa(event) {
        this.setState({empresa: event.target.value})
    }

    onTipoChange(event) {
        this.setState({tipo: event.target.value})
    }

    async handleSubmit(event) {
        event.preventDefault();
        let url = (this.state.tipo === 'pf') ?
        `https://www.sisclub.com.br/ws/ws_tradecard/sendEmail.php?apiKey=G8icTPGPQJhd0uMHRqaE&nome=${this.state.name}&email=${this.state.email}&telefone=${this.state.telefone}&mesg=${this.state.message}&tipo=pf`
        :
        `https://www.sisclub.com.br/ws/ws_tradecard/sendEmail.php?apiKey=G8icTPGPQJhd0uMHRqaE&nome=${this.state.name}&email=${this.state.email}&telefone=${this.state.telefone}&mesg=${this.state.message}&emp=${this.state.empresa}&tipo=pj`
        //console.log(url);
        let response = await fetch(url, { mode: "no-cors"})
        // let result   = await response.text()
        // if(result == 1){
            this.setState({
                name: '',
                email: '',
                message: '',
                telefone: '',
                empresa: '',
                tipo:'pf'
            })
        
    }
}

export default Contato;