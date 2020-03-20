import React, {useState, useEffect} from 'react';
import {Row, Container} from 'react-bootstrap'
import CarouselProdutos  from './Carousel/CarouselProdutos'
import VantagensProdutos from './VantagensProdutos'
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
})

export default function Produtos(){
    const [isVisible, setVisible] = useState(false)
    
    useEffect(() => {
        setVisible(true)
    }, []) 

    return(
        <Container fluid>
            <Box className='row' pose={isVisible ? 'visible' : 'hidden'}>
                <CarouselProdutos/>
            </Box>
            <Box className='row' pose={isVisible ? 'visible' : 'hidden'}>
                <VantagensProdutos />
            </Box>
        </Container>
    )
}