import React from "react";
import { List, Typography } from "antd";
import styled from "styled-components";

import { ABOUT_PAGE_LINES, ABOUT_PAGE_NOTE } from "../../constants";

const { Text } = Typography;

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
      dataSource={ABOUT_PAGE_LINES}
      bordered
      renderItem={item => (
        <List.Item>
          <AboutText>{item}</AboutText>
        </List.Item>
      )}
    />
    <Note>
      <Text strong type="warning">
        {ABOUT_PAGE_NOTE}
      </Text>
    </Note>
  </FullHeightDiv>
);

export default About;
