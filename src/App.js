import ContactProvider from "./context/contact/ContactProvider";
import { Navigate, Route, Routes } from "react-router-dom";
import ContactsList from "./containers/contacts/ContactsList";
import AddContact from "./containers/add-contact/AddContact";
import EditContact from "./containers/edit-contact/EditContact";
import SiteLayout from "./components/layout/SiteLayout";

function App() {
  return (
    <ContactProvider>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/contacts" />} />
          <Route path="/contacts" element={<ContactsList />} />
          <Route path="/contacts/add" element={<AddContact />} />
          <Route path="/contacts/edit/:id" element={<EditContact />} />
        </Routes>
      </SiteLayout>
    </ContactProvider>
  );
}

export default App;
