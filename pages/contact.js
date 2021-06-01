import Image from "next/image";
export default function Contact() {
  return (
    <div className="max-w-screen-3xl px-3 mx-auto overflow-hidden">
      <div className="max-w-base mx-auto">
        <h3 className="text-3xl font-bold mb-20">
          Zadaj pytanie lub zacznijmy projekt
        </h3>
        <section className="flex relative">
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
        <section className="mt-36">
          <h2 className="text-5xl font-bold">Twórzmy razem coś fajnego.</h2>
          <h3 className="text-3xl font-bold mt-12">
            Chce jednak tylko zadać pytanie
          </h3>
          <form className="mt-28">
            <label htmlFor="">Chce rozpocząć działania w internecie</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Chce zacząć sprzedawać więcej w internecie</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Chce zacząć budować markę w internecie</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Audyt SEO lub Audyt UX</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Strony internetowe lub sklepy internetowe</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">
              Współpraca marketingowa w formie abonamentu
            </label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Kompleksowa strategia działania.</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Nie ma tego na liście</label>
            <input type="checkbox" name="" id="" />
          </form>
        </section>
      </div>
    </div>
  );
}
