import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";

const Content = ({ children }) => {
  return (
    <Layout.Content
      className="site-layout"
      style={{ padding: "24px 50px", marginTop: 64 }}
    >
      {children}
    </Layout.Content>
  );
};

Content.propTypes = {
  children: PropTypes.node,
};
export default Content;
