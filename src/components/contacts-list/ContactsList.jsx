import React, { useContext } from "react";
import { Table, Space, Button } from "antd";
import ContactContext from "../../context/contact/contact-context";
import { Link } from "react-router-dom";
import { Info, Delete, Edit, Add } from "../../assets/icons/index";
import classes from "./contacts-list.module.scss";

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
        <a>
          <Info />
        </a>
        <Link
          onClick={() => handler(contact)}
          to={"/contacts/edit/" + contact.key}
        >
          <Edit />
        </Link>
        <a>
          <Delete />
        </a>
      </Space>
    ),
  },
];
const handler = (data) => {
  console.log(data);
};
const ContactsList = () => {
  const ctx = useContext(ContactContext);
  let dataSource = ctx.contacts;
  console.log(ctx);
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