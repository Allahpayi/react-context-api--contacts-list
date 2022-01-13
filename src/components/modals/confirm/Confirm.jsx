import React from "react";
import PropTypes from "prop-types";
import { Button, Modal } from "antd";
import { Exclamation } from "../../../assets/icons";

const { confirm } = Modal;

const Confirm = ({
  children,
  title,
  icon,
  okText,
  okType,
  cancelText,
  onOk,
}) => {
  const showConfirm = () => {
    confirm({
      title,
      icon: icon ? icon : <Exclamation />,
      okText: okText ? okText : "Yes",
      okType: okType ? okType : "danger",
      cancelText: cancelText ? cancelText : "No",
      onOk() {
        onOk();
      },
    });
  };
  return (
    <Button onClick={showConfirm} type="link">
      {children}
    </Button>
  );
};
Confirm.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.element,
  okText: PropTypes.string,
  okType: PropTypes.string,
  cancelText: PropTypes.string,
  onOk: PropTypes.func,
};

export default Confirm;
