import React from 'react'
import {Col, Row, Container, Image} from 'react-bootstrap'
import { Button } from 'reactstrap';
import './catalogo.css'

class Catalogo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: '',
            cities: '',
        }
    }

    componentDidMount() {
        this.getShop()
    }

    getShop = async () => {
        let re = await fetch(`https://www.sisclub.com.br/ws_tradecard/tradeshop.php?cifra=HCADir2rVpBB0ROA1PxY`)
        re = await re.text()
        this.setState({
            result : re
        })
        console.log(re)
    }

    renderShop = () => {
        var data = this.state.result.split(',')
        return data.map((produto,id) => {
            var item = produto.split(';')
            if(item !== '' && item !== null && item !== undefined){
                var logotipo  = item[0]
                var descricao = item[1]
                var preco     = item[2]
                var imagem    = item[3] 
                var link      = item[4]
                var preco_inicio      = item[5]

                var url = `https://starkclub.com.br/club/uploadIMG/${imagem}`
                var logo = `https://sisclub.com.br/upload_logo/${logotipo}`
                if(link === undefined){return false}
                return (
                    <Container className="justify-content-center item">
                        <Row>
                            <h3 className="descricao">{descricao}</h3>
                        </Row>
                        <Row className="justify-content-around">
                            <Col sm={6}>
                                <a href={link}><Image src={url} fluid/></a>
                            </Col>
                            <Col className="info">
                                <Row>
                                    <p> de R$ {parseFloat(preco).toFixed(2).replace('.',',')} por R$ {parseFloat(preco_inicio).toFixed(2).replace('.',',')}</p>
                                    <Col sm={6}>
                                        <Image src={logo} fluid/>
                                    </Col>
                                </Row>
                                <Button href={link}>
                                    Comprar
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                )
            }
        })
    }

    render() {
        return(
            <div className="fundoBranco">
                <Container>
                    <Row className="justify-content-md-center">
                        <h3 className="esp">Tradeshop:</h3>
                    </Row>
                    <Row>
                        {
                            this.renderShop()
                        }
                    </Row>
                </Container>
            </div>
        )
    }

}

export default Catalogo;