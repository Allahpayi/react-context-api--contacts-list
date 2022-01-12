import React from "react";
import { Button } from "antd";
import PropTypes from "prop-types";

const Modal = ({ children, icon, onClick }) => {
  return (
    <Button onClick={onClick} icon={icon} type="link">
      {children}
    </Button>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};

export default Modal;
