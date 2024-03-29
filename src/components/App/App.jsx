import { useState, useEffect } from "react";
import "modern-normalize";
import userData from "./users.json";
import css from "../App/App.module.css";
import SearchBox from "../SearchBox/SearchBox";
import PhoneBook from "../PhoneBook/PhoneBook";
import ContactList from "../ContactList/ContactList";

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem("contacts")) || userData
  );

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const addContact = (newTask) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newTask];
    });
  };

  const deleteContact = (taskId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== taskId);
    });
  };

  const handleSearch = (evt) => {
    setSearchValue(evt.target.value);
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <PhoneBook onAdd={addContact} />
      <SearchBox searchValue={searchValue} onChange={handleSearch} />
      <ContactList users={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};
export default App;
