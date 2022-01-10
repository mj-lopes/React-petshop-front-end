import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/material";
import seta from "../../asserts/seta.svg";
import slide from "../../asserts/slide.png";

const ArrowNext = styled("div")({
  position: "absolute",
  top: "calc(50% - 22px)",

  display: "block",
  backgroundImage: `url(${seta})`,
  backgroundPosition: "50% 50%",
  backgroundRepeat: "no-repeat",
  opacity: ".6",
  width: "21px",
  height: "38px",
  zIndex: "100",
  right: "10px",

  cursor: "pointer",
});

const ArrowPrev = styled(ArrowNext)({
  transform: "rotate(180deg)",
  left: "10px",
});

const TestDiv = styled("div")({
  // width: "100%",
  // height: "530px",
  // backgroundImage: `url(${slide})`,
  // backgroundPosition: "50% 50%",
  // backgroundRepeat: "no-repeat",
});

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  console.log(className, style);
  return <ArrowNext onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return <ArrowPrev onClick={onClick} />;
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider {...settings}>
          <TestDiv>
            <img src={slide} alt="asd"></img>
          </TestDiv>
          <TestDiv>
            <h3>2</h3>
          </TestDiv>
          <TestDiv>
            <h3>3</h3>
          </TestDiv>
          <TestDiv>
            <h3>4</h3>
          </TestDiv>
          <TestDiv>
            <h3>5</h3>
          </TestDiv>
          <TestDiv>
            <h3>6</h3>
          </TestDiv>
        </Slider>
      </div>
    );
  }
}
