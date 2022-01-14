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
import ContactContext from "../../context/contact/contact-context";
import { useToasts } from "react-toast-notifications";
import { useNavigate, useParams } from "react-router-dom";
import uuid from "react-uuid";

const { Option } = Select;

const CrudContact = () => {
  const ctx = useContext(ContactContext);
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const selectedContact = ctx.contacts.find(
    (contact) => contact.key === params.id
  );

  const [name, setName] = useState(id && selectedContact.name);
  const [lastName, setLastName] = useState(id && selectedContact.lastName);
  const [fatherName, setFatherName] = useState(
    id && selectedContact.fatherName
  );
  const [profession, setProfession] = useState(
    id ? selectedContact.profession : "Frontend Developer"
  );
  const [gender, setGender] = useState(id && selectedContact.gender);
  const [innovators, setInnovators] = useState(
    id && selectedContact.innovators
  );
  const { addToast } = useToasts();

  const contact = {
    key: id ? selectedContact.key : uuid(),
    name,
    lastName,
    fatherName,
    profession,
    gender,
    innovators,
  };

  const professions = [
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Developer",
    "Android Developer",
  ];

  const onFinish = () => {
    if (id) {
      addToast("The contact updated.", {
        appearance: "success",
        autoDismiss: true,
      });
      ctx.updateContact(contact);
      setTimeout(() => navigate("/", { replace: true }), 100);
    } else {
      addToast(contact.name + " added to the contacts", {
        appearance: "success",
        autoDismiss: true,
      });
      ctx.addContact(contact);
      setTimeout(() => navigate("/", { replace: true }), 100);
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
      <Divider orientation="left">
        {id ? "Update Contact: " + selectedContact.name : "Add Contact"}
      </Divider>
      <Row justify="center">
        <Col md={{ span: 16 }} lg={{ span: 10 }} span={24}>
          <Form
            layout="vertical"
            name="crudContactForm"
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
                {professions.map((profession, index) => (
                  <Option key={index} value={profession}>
                    {profession}
                  </Option>
                ))}
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
                {id ? "Update Contact" : "Add Contact"}
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default CrudContact;
