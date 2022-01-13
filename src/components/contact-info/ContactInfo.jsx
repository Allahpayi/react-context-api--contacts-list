import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Avatar } from "antd";
import { Space, Typography } from "antd";
import { Info } from "../../assets/icons";
import CustomModal from "../modals/modal/Modal";
import { capitalize } from "../../utils/Capitalize";
const { Text } = Typography;
const ContactInfo = ({ contact }) => {
  const [visible, setVisible] = useState(false);
  const { name, lastName, fatherName, gender, innovators, profession } =
    contact;
  return (
    <>
      <CustomModal
        icon={<Info />}
        visible={visible}
        title="Contact Info"
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        onClick={() => setVisible(true)}
      >
        <Card
          actions={[
            <Space direction="vertical" key={fatherName}>
              <Text strong>Father Name</Text>
              <Text>{capitalize(fatherName)}</Text>
            </Space>,
            <Space direction="vertical" key={gender}>
              <Text strong>Gender</Text>
              <Text>{capitalize(gender)}</Text>
            </Space>,
            <Space direction="vertical" key={innovators}>
              <Text strong>Innovators</Text>
              <Text>{innovators ? "Yes" : "No"}</Text>
            </Space>,
          ]}
        >
          <Card.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={capitalize(name) + " " + capitalize(lastName)}
            description={capitalize(profession)}
          />
        </Card>
      </CustomModal>
    </>
  );
};
ContactInfo.propTypes = {
  contact: PropTypes.object,
};
export default ContactInfo;
