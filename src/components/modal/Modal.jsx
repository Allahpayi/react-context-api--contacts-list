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

// import React from "react";
// import { Modal } from "antd";
// import PropTypes from "prop-types";

// const CustomModal = ({
//   children,
//   visible,
//   title,
//   okText,
//   okType,
//   cancelText,
//   icon,
//   onOk,
//   onCancel,
// }) => {
//   return (
//     <Modal
//       visible={visible}
//       okText={okText}
//       okType={okType}
//       cancelText={cancelText}
//       title={title}
//       onOk={onOk}
//       onCancel={onCancel}
//       closeIcon={icon}
//     >
//       {children}
//     </Modal>
//   );
// };

// CustomModal.propTypes = {
//   children: PropTypes.node,
//   title: PropTypes.string,
//   okText: PropTypes.string,
//   okType: PropTypes.string,
//   cancelText: PropTypes.string,
//   icon: PropTypes.element,
//   onOk: PropTypes.func,
//   visible: PropTypes.bool,
//   onCancel: PropTypes.func,
// };

// export default CustomModal;
