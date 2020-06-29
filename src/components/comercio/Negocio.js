import React, {useEffect, useState} from 'react';
import {Row, Container, Col} from 'react-bootstrap'
import posed from 'react-pose'
import './Negocio.css'
import { MDBModal, MDBModalHeader, MDBInput, MDBAlert } from 'mdbreact';
import {IoIosClose} from 'react-icons/io'
import MuiPhoneNumber from "material-ui-phone-number";

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

export default function Negocio(){

    const [isVisible, setVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [err, setErr] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [fantasia, setFantasia] = useState('')
    const [cnpj, setCNPJ] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')



    useEffect(() => {
        setVisible(true)
    }, [])

    const formatarCNPJ = (cnpj_input) => {
      console.log(cnpj_input.length)
      if(cnpj_input.length <= 14){
        return cnpj_input.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3/\$4-\$5");
      }else{
        return cnpj
      }
    }

    const sendEmail = async () => {
      setLoading(true)
      if(email === '' || fantasia === '' || telefone === '' || cnpj === '' || message === ''){
        setErr(true)
      }else{  
        await fetch(`https://correct.com.br/B5IxozrETYlXSNXj81PvDtFjVb531fVl55hNEDLK/sendEmailComercio.php?fantasia=${fantasia}&email=${email}&telefone=${telefone}&cnpj=${cnpj}&message=${message}&apiKey=${apiKey}`, {mode: 'no-cors'})
        setFantasia('')
        setCNPJ('')
        setTelefone('')
        setEmail('')
        setMessage('')
        setErr(false)
        setSuccess(true)
      }
      setLoading(false)
    }

    return(
        <Container fluid={true} className='p-0 m-0'  style={{overflow: 'hidden'}}>
            <MDBModal isOpen={modalVisible} toggle={() => {setModalVisible(false); setSuccess(false); setErr(false)}}>
              <Row className='justify-content-around align-items-center m-0'>
                <MDBModalHeader className='justify-content-center no-border' > Seja um Parceiro Correct! </MDBModalHeader>
                <IoIosClose color='black' style={{cursor: 'pointer'}} onClick={() => {setModalVisible(false); setSuccess(false); setErr(false)} } />
              </Row>
              <Row className='align-items-center justify-content-center'>
                  <Col sm={12} className='text-center font-weight-bold justify-content-center d-flex'>
                    <h5>Preencha essas informações para se tornar um Parceiro</h5>
                  </Col>
                  <MDBInput label="Fantasia" className='input' required value={fantasia} onChange={(e) => setFantasia(e.target.value) } />
                  <MDBInput label="E-mail" className='input' type='email' required value={email} onChange={(e) => setEmail(e.target.value) } />
                  <MDBInput label="CNPJ" className='input' required value={cnpj} style={{paddingTop: 0}} maxlenght={17} onChange={(e) => setCNPJ(formatarCNPJ(e.target.value)) } />
                  <MuiPhoneNumber
                    name="phone"
                    label="Telefone"
                    data-cy="user-phone"
                    defaultCountry={"br"}
                    className='input-tel'
                    value={telefone}
                    onChange={value => setTelefone(value) }
                  />          
                  <MDBInput className='input' required type="textarea" label="Mensagem" value={message} onChange={(e) => setMessage(e.target.value)} />
                  <Col sm={12} className='text-center font-weight-bold d-flex'>
                    <button onClick={() => sendEmail()} target='_blank' style={{color: 'white', width: '100%', marginLeft: '2rem', marginRight: '2rem'}} className=' mt-3 mb-3 btn-sm btn-club text-center button_responsive_comercio' >
                      {loading ? 
                        <div className="spinner-border "></div>
                      : 
                        'Enviar!'
                      }
                    </button>
                  </Col>
                  {err && <MDBAlert color='primary' className='mt-3'> Preencha todos os campos </MDBAlert> }
                  {success && <MDBAlert color='success' className='mt-3'> Mensagem enviada com sucesso! </MDBAlert> }
              </Row>          
            </MDBModal>
            <Row className='d-flex justify-content-around p-5' style={{height: '70vh'}} >
                <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center d-flex col-lg-12'>
                  <button onClick={() => setModalVisible(true)} target='_blank' style={{color: 'white'}} className='btn-sm btn-club text-center button_responsive_comercio' >Clique aqui para se tornar um parceiro!</button>
                </Box>
                <Box pose={isVisible ? 'visible' : 'hidden'} className='align-items-center justify-content-center d-flex col-lg-4'>
                    <img src={require('../../assets/app_desktop.png')} className="card_image" alt='Correct Club'/>
                </Box>
                <Box pose={isVisible ? 'visible' : 'hidden'} className='d-flex justify-content-center col-lg-4' style={{flexDirection: 'column'}}>
                    <h2 className=' font-weight-bold title_comercio'>Parceiros</h2>
                    <p className="description_subcategoria_comercio ">
                        Para os Parceiros que compõem a Rede de Compras com Lojas Físicas e/ou Virtuais, a <strong><i>Correct</i></strong>, disponibiliza um sistema para administração e controle financeiro, para melhor controle das operações comerciais, recebimentos de vendas, transferências, pagamentos de contas e outras.
                    </p>
                    <a rel="noopener noreferrer" href='http://adm.correct.com.br' target='_blank' className='btn-sm btn-club mt-2 text-center button_responsive_comercio' >Clique para acessar a Área Administrativa</a>
                </Box>
            </Row> 
            <Row className='d-flex justify-content-around p-5' style={{backgroundColor: 'rgba(0,0,0,0.1)',height: '115vh'}} >
                <Box pose={isVisible ? 'visible' : 'hidden'} className='d-flex justify-content-center row col-lg-8' style={{flexDirection: 'column'}}>
                    <h2 className=' font-weight-bold title_comercio'>Outras vantagens para os nossos Parceiros</h2>
                    <ul style={{listStyle: 'circle'}} className=' list_responsive_comercio'>
                      <li>
                        Ganha um <strong>Clube de Vantagens de Presente</strong>, podendo utilizar vários recursos sem taxas e juros, através do <strong>APPCorrect;</strong>
                      </li>
                      <li>
                        Fidelização dos Usuários <strong>Correct;</strong>
                      </li>
                      <li>
                        <strong>Divulgação direta aos Usuários</strong>, através de nossas mídias:
                        <ul style={{listStyle: "disc"}}>
                          <li>Murais informativos no Empregador (cartões de benefícios);</li>
                          <li>Rede de Compras (site, APP, Rede Sociais);</li>
                          <li>Blog;</li>
                          <li>Adesivos de identificação;</li>
                          <li>Correct Shop (comunicação direta com o Usuário) sem custo;</li>
                          <li>Eventos esporádicos para os Usuários;</li>
                        </ul>
                      </li>
                      <li>
                        Facilidade de <strong>recebimento através do sistema de repasse</strong> (depósitos e transferências diretas na conta Correct);
                      </li>
                      <li>
                        Possibilidade de escolhas da <strong>tecnologia para recebimento das vendas</strong>, tais como:
                        <ul style={{listStyle: "disc"}}>
                          <li>Siscorrect;</li>
                          <li>QR Code e TOKEN Offline;</li>
                          <li>Celular;</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Aumento das vendas</strong> pela aceitação de <strong>Krats como forma de recebimento e da Correct Wallet</strong> (um único sistema de recebimento para vários cartões);
                      </li>
                      <li>
                        Possibilidade de adesão aos produtos <strong>Fidelidade e Delivery;</strong>
                      </li>
                      <li>Correct Shop, que é uma <strong>ferramenta de marketing, para divulgação de ofertas, promoções, realização de sorteios e descontos especiais aos Usuários</strong>. É a permissão que a <strong>Correct dá aos seus Parceiros, para a comunicação direta com os Usuários</strong>.</li>
                      <li>Correct Business - Cartão criado para os Parceiros, que possuem "créditos a receber", originados pelas vendas com Cartões de Benefícios ou de Créditos, através do nosso APPCorrect. Sem taxas de antecipação de crédito e ainda ganha Krats (Cashback) na utilização.</li>
                    </ul>
                    <a rel="noopener noreferrer" href='http://correct.com.br/modulo_vendas/correct-setup.exe' target='_blank' className='btn-sm btn-club mt-2 text-center button_responsive_comercio' >Baixe o módulo de vendas!</a>
                </Box>
            </Row>
        </Container>
    )
}