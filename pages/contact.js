import Image from "next/image";
export default function Contact() {
  return (
    <div className="max-w-screen-3xl px-3 mx-auto overflow-hidden">
      <div className="max-w-base mx-auto">
        <h3 className="text-3xl font-bold mb-20">
          Zadaj pytanie lub zacznijmy projekt
        </h3>
        <section className="flex relative flex-wrap md:flex-nowrap">
          <div className="flex flex-col justify-between min-w-[340px] h-[576px] mr-[9.4vw] font-medium">
            <div>
              <p className="uppercase text-lightgray mb-8">Telefon</p>
              <p className="text-4xl">+48 505 950 952</p>
            </div>
            <div>
              <p className="uppercase text-lightgray mb-8">E-mail</p>
              <p className="text-4xl">hello@rebenagesta.com</p>
            </div>
            <div>
              <p className="uppercase text-lightgray mb-8">Dane adresowe</p>
              <p className="text-2xl mb-8">
                Re bena gesta ul.
                <br />
                Montażowa 3<br />
                43-300 Bielsko-Biała
              </p>
              <p>Jesteśmy częścią Barracuda Group sp. z o.o.</p>
            </div>
            <div>
              <p className="uppercase text-lightgray">Social Media</p>
              <div className="mr-8 inline-block">
                <Image
                  src="/assets/contact/facebook.png"
                  alt="behance"
                  width={7}
                  height={14}
                />
              </div>
              <div className="mr-8 inline-block">
                <Image
                  src="/assets/contact/linkedin.png"
                  alt="behance"
                  width={15}
                  height={14}
                />
              </div>
              <div className="inline-block">
                <Image
                  src="/assets/contact/behance.png"
                  alt="behance"
                  width={19}
                  height={12}
                />
              </div>
            </div>
          </div>
          <div className="3xl:absolute flex-grow top-0 left-[513px] bg-gray-500 h-[565px] w-full 3xl:w-[1093px]"></div>
        </section>
        <section className="mt-36 max-w-base">
          <h2 className="text-5xl font-bold">Twórzmy razem coś fajnego.</h2>
          <h3 className="text-3xl font-bold mt-12">
            Chce jednak tylko zadać pytanie
          </h3>
          <form className="mt-28 font-medium" method="GET" action="/contact">
            <fieldset className="grid sm:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="w-64">
                <input
                  type="checkbox"
                  name="interest"
                  id="online-activities"
                  value="online-activities"
                  className="checkbox"
                />
                <label
                  htmlFor="online-activities"
                  className="flex items-center justify-items-center cursor-pointer"
                >
                  <span className="w-[21px] h-[21px]"></span>
                  Chce rozpocząć działania w internecie
                </label>
              </div>
              <div className="w-64">
                <input
                  type="checkbox"
                  name="interest"
                  id="sales"
                  value="sales"
                  className="checkbox"
                />
                <label
                  htmlFor="sales"
                  className="flex items-center justify-items-center cursor-pointer"
                >
                  <span className="w-[21px] h-[21px]"></span>
                  Chce zacząć sprzedawać więcej w internecie
                </label>
              </div>
              <div className="w-64">
                <input
                  type="checkbox"
                  name="interest"
                  id="brand"
                  value="brand"
                  className="checkbox"
                />
                <label
                  htmlFor="brand"
                  className="flex items-center justify-items-center cursor-pointer"
                >
                  <span className="w-[21px] h-[21px]"></span>
                  Chce zacząć budować markę w internecie
                </label>
              </div>
              <div className="w-64">
                <input
                  type="checkbox"
                  name="interest"
                  id="SEO-UX"
                  value="SEO-UX"
                  className="checkbox"
                />
                <label
                  htmlFor="SEO-UX"
                  className="flex items-center justify-items-center cursor-pointer"
                >
                  <span className="w-[21px] h-[21px]"></span>
                  Audyt SEO lub Audyt UX
                </label>
              </div>
              <div className="w-64">
                <input
                  type="checkbox"
                  name="interest"
                  id="website"
                  value="website"
                  className="checkbox"
                />
                <label
                  htmlFor="website"
                  className="flex items-center justify-items-center cursor-pointer"
                >
                  <span className="w-[21px] h-[21px]"></span>
                  Strony internetowe lub sklepy internetowe
                </label>
              </div>
              <div className="w-64">
                <input
                  type="checkbox"
                  name="interest"
                  id="marketing"
                  value="marketing"
                  className="checkbox"
                />
                <label
                  htmlFor="marketing"
                  className="flex items-center justify-items-center cursor-pointer"
                >
                  <span className="w-[21px] h-[21px]"></span>
                  Współpraca marketingowa w formie abonamentu
                </label>
              </div>
              <div className="w-64">
                <input
                  type="checkbox"
                  name="interest"
                  id="complex-strategy"
                  value="complex-strategy"
                  className="checkbox"
                />
                <label
                  htmlFor="complex-strategy"
                  className="flex items-center justify-items-center cursor-pointer"
                >
                  <span className="w-[21px] h-[21px]"></span>
                  Kompleksowa strategia działania.
                </label>
              </div>
              <div className="w-64">
                <input
                  type="checkbox"
                  name="interest"
                  id="other"
                  value="other"
                  className="checkbox"
                />
                <label
                  htmlFor="other"
                  className="flex items-center justify-items-center cursor-pointer"
                >
                  <span className="w-[21px] h-[21px]"></span>
                  Nie ma tego na liście
                </label>
              </div>
            </fieldset>
            <fieldset className="flex justify-between flex-wrap my-24">
              <div className="w-[366px]">
                <label htmlFor="name" className="text-2xl">
                  Imię
                  <span className="text-lg text-silver ml-1">(wymagane)</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="block border-b border-black w-full"
                />
              </div>
              <div className="w-[366px]">
                <label htmlFor="email" className="text-2xl">
                  E-mail
                  <span className="text-lg text-silver ml-1">(wymagane)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="block border-b border-black w-full"
                />
              </div>
              <div className="w-[366px]">
                <label htmlFor="phone" className="text-2xl">
                  Telefon
                  <span className="text-lg text-silver ml-1">(wymagane)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="block border-b border-black w-full"
                />
              </div>
            </fieldset>
            <label htmlFor="message" className="text-2xl">
              Chcesz nam coś powiedzieć?
            </label>
            <textarea
              rows="1"
              className="w-[366px] sm:w-full block border-b border-black"
            ></textarea>
            <div className="w-64">
              <input
                type="checkbox"
                name="accept-terms"
                id="accept-terms"
                required
                value="true"
                className="checkbox"
              />
              <label
                htmlFor="accept-terms"
                className="flex items-center justify-items-center cursor-pointer"
              >
                <span className="w-4 h-4"></span>
                Akceptuję regulamin
              </label>
            </div>
            <button
              type="submit"
              className="flex mt-14 w-[245px] py-3 bg-yellow justify-center "
            >
              Wyślij wiadomość
              <span className="ml-6 pt-[3px] ">
                <Image
                  src="/assets/contact/arrow-right.png"
                  alt=""
                  width={8}
                  height={15}
                />
              </span>
            </button>
          </form>
        </section>
        <section className="grid gap-x-16 grid-cols-1 md:grid-cols-2 mt-20 md:mt-32 mb-60 items-center">
          <div className="justify-self-end relative ">
            <Image
              className="z-10"
              src="/assets/contact/climb-top.png"
              alt="climbing"
              width={409}
              height={521}
            />
            <div className="absolute z-10 -bottom-1/3 -left-1/4">
              <Image
                src="/assets/contact/climb-bot.png"
                alt="climbing"
                width={362}
                height={246}
              />
            </div>
            <div className="absolute z-0 top-3/20 -left-thirteen bg-yellow w-[92%] h-[93%]">
              {" "}
            </div>
          </div>
          <div className="col-start-1 row-start-1 md:col-start-2 mb-6 md:mb-0">
            <p className="text-4xl font-bold">Szukasz pracy?</p>
            <p className="text-4xl font-medium">Chcesz zdobywać szczyty?</p>
            <p className="text-4xl font-bold">Jesteś kreatywny?</p>
            <p className="mt-6 md:mt-24 text-4xl">może szukamy własnie Ciebie.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
