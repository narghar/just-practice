import { useFormik } from "formik";
import Head from "next/head";
import React from "react";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.tel) {
    errors.tel = "Required";
  } else if (values.tel.length < 9) {
    errors.tel = "Must be 9 characters or more";
  }

   if (!values.message) {
     errors.message = "Required";
   } else if (values.message.length < 20) {
     console.log(values.message)
     errors.message = "Must be 20 characters or more";
   }
  console.log(errors)
  return errors;
};

function Contact() {
   const formik = useFormik({
     initialValues: {
       name: "",
       email: "",
       tel: "",
       message: "",
     },
     validate,
     onSubmit: (values) => {
       alert(JSON.stringify(values, null, 2));
     },
   });
  return (
    <div>
      <Head>
        <title>Kontakt</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container w-96 mx-auto">
        <form onSubmit={formik.handleSubmit} className="pt-12">
          <fieldset>
            <legend>Formularz kontaktowy</legend>

            <div className="flex items-center">
              <label htmlFor="name">Imię:</label>
              <input
                className="border m-2 w-full border-gray-300"
                type="text"
                name="name"
                id="name"
                placeholder="Wprowadź imię"
                pattern="[a-zA-Z ]+"
                minLength="3"
                title="Tylko litery"
                required
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>

            <div className="flex items-center">
              <label htmlFor="email">Email:</label>
              <input
                className="border m-2 w-full border-gray-300"
                type="email"
                name="email"
                id="email"
                required
                placeholder="Wprowadź e-mail"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>

            <div className="flex items-center">
              <label htmlFor="tel">Telefon:</label>
              <input
                className="border m-2 w-full border-gray-300"
                type="text"
                name="tel"
                id="tel"
                minLength="9"
                maxLength="12"
                placeholder="Wprowadź tel"
                pattern="[0-9]+"
                title="Tylko cyfry od 1-9"
                required
                onChange={formik.handleChange}
                value={formik.values.tel}
              />
            </div>

            <textarea
              className="border block border-gray-300"
              id="message"
              name="message"
              rows="4"
              cols="40"
              placeholder="Wprowadź wiadomość"
              required
              onChange={formik.handleChange}
              value={formik.values.message}
            ></textarea>

            <button className="" type="submit" id="submit">
              Wyślij
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Contact;
