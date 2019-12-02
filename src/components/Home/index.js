import React from "react";
import styled from "styled-components";

import { FullHeightDiv } from "../About";

export const HomePageText = styled.h1`
  color: white;
  font-weight: 700;
  text-shadow: 1px 1px black;
  text-align: center;
`;

const homePageContentOne = `When you want the best possible care and attention for your pet, \
there is nothing like a home environment.`;

const homePageContentTwo = `Sha's Boarding is a home based pet boarding service.`;

const Home = props => (
  <div>
    <HomePageText>{homePageContentOne}</HomePageText>
    <br />
    <HomePageText>{homePageContentTwo}</HomePageText>
  </div>
);

export default Home;
