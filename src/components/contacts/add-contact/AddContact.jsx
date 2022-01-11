import React, { useContext, useState } from "react";
import { Form, Input, Select, Radio, Button, Row, Divider, Col } from "antd";
import ContactContext from "../../../context/contact/contact-context";
import { useToasts } from "react-toast-notifications";
import { useNavigate } from "react-router-dom";
import {} from "antd";

const { Option } = Select;
const AddContact = () => {
  const ctx = useContext(ContactContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [profession, setProfession] = useState("Frontend Developer");
  const [gender, setGender] = useState("");
  const { addToast } = useToasts();

  const contact = {
    key: Math.random(),
    name,
    lastName,
    fatherName,
    profession,
    gender,
  };

  const onFinish = (contact) => {
    addToast(contact.name + " added to the contacts", {
      appearance: "success",
      autoDismiss: true,
    });
    setTimeout(() => navigate("/", { replace: true }), 100);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const createContactHandler = () => {
    console.log(contact);
    ctx.addContact(contact);
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
              profession,
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
            <Form.Item label="Gender" name="gender">
              <Radio.Group onChange={(e) => setGender(e.target.value)}>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 10,
                span: 24,
              }}
            >
              <Button
                onClick={createContactHandler}
                type="primary"
                htmlType="submit"
              >
                Add Contact
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default AddContact;