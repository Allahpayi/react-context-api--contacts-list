import React from "react";

const ContactContext = React.createContext({
  contacts: [],
  addContact: (contact) => {},
  updateContact: (contact) => {},
  removeContact: (id) => {},
});

export default ContactContext;
