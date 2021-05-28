import Head from "next/head";

function Contact() {
  return (
    <div>
      <Head>
        <title>Kontakt</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container w-96 mx-auto">
        <form className="pt-12" action="/kontakt" method="GET">
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
                minlength="3"
                title="Tylko litery"
                required
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
              />
            </div>

            <div className="flex items-center">
              <label htmlFor="tel">Telefon:</label>
              <input
                className="border m-2 w-full border-gray-300"
                type="text"
                name="tel"
                id="tel"
                minlength="9"
                maxlength="12"
                placeholder="Wprowadź tel"
                pattern="[0-9]+"
                title="Tylko cyfry od 1-9"
                required
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
            ></textarea>


              <button
                className=""
                type="submit"
                id="submit"
              >Wyślij
              </button>

          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Contact;
