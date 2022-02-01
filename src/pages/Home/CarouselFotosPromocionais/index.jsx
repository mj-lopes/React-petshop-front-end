import { useState } from "react";
import { Skeleton } from "@mui/material";
import { CarouselImagens } from "../../../components";
import { Link } from "react-router-dom";

import Slide1_mobile from "../../../asserts/slide1-mobile.png";
import Slide2_mobile from "../../../asserts/slide2-mobile.png";
import Slide3_mobile from "../../../asserts/slide3-mobile.png";
import Slide1 from "../../../asserts/slide1.png";
import Slide2 from "../../../asserts/slide2.png";
import Slide3 from "../../../asserts/slide3.png";

function ImagemSlide(normal, mobile, url, alt) {
  const [loading, setLoading] = useState(true);

  function handleImgLoad({ target }) {
    target.style.display = "block";
    setLoading(false);
  }

  return (
    <Link to={url}>
      {loading && (
        <Skeleton height={520} animation={"wave"} variant="rectangular" />
      )}
      <picture onLoad={handleImgLoad}>
        <source
          srcSet={normal}
          media="(min-width: 600px)"
          style={{ margin: "auto", display: "none" }}
        />
        <img
          src={mobile}
          alt={alt}
          style={{ margin: "auto", display: "none" }}
        />
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
        "/produto/b66cdd17-e150-44a2-86d3-24bf52b1dcea",
        "Propaganda da Ração Purina para gatos",
      )}
      {ImagemSlide(
        Slide2,
        Slide2_mobile,
        "/produtos/acessorios_brinquedos",
        "Propaganda de novos brinquedos na loja",
      )}
      {ImagemSlide(
        Slide3,
        Slide3_mobile,
        "/produtos/remedios",
        "Propaganda de medicamentos para o tratamento de doênças",
      )}
    </CarouselImagens>
  );
};

export default CarrouselHome;
