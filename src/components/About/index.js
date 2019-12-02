import React from "react";
import { List, Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;
const aboutLines = [
  "We are a homely Boarding Service which cares for your pets as our family.",
  "We have started the boarding services at home so that we personally take care of our guests.",
  "You can now plan your vacations, as we will take care of your pets like ours.",
  "We entertain any pets like pigeons, rabbits, guineas and hamsters. All kinds of birds are welcome."
];

const noteLine = "Note: We do not undertake dog boarding as of now.";

export const FullHeightDiv = styled.div`
  height: inherit;
`;

const AboutText = styled.span`
  color: white;
  font-weight: 700;
`;

const Note = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const About = props => (
  <FullHeightDiv>
    <List
      dataSource={aboutLines}
      bordered
      renderItem={item => (
        <List.Item>
          <AboutText>{item}</AboutText>
        </List.Item>
      )}
    />
    <Note>
      <Text strong type="warning">
        {noteLine}
      </Text>
    </Note>
  </FullHeightDiv>
);

export default About;
