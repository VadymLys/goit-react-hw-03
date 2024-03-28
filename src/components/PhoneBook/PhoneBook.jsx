import css from "../PhoneBook/PhoneBook.module.css";

const PhoneBook = () => {
  return (
    <form className={css.containerBook}>
      <label htmlFor="name">name</label>
      <input type="text" name="name" />
      <label htmlFor="number">number</label>
      <input type="phone" name="number" />
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};

export default PhoneBook;
