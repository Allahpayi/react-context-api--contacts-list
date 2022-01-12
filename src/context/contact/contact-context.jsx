import React from "react";

const ContactContext = React.createContext({
  contacts: [],
  // eslint-disable-next-line
  addContact: (contact) => {},
  // eslint-disable-next-line
  updateContact: (contact) => {},
  // eslint-disable-next-line
  removeContact: (id) => {},
});

export default ContactContext;
