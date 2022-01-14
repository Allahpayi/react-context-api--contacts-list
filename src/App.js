import ContactProvider from "./context/contact/ContactProvider";
import { Navigate, Route, Routes } from "react-router-dom";
import ContactsList from "./containers/contacts/ContactsList";
import SiteLayout from "./components/layout/SiteLayout";
import CrudContact from "./containers/crud-contact/CrudContact";

function App() {
  return (
    <ContactProvider>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/contacts" />} />
          <Route path="/contacts" element={<ContactsList />} />
          <Route path="/contacts/new" element={<CrudContact />} />
          <Route path="/contacts/edit/:id" element={<CrudContact />} />
        </Routes>
      </SiteLayout>
    </ContactProvider>
  );
}

export default App;
