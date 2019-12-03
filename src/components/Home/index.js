import React from "react";
import styled from "styled-components";

import { FullHeightDiv } from "../About";
import { HOME_PAGE_1, HOME_PAGE_2, HOME_PAGE_3 } from "../../constants";

export const HomePageText = styled.h1`
  color: white;
  font-weight: 700;
  text-shadow: 1px 1px black;
  text-align: center;
`;

export const HomePageH2 = styled.h4`
  color: white;
  font-weight: 400;
  text-shadow: 1px 1px black;
  text-align: center;
  white-space: pre-line;
`;

const Home = props => (
  <FullHeightDiv>
    <HomePageText>{HOME_PAGE_1}</HomePageText>
    <br />
    <HomePageText>{HOME_PAGE_2}</HomePageText>
    <br />
    <HomePageH2>{HOME_PAGE_3}</HomePageH2>
  </FullHeightDiv>
);

export default Home;
