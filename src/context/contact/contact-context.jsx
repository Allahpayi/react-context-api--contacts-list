import React from "react";

const ContactContext = React.createContext({
  contact: [],
  addContact: (contact) => {},
  updateContact: (contact) => {},
  removeContact: (id) => {},
});

export default ContactContext;
