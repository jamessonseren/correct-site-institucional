import React from 'react'
import {useState} from 'react'
import {Col, Row, Container, Image, Modal, Button} from 'react-bootstrap'
import './contato.css'

class ContatoPf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            telefone: '',
            empresa: ''
        }
    }

    render() {
        return(
            <Container  fluid={true} className='cor'>
            <Row className="justify-content-md-center">
                <h3 className="titulo">Entre em contato conosco!</h3>
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

    async handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        let url = (this.state.tipo === 'fisica') ?
        `https://www.sisclub.com.br/ws/ws_tradecard/sendEmail.php?apiKey=G8icTPGPQJhd0uMHRqaE?nome=${this.state.name}&email=${this.state.email}&telefone=${this.state.telefone}&mesg=${this.state.message}&tipo=pf`
        :
        `https://www.sisclub.com.br/ws/ws_tradecard/sendEmail.php?apiKey=G8icTPGPQJhd0uMHRqaE?nome=${this.state.name}&email=${this.state.email}&telefone=${this.state.telefone}&mesg=${this.state.message}&emp=${this.state.message}&tipo=pj`

        let response = await fetch(url)
        let result   = await response.text()
    }
}

export default ContatoPf;