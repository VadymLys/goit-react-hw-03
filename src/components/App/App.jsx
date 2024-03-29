import React, { useState, useEffect } from "react";
import "modern-normalize";
import css from "../App/App.module.css";
import SearchBox from "../SearchBox/SearchBox";
import PhoneBook from "../PhoneBook/PhoneBook";
import ContactList from "../ContactList/ContactList";

const App = () => {
  const [contacts, setContacts] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const storedContacts = window.localStorage.getItem("contacts");
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearch = (evt) => {
    setSearchValue(evt.target.value);
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <PhoneBook />
      <SearchBox searchValue={searchValue} onChange={handleSearch} />
      <ContactList users={filteredContacts} />
    </div>
  );
};
export default App;
