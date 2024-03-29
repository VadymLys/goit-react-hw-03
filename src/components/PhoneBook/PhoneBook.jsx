import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "../PhoneBook/PhoneBook.module.css";

const PhoneBook = ({ onAdd }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const nameId = useId();
  const numberId = useId();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    number: Yup.number()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
  });

  const handleSumbmit = (values, actions) => {
    // const [name, number] = evt.target.elements;
    // const newContact = {
    //   id: Math.ceil(Math.random() * 1000000),
    //   name: name.value,
    //   number: number.value,
    // };
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSumbmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.containerBook}>
        <div>
          <label htmlFor={nameId}>name</label>
          <Field type="text" name="name" id={nameId} className={css.field} />
          <ErrorMessage
            name="name"
            as="span"
            id={`${nameId} error`}
            className={css.red}
          />
        </div>
        <div>
          <label htmlFor={numberId}>number</label>
          <Field
            type="phone"
            name="number"
            id={numberId}
            className={css.field}
          />
          <ErrorMessage
            name="number"
            as="span"
            id={`${numberId} error`}
            className={css.red}
          />
        </div>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default PhoneBook;
