import React from "react";
import styled from "styled-components";
import { Tabs } from "antd";

import { FullHeightDiv } from "../About";
import {
  BOARDING_POLICY_RESTRICTIONS,
  BOARDING_POLICY_TEXT
} from "../../constants";

const { TabPane } = Tabs;

const Paragraph = styled.p`
  color: white;
  white-space: pre-line;
`;

const List = styled.ol`
  color: white;
`;

const BoardingPolicy = props => (
  <FullHeightDiv>
    <Tabs type="line" tabPosition="left" tabBarStyle={{ color: "white" }}>
      <TabPane tab="Policy" key="1">
        <Paragraph>{BOARDING_POLICY_TEXT}</Paragraph>
      </TabPane>
      <TabPane tab="Restrictions" key="2">
        <List>
          {BOARDING_POLICY_RESTRICTIONS.map((point, i) => (
            <li key={i}>
              <Paragraph>{point}</Paragraph>
            </li>
          ))}
        </List>
      </TabPane>
    </Tabs>
  </FullHeightDiv>
);

export default BoardingPolicy;
