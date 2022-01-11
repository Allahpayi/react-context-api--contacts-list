import ContactProvider from "./context/contact/ContactProvider";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import ContactsList from "./components/contacts/ContactsList";
import AddContact from "./components/contacts/add-contact/AddContact";
import EditContact from "./components/contacts/edit-contact/EditContact";
import classes from "./App.module.scss";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <ContactProvider>
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Link to="/" className={classes.logo}>
            Contacts
          </Link>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Content>
              <Routes>
                <Route path="/" element={<Navigate to="/contacts" />} />
                <Route path="/contacts" element={<ContactsList />} />
                <Route path="/contacts/add" element={<AddContact />} />
                <Route path="/contacts/add/:id" element={<EditContact />} />
              </Routes>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>Contact List</Footer>
      </Layout>
    </ContactProvider>
  );
}

export default App;
