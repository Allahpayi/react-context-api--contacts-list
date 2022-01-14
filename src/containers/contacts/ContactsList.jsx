import React, { useContext } from "react";
import { Table, Space, Button } from "antd";
import ContactContext from "../../context/contact/contact-context";
import { Link } from "react-router-dom";
import { Delete, Edit, Add } from "../../assets/icons/index";
import Confirm from "../../components/modals/confirm/Confirm";
import ContactInfo from "../../components/contact-info/ContactInfo";

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
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      sorter: (a, b) => a.lastName.length - b.lastName.length,
    },
    {
      title: "Father Name",
      dataIndex: "fatherName",
      key: "fatherName",
      sorter: (a, b) => a.fatherName.length - b.fatherName.length,
    },
    {
      title: "Profession",
      dataIndex: "profession",
      key: "profession",
      sorter: (a, b) => a.profession.length - b.profession.length,
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
          <Link to="/contacts/new">
            <Button type="primary" icon={<Add />} />
          </Link>
        )}
        dataSource={dataSource}
        columns={columns}
        scroll={{ x: 992 }}
      />
    </>
  );
};

export default ContactsList;
