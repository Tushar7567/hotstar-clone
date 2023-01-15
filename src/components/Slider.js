import { ArrowForwardIos , ArrowBackIos } from "@mui/icons-material";
import React, { useState } from "react";
// import styled from "@emotion/styled";

const Slider = () => {
//   const images = [
//     "images/slider-badag.jpg",
//     "images/slider-scale.jpg",
//     "images/slider-badging.jpg",
//   ];
  // const delay = 2500;

  const [index, setIndex] = useState(0);
//   const timeoutVar = useRef(null);

//   const resetTimeout = () => {
//     if (timeoutVar.current) {
//       clearTimeout(timeoutVar.current);
//     }
//   };

  const handleArrowClick = (dir) => {
    if (dir === "left") {
      clearTimeout(index);
      setIndex(index > 0 ? index - 1 : 2);
    } else {
      clearTimeout(index);
      setIndex(index < 2 ? index + 1 : 0);

    }
  };

  setTimeout(() => {
    setIndex((prevIndex) => prevIndex === 2 ? 0 : prevIndex+1 );
  }, 4000);

  // useEffect(() => {
  //   style={transform: `translateX(${index * -100}vw)`}
  // }, [index]);

  return (
    <div className="container-3">
      {/* <img src="img/luke-peterson-lUMj2Zv5HUE-unsplash.jpg" width="100px" height="100px" alt="" /> */}
      <div
        className="arrow arrow-pos-left "
        onClick={() => handleArrowClick('left')}
      >
        <ArrowBackIos  />
      </div>
      <div
        className="wrapper-2"
        style={index === 0 ? {transform: `translateX(${0}vw)`}  : {transform: `translateX(${index * -100}vw)`} }
      >
        <div className="slide img-1"></div>
        <div className="slide img-2"></div>
        <div className="slide img-3"></div>


      </div>
      <div
        className="arrow arrow-pos-right"
        onClick={() => handleArrowClick('right')}
      >
        <ArrowForwardIos />
      </div>
    </div>
  );
};

export default Slider;

// const Container = styled.div`
//   margin: 0 auto;
//   overflow: hidden;
//   width: 100vw;
// `;

// const SubContainerImage = styled.div`
//   width: 100vw;
//   display: flex;
//   white-space: nowrap;
//   transition: ease 1s;
//   // transform: translateX(100vw);
// `;

// const Image = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: url("${(props) => props.item}") center center/ cover;
//   background-repeat: no-repeat;
// `;
