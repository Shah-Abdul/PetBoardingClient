import React from "react";
import styled from "styled-components";

import { FullHeightDiv } from "../About";

import { EMAIL_ID, PHONE_NUMBER } from "../../constants";

const Heading = styled.h1`
  color: white;
  font-size: 3rem;
  text-align: center;
`;

const Text = styled.div`
  color: white;
  text-align: center;
`;

const ContactUs = props => (
  <FullHeightDiv>
    <Heading>We're here. Say Hi.</Heading>
    <Text>{PHONE_NUMBER}</Text>
    <br />
    <Text>{EMAIL_ID}</Text>
  </FullHeightDiv>
);

export default ContactUs;
