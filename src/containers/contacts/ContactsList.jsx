import React, { useContext } from "react";
import { Table, Space, Button } from "antd";
import ContactContext from "../../context/contact/contact-context";
import { Link } from "react-router-dom";
import { Delete, Edit, Add } from "../../assets/icons/index";
import Confirm from "../../components/modals/confirm/Confirm";
import ContactInfo from "../../components/contact-info/ContactInfo";
import classes from "./contacts-list.module.scss";

const ContactsList = () => {
  const ctx = useContext(ContactContext);
  let dataSource = ctx.contacts;
  const removeContact = (id) => {
    ctx.removeContact(id);
  };
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
          <ContactInfo contact={contact} />
          <Link to={"/contacts/edit/" + contact.key}>
            <Edit />
          </Link>
          <Confirm
            title="Are you sure delete this contact?"
            content={contact.name + " " + contact.lastName}
            onOk={() => removeContact(contact.key)}
          >
            <Delete />
          </Confirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        title={() => (
          <Link
            className={classes.link}
            style={{ display: "block", textAlign: "right" }}
            to="/contacts/add"
          >
            <Button type="primary" icon={<Add />} />
          </Link>
        )}
        bordered
        dataSource={dataSource}
        columns={columns}
      />
    </>
  );
};

export default ContactsList;
