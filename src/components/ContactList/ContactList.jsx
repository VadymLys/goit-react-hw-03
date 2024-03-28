import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

const ContactList = ({ users }) => {
  return (
    <ul className={css.contactList}>
      {users.map((user) => (
        <Contact key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default ContactList;
