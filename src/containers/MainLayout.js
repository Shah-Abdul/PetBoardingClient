import React, { useState, useEffect } from "react";
import styled from "styled-components";
import windowSize from "react-window-size";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon, Drawer } from "antd";

import { breakpoints, HEADER_TEXT, FOOTER_TEXT } from "../constants";
import logo from "../assets/logo.png";
import catIcon from "../assets/cat.jpg";

const { Header, Content, Footer } = Layout;

const HomePage = styled.div`
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
    url(${catIcon});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  overflow: scroll;
`;

const HeaderImage = styled.img`
  height: 4rem;
`;

const ContainerWrapper = styled.div`
  height: 100%;
`;

const HeaderText = styled.h3`
  color: #e3e3e3;
  margin: 0 1.5rem;
`;

const MobileHeader = styled.div`
  height: 10%;
  width: 100%;
  background: #001529;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 2rem;
  color: #e3e3e3;
  svg {
    width: 2rem;
    height: 2rem;
  }
`;

const MobileFooter = styled.div`
  height: 10%;
  width: 100%;
  background: #f0f2f5;
  color: rgba(0, 0, 0, 0.65);
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeButton = ({ setTab }) => (
  <Link to="/" onClick={() => setTab("0")}>
    <div className="logo">
      <HeaderImage src={logo} alt="Sha's boarding services" />
    </div>
  </Link>
);

const NavMenu = ({ tab, setTab, mode, setMobileDrawerOpen }) => (
  <Menu
    theme="dark"
    mode={mode}
    selectedKeys={[tab]}
    onClick={({ key }) => {
      setTab(key);
      if (mode === "vertical") {
        setMobileDrawerOpen(false);
      }
    }}
  >
    <Menu.Item key="1">
      <Link to="/about-us">About us</Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/boarding-policy">Boarding Policy</Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link to="/gallery">Gallery</Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link to="/contact-us">Contact Us</Link>
    </Menu.Item>
  </Menu>
);

const MainLayout = props => {
  const { windowWidth } = props;
  const [tab, setTab] = useState("0");
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(windowWidth <= breakpoints.md);

  useEffect(() => {
    setIsMobile(windowWidth <= breakpoints.md);
  }, [windowWidth]);

  return (
    <ContainerWrapper>
      <Layout className="layout" style={{ height: "100%" }}>
        {isMobile ? (
          <MobileHeader>
            {mobileDrawerOpen ? (
              <Drawer
                title="Welcome!"
                placement="left"
                closable={false}
                onClose={() => setMobileDrawerOpen(false)}
                visible={true}
                headerStyle={{ background: "#001529" }}
                drawerStyle={{ background: "#001529" }}
                bodyStyle={{ padding: "0" }}
              >
                <NavMenu
                  tab={tab}
                  setTab={setTab}
                  mode="vertical"
                  setMobileDrawerOpen={setMobileDrawerOpen}
                />
              </Drawer>
            ) : (
              <Icon
                type="menu-unfold"
                onClick={() => setMobileDrawerOpen(true)}
              />
            )}
            <HomeButton setTab={setTab} />
            <span>{HEADER_TEXT}</span>
          </MobileHeader>
        ) : (
          <Header
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <HomeButton setTab={setTab} />
            <HeaderText>{HEADER_TEXT}</HeaderText>
            <NavMenu tab={tab} setTab={setTab} mode="horizontal" />
          </Header>
        )}
        <Content style={{ height: "80%" }}>
          <HomePage isMobile={isMobile}>{props.children}</HomePage>
        </Content>
        {isMobile ? (
          <MobileFooter>{FOOTER_TEXT}</MobileFooter>
        ) : (
          <Footer
            style={{
              textAlign: "center"
            }}
          >
            {FOOTER_TEXT}
          </Footer>
        )}
      </Layout>
    </ContainerWrapper>
  );
};

export default windowSize(MainLayout);
