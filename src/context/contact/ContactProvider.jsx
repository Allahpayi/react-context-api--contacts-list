import { useEffect, useReducer } from "react";
import ContactContext from "./contact-context";
import PropTypes from "prop-types";

const contactReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return [...state, action.contact];
    }
    case "UPDATE": {
      let selectedContact = state.find(
        (contact) => contact.key === action.contact.key
      );
      let index = state.indexOf(selectedContact);
      state[index] = action.contact;
      return state;
    }
    case "REMOVE": {
      let newState = state.filter((contact) => contact.key !== action.id);
      return newState;
    }
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
ContactProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactProvider;
