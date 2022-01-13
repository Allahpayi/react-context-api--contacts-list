import React from "react";
import { Modal, Button } from "antd";
import PropTypes from "prop-types";

const CustomModal = ({
  children,
  icon,
  visible,
  title,
  onOk,
  onCancel,
  onClick,
}) => {
  return (
    <>
      <Button type="link" icon={icon} onClick={onClick} />
      <Modal
        title={title}
        centered
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
      >
        {children}
      </Modal>
    </>
  );
};
CustomModal.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  icon: PropTypes.element,
  visible: PropTypes.bool,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  onClick: PropTypes.func,
};

export default CustomModal;
