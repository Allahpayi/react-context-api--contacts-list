import React, { useContext } from "react";
import { Table, Space, Button, Modal } from "antd";
import ContactContext from "../../context/contact/contact-context";
import { Link } from "react-router-dom";
import { Info, Delete, Edit, Add, Exclamation } from "../../assets/icons/index";
import CustomModal from "../modal/Modal";

const { confirm } = Modal;

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
          <Button icon={<Info />} type="link" />
          <Link to={"/contacts/edit/" + contact.key}>
            <Edit />
          </Link>
          <CustomModal
            onClick={() => showDeleteConfirm(contact)}
            icon={<Delete />}
          />
        </Space>
      ),
    },
  ];

  const showDeleteConfirm = (contact) => {
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
