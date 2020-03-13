import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import trade from "../../assets/tradecard_logo_white.png";
import adiantamento from "../../assets/cartoes/trade_adiantamento.png";
import alimentacao from "../../assets/cartoes/trade_alimentacao.png";
import tradeclub from "../../assets/cartoes/tradeclub.png";
import tradecard from "../../assets/cartoes/tradecard.png";
import slide1 from "../../assets/slides/slide_1.png";
import slide2 from "../../assets/slides/slide_2.png"
import slide3 from "../../assets/slides/slide_3.png"
import slide4 from "../../assets/slides/slide_4.png"
import slide5 from "../../assets/slides/slide_5.png"
import slide6 from "../../assets/slides/slide_6.png"
import slide7 from "../../assets/slides/slide_7.png"
import slide8 from "../../assets/slides/slide_8.png"

export default function CarouselComponent() {
  return (
    <div>
      <Carousel
        showArrows={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showStatus={false}
      >
        <div className="my-slide content" >
          <img src={slide1} />
        </div>
        <div>
          <img src={slide2} />
        </div>
        <div>
          <img src={slide3} />
        </div>
        <div>
          <img src={slide4} />
        </div>
        <div>
          <img src={slide5} />
        </div>
        <div>
          <img src={slide6} />
        </div>
        <div>
          <img src={slide7} />
        </div>
        <div>
          <img src={slide8} />
        </div>
      </Carousel>
    </div>
  );
}
