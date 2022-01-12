import React, { useContext, useState } from "react";
import {
  Form,
  Input,
  Select,
  Radio,
  Button,
  Row,
  Divider,
  Col,
  Checkbox,
  Space,
} from "antd";
import ContactContext from "../../../context/contact/contact-context";
import { useToasts } from "react-toast-notifications";
import { useNavigate, useParams } from "react-router-dom";

const { Option } = Select;
const EditContact = () => {
  const ctx = useContext(ContactContext);
  const navigate = useNavigate();
  const params = useParams();
  const selectedContact = ctx.contacts.find(
    (contact) => contact.key === params.id
  );
  const [name, setName] = useState(selectedContact.name);
  const [lastName, setLastName] = useState(selectedContact.lastName);
  const [fatherName, setFatherName] = useState(selectedContact.fatherName);
  const [profession, setProfession] = useState(selectedContact.profession);
  const [gender, setGender] = useState(selectedContact.gender);
  const [innovators, setInnovators] = useState(selectedContact.innovators);
  const { addToast } = useToasts();

  const contact = {
    key: selectedContact.key,
    name,
    lastName,
    fatherName,
    profession,
    gender,
    innovators,
  };

  const onFinish = (response) => {
    if (
      response.name !== contact.name ||
      response.lastName !== contact.lastName ||
      response.fatherName !== contact.fatherName ||
      response.profession !== contact.profession ||
      response.gender !== contact.gender ||
      response.innovators !== contact.innovators
    ) {
      addToast("The contact updated.", {
        appearance: "success",
        autoDismiss: true,
      });
      ctx.updateContact(contact);
      setTimeout(() => navigate("/", { replace: true }), 100);
    } else {
      addToast("No change!", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    errorInfo.errorFields.map((field) => {
      addToast(field.errors[0], {
        appearance: "error",
        autoDismiss: true,
      });
    });
  };
  return (
    <>
      <Divider orientation="left">Add Contact</Divider>
      <Row justify="center">
        <Col span={8}>
          <Form
            layout="vertical"
            name="addContact"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              name,
              lastName,
              fatherName,
              profession,
              gender,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input onChange={(e) => setName(e.target.value)} />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Please input your last name!",
                },
              ]}
            >
              <Input onChange={(e) => setLastName(e.target.value)} />
            </Form.Item>
            <Form.Item
              label="Father Name"
              name="fatherName"
              rules={[
                {
                  required: true,
                  message: "Please input your father name!",
                },
              ]}
            >
              <Input onChange={(e) => setFatherName(e.target.value)} />
            </Form.Item>
            <Form.Item
              label="Profession"
              name="profession"
              rules={[
                {
                  required: true,
                  message: "Please input your profession!",
                },
              ]}
            >
              <Select
                onChange={(value) => {
                  setProfession(value);
                }}
              >
                <Option value="Frontend Developer">Frontend Developer</Option>
                <Option value="Backend Developer">Backend Developer</Option>
                <Option value="UI/UX Developer">UI/UX Developer</Option>
                <Option value="Android Developer">Android Developer</Option>
              </Select>
            </Form.Item>
            <Space>
              <Form.Item
                name="gender"
                rules={[
                  {
                    required: true,
                    message: "Please input your gender!",
                  },
                ]}
              >
                <Radio.Group onChange={(e) => setGender(e.target.value)}>
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item name="innovators">
                <Checkbox
                  checked={innovators}
                  onChange={(e) => setInnovators(e.target.checked)}
                >
                  Want to stay up to date?
                </Checkbox>
              </Form.Item>
            </Space>
            <Form.Item
              wrapperCol={{
                offset: 10,
                span: 24,
              }}
            >
              <Button type="primary" htmlType="submit">
                Update Contact
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default EditContact;
