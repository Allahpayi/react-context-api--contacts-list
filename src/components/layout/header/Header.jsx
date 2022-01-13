import { Layout } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <Layout.Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <Link to="/" className={classes.logo}>
        Contacts
      </Link>
    </Layout.Header>
  );
};

export default Header;
