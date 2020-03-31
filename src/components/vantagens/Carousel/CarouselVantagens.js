import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselItem from './CarouselItem'

export default function CarouselVantagens() {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      // autoPlay
      useKeyboardArrows
      className="presentation-mode"
    >
      <CarouselItem 
        title='TradeWallet'
        description="
          Carteira Virtual que carrega todos os cartões (benefícios e crédito). Tem a opção de escolha do cartão para efetuar pagamentos. 
          Utiliza único sistema “APP TRADECLUB” para pagamentos e controle, utilizando
          senha única, válida para todos os cartões. Conta também, com arquivos de agenda e cadastros necessários para o dia a dia.
          Todas informações da carteira são criptografadas, por questões de segurança.
        "
        image={require('../../../assets/wallet.png')}
      />
      <CarouselItem 
        title='Fidelidade'
        description="
          Estabelecimentos ganham com a transformação dos Clientes em Fregueses. Conseguem obter informações importantes para o 
          atendimento personalizado. E consequentemente, através da tecnologia aplicada, conseguem redução de custos e melhorias
          na qualificação de mão de obra, bem como, na sofisticação do atendimento aos seus Fidelizados.
        "
        image={require('../../../assets/cartoes/card_fidelidade.png')}
      />
      <CarouselItem 
        title='Delivery'
        description="Além das vantagens que o Fidelidade oferece, o Delivery permite a comodidade de um sistema simples, rápido e seguro, na escolha de seus pedidos e forma de pagamento, no conforto de sua casa, escritório ou outros locais."
        image={require('../../../assets/cartoes/card_delivery.png')}
      />
    </Carousel> 
  );
}
