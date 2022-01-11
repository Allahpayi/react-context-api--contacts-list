import ContactProvider from "./context/contact/ContactProvider";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import ContactsList from "./components/contacts-list/ContactsList";
import classes from './App.module.scss';
import { Layout, Breadcrumb } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const location = useLocation()
  let breadcrumb = location.pathname.split('/')
  return (
    <ContactProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Link to="/" className={classes.logo}>
            Contacts
          </Link>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {
              breadcrumb.map((item, index) => (
                <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
              ))
            }

          </Breadcrumb>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Content>
              <Routes>
                <Route path="/" element={<Navigate to="/contacts" />} />
                <Route path="/contacts" element={<ContactsList />} />
              </Routes>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Contact List</Footer>
      </Layout>
    </ContactProvider>
  );
}

export default App;
