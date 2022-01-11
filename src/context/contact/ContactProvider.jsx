import { useReducer } from "react";
import ContactContext from "./contact-context";

const initialState = {
  contact: [],
};

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
  const [contactState, dispatchContactAction] = useReducer(
    contactReducer,
    initialState
  );
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
    contact: contactState.contact,
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