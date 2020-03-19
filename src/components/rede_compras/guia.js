import React from 'react'
import {Col, Row, Container} from 'react-bootstrap'
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
            isOpen: true
        }
    }

    componentDidMount() {
        this.getContent()
    }

    toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }))

    getContent = async () => {
        let re = await fetch('https://www.sisclub.com.br/ws_tradecard/guia.php?cidade=Tiet%C3%AA&cifra=Y4g3niOIkGkLhmYrm1Yk')
        re = await re.json()
        this.setState({
            result : re
        })
        console.log(this.state.result)
    }

    listar = (itens) => {
        return (
        itens.split('§').map(place => <p> {place} </p>)
        )
    }

    render() {
        const {result, searchTerm, isOpen} = this.state
        let lista
        

        return(
            <Container  fluid={true} className='cor'>
                <Row className="justify-content-md-center">
                    <h3 className="titulo">Rede de compras:</h3>
                    
        
          
                </Row>
            
                <Row className="justify-content-md-center">
                    <Col sm={8}>
                        {result?
                            <Container className="fundoBranco">
                            
                            {result.map((item, index) =>
                                <span key={index}>
                                <Row className="justify-content-md-center" onClick={this.toggle}>
                                    {item.ramo}
                                </Row>
                                <Row>
                                    <p className="label">{item.Nome}</p>
                                </Row>
                                <Row>
                                    <p className="label">{item.Cidade} - {item.Estado}</p>
                                </Row>
                                <Row>
                                    <p>{item.Telefone}</p>
                                </Row>
                                <Item key={index} withParent={false} className="item" pose={isOpen ? 'open' : 'closed'}>
                                    {/*<p>{item.TelefoneFormatado}</p>*/}
                                    <Row>
                                        <p className="imagem">{(item.deal === 's') ? <img src="https://www.starkclub.com.br/new/img2/StarkDeal.png" width="50%"/> : ""}</p>
                                        <p className="imagem">{(item.club === 's') ? <img src="https://www.starkclub.com.br/new/img2/StarkClub.png" width="50%"/> : ""}</p>
                                        <p className="imagem">{(item.alim === 's') ? <img src="https://www.starkclub.com.br/new/img2/starkticket.png" width="50%"/> : ""}</p>
                                        <p className="imagem">{(item.refei === 's') ? <img src="https://www.starkclub.com.br/new/img2/starkticketAl.png" width="50%"/> : ""}</p>
                                        <p className="imagem">{(item.qrcode === 1) ? <img src="https://www.starkclub.com.br/new/img2/venda_qrcode_vermelho.png" width="50%"/> : ""}</p>
                                    </Row>
                                    <div className="new-line ">{
                                        this.listar(item.bandeiras)
                                    }</div>
                                    <p>{item.vantagens}</p>
                                    <p>{item.logradouro}</p>
                                    <p>{item.numero}</p>
                                    <p>{item.bairro}</p>
                                    <p>{item.cidade}</p>
                                    <p>{item.estado}</p>
                                </Item>
                                
                                </span>
                            )}
                            </Container>
                        :null}
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default GuiaComercios;