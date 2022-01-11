import ContactProvider from "./context/contact/ContactProvider";
import ContactContext from "./context/contact/contact-context";
import { useContext } from "react";

function App() {
  const ctx = useContext(ContactContext);
  return (
    <ContactProvider>
      <div className="App">
        Hello
      </div>
    </ContactProvider>
  );
}

export default App;
