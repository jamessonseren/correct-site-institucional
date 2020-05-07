import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselItem from './CarouselItem'

export default function CarouselProdutos() {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      useKeyboardArrows
      className="presentation-mode"
    >
      <CarouselItem 
        title='Adiantamento salárial'
        description="Com limite pré-definido, que possibilita atender as necessidades de compras no dia a dia do Usuário (Colaborador/Servidor), com desconto em folha de pagamento. Ganho de Krats (Cashback)."
        image={require('../../../assets/cartoes/card_adiantamento.png')}
      />
      <CarouselItem 
        title='Convênio'
        description="Com limite pré-definido, que possibilita atender as necessidades de compras do dia a dia do Usuário (Colaborador/Servidor), em segmento(s) específico(s), determinado(s) pela Gestão, com desconto em folha de pagamento. Ex: Farmácias, Oficinas de Motos ou qualquer outro segmento, podendo ainda ser misto ou aleatório. Ganho de Krats (Cashback)."
        image={require('../../../assets/cartoes/card_convenio.png')}
      />
      <CarouselItem 
        title="Alimentação"
        description="Com benefício específico para aquisição de gêneros alimentícios. Pode ser utilizado em supermercados, mercearias, açougues, padarias e similares. Facilitando as rotinas das Empresa/Órgão Público e substituindo as cestas básicas. Ganho de Krats (Cashback)."
        image={require('../../../assets/cartoes/card_alimentacao.png')}
      />
      <CarouselItem 
        title="Refeição"
        description="Com benefício específico para aquisição de refeições prontas. Pode ser utilizado em restaurantes, padarias, lanchonetes e similares. Facilitando a rotina da Empresa/Órgão Público e dando mais qualidade de vida ao seu Colaborador/Servidor. Ganho de Krats (Cashback)."
        image={require('../../../assets/cartoes/card_refeicao.png')}
      />
    </Carousel> 
  );
}
