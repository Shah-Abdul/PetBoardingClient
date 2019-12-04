import React from "react";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";

import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import img9 from "../../assets/9.jpg";
import img10 from "../../assets/10.jpg";
import thumb1 from "../../assets/thumb1.jpg";
import thumb2 from "../../assets/thumb2.jpg";
import thumb3 from "../../assets/thumb3.jpg";
import thumb4 from "../../assets/thumb4.jpg";
import thumb5 from "../../assets/thumb5.jpg";
import thumb6 from "../../assets/thumb6.jpg";
import thumb7 from "../../assets/thumb7.jpg";
import thumb8 from "../../assets/thumb8.jpg";
import thumb9 from "../../assets/thumb9.jpg";
import thumb10 from "../../assets/thumb10.jpg";

const images = [
  {
    original: img1,
    thumbnail: thumb1,
    originalClass: "imgClass"
  },
  {
    original: img2,
    thumbnail: thumb2
  },
  {
    original: img3,
    thumbnail: thumb3
  },
  {
    original: img4,
    thumbnail: thumb4
  },
  {
    original: img5,
    thumbnail: thumb5
  },
  {
    original: img6,
    thumbnail: thumb6
  },
  {
    original: img7,
    thumbnail: thumb7
  },
  {
    original: img8,
    thumbnail: thumb8
  },
  {
    original: img9,
    thumbnail: thumb9
  },
  {
    original: img10,
    thumbnail: thumb10
  }
];

const FitAvailableSpaceContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Gallery = () => (
  <FitAvailableSpaceContainer>
    <ImageGallery items={images} lazyLoad={true} />
  </FitAvailableSpaceContainer>
);

export default Gallery;
