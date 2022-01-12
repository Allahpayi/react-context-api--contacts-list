import React, { useContext } from "react";
import { Table, Card, Avatar, Space, Button, Modal } from "antd";
import ContactContext from "../../context/contact/contact-context";
import { Link } from "react-router-dom";
import { Info, Delete, Edit, Add, Exclamation } from "../../assets/icons/index";
import CustomModal from "../modal/Modal";
import { capitalize } from "../../utils/Capitalize";

const { confirm, info } = Modal;

const ContactsList = () => {
  const ctx = useContext(ContactContext);
  let dataSource = ctx.contacts;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Father Name",
      dataIndex: "fatherName",
      key: "fatherName",
    },
    {
      title: "Profession",
      dataIndex: "profession",
      key: "profession",
    },
    {
      title: "Action",
      key: "action",
      render: (text, contact) => (
        <Space size="middle">
          <CustomModal onClick={() => showInfoModal(contact)} icon={<Info />} />
          <Link to={"/contacts/edit/" + contact.key}>
            <Edit />
          </Link>
          <CustomModal
            onClick={() => showDeleteModal(contact)}
            icon={<Delete />}
          />
        </Space>
      ),
    },
  ];

  const showDeleteModal = (contact) => {
    const { key, name, lastName } = contact;
    confirm({
      title: "Are you sure delete this contact?",
      icon: <Exclamation />,
      content: name + " " + lastName,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        ctx.removeContact(key);
      },
    });
  };
  const showInfoModal = (contact) => {
    info({
      title: "Contact Info",
      icon: <Exclamation />,
      content: showInfo(contact),
      cancelText: "OK",
    });
  };
  const showInfo = (contact) => {
    return (
      <Card
        actions={[
          <p key={contact.fatherName}>{capitalize(contact.fatherName)}</p>,
          <p key={contact.gender}>{capitalize(contact.gender)}</p>,
          <p key={contact.innovators}>{contact.innovators ? "Yes" : "No"}</p>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={capitalize(contact.name) + " " + capitalize(contact.lastName)}
          description={capitalize(contact.profession)}
        />
      </Card>
    );
  };
  return (
    <>
      <Link to="/contacts/add">
        <Button style={{ marginBottom: 16 }} type="primary" icon={<Add />} />
      </Link>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default ContactsList;
