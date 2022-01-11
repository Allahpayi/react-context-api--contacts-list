import { useEffect, useReducer } from "react";
import ContactContext from "./contact-context";

let defaultState = [
  {
    key: 1,
    name: "Ali",
    lastName: "Gulmaliyev",
    fatherName: "Vüqar",
    profession: "Frontend Developer",
  },
  {
    key: 2,
    name: "Mustafa",
    lastName: "Mustafayev",
    fatherName: "Mustafa",
    profession: "Backend Developer",
  },
  {
    key: 3,
    name: "Mirəli",
    lastName: "Nağızadə",
    fatherName: "Zaur",
    profession: "Engneer",
  },
];

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
    defaultState,
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
