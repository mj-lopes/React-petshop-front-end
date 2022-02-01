import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ArrowNext, ArrowPrev } from "./style";

function SampleNextArrow({ onClick }) {
  return <ArrowNext onClick={onClick} />;
}

function SamplePrevArrow({ onClick }) {
  return <ArrowPrev onClick={onClick} />;
}

export default class CarouselImagens extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplay: true,
      autoplaySpeed: 5000,
    };
    return (
      <div>
        <Slider {...settings}>{this.props.children}</Slider>
      </div>
    );
  }
}
