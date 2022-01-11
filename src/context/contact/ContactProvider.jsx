import { useEffect, useReducer } from "react";
import ContactContext from "./contact-context";

const contactReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state;
    case "UPDATE":
      return state;
    case "REMOVE":
      return state;
    default:
      return state;
  }
};

const ContactProvider = (props) => {
  const [contacts, dispatchContactAction] = useReducer(
    contactReducer,
    [],
    () => {
      const localContacts = localStorage.getItem("contacts");
      return localContacts ? JSON.parse(localContacts) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContactHandler = (contact) => {
    dispatchContactAction({ type: "ADD", contact });
  };
  const updateContactHandler = (contact) => {
    dispatchContactAction({ type: "UPDATE", contact });
  };
  const removeContactHandler = (id) => {
    dispatchContactAction({ type: "REMOVE", id });
  };
  const contactContext = {
    contacts,
    addContact: addContactHandler,
    updateContact: updateContactHandler,
    removeContact: removeContactHandler,
  };

  return (
    <ContactContext.Provider value={contactContext}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
