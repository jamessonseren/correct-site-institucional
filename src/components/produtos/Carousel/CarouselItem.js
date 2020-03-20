import React, { Component } from 'react'
import {Col, Row, Image} from 'react-bootstrap'

export default class CarouselItem extends Component {
    render() {
        return (
            <Row className="my-slide p-5" style={{backgroundColor: '#162331'}}>
              <Col sm={4} className='justify-content-center align-items-center'>
                  <Image src={this.props.image} rounded fluid/>
              </Col>
              <Col sm={8} className='justify-content-center d-flex' style={{flexDirection: 'column'}}>
                  <h2 className='text-light text-justify font-weight-bold'>{this.props.title}</h2>
                  <p className="text-light text-justify"> {this.props.description} </p>
              </Col>
          </Row>
        )
    }
}
