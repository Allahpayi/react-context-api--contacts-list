import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import Content from "./content/Content";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const SiteLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
};
SiteLayout.propTypes = {
  children: PropTypes.node,
};
export default SiteLayout;
