import { CarouselImagens } from "../../../components";
import { Link } from "react-router-dom";

import Slide1_mobile from "../../../asserts/slide1-mobile.png";
import Slide2_mobile from "../../../asserts/slide2-mobile.png";
import Slide3_mobile from "../../../asserts/slide3-mobile.png";
import Slide1 from "../../../asserts/slide1.png";
import Slide2 from "../../../asserts/slide2.png";
import Slide3 from "../../../asserts/slide3.png";

function ImagemSlide(normal, mobile, url, alt) {
  return (
    <Link to={url}>
      <picture>
        <source srcSet={normal} media="(min-width: 600px)" />
        <img src={mobile} alt={alt} />
      </picture>
    </Link>
  );
}

const CarrouselHome = () => {
  return (
    <CarouselImagens>
      {ImagemSlide(
        Slide1,
        Slide1_mobile,
        "/",
        "Propaganda da Ração Purina para gatos",
      )}
      {ImagemSlide(
        Slide2,
        Slide2_mobile,
        "/",
        "Propaganda de novos brinquedos na loja",
      )}
      {ImagemSlide(
        Slide3,
        Slide3_mobile,
        "/",
        "Propaganda de medicamentos para o tratamento de doênças",
      )}
    </CarouselImagens>
  );
};

export default CarrouselHome;
