import Image from "next/image";
import Card from "../src/components/card";

const cards = [
  {
    id: 1,
    imgSrc: "/assets/career/01.png",
    alt: "Grafik",
    width: "422",
    height: "477",
    heading: "Grafik",
    subheading: [
      <p>
        K<span>[</span>RE<span>]</span>ATYWNIE
      </p>
    ],
  },
  {
    id: 2,
    imgSrc: "/assets/career/02.png",
    alt: "Copywriter",
    width: "422",
    height: "477",
    heading: "Copywriter",
    subheading: [
      <p>
        K<span>[</span>RE<span>]</span>ACJA
      </p>
    ],
  },
  {
    id: 3,
    imgSrc: "/assets/career/03.png",
    alt: "Webdeveloper",
    width: "422",
    height: "477",
    heading: "Webdeveloper",
    subheading: [
      <p>
        K<span>[</span>RE<span>]</span>ACT.JS
      </p>
    ],
  },
  {
    id: 4,
    imgSrc: "/assets/career/01.png",
    alt: "SEO Specialist",
    width: "422",
    height: "477",
    heading: "SEO Specialist",
    subheading: [
      <p>
        K<span>[</span>RE<span>]</span>ATYWNIE
      </p>
    ],
  },
  {
    id: 5,
    imgSrc: "/assets/career/02.png",
    alt: "Koder",
    width: "422",
    height: "477",
    heading: "Koder",
    subheading: [
      <p>
        K<span>[</span>RE<span>]</span>ACJA
      </p>
    ],
  },
  {
    id: 6,
    imgSrc: "/assets/career/03.png",
    alt: "Telemarketer",
    width: "422",
    height: "477",
    heading: "Telemarketer",
    subheading: [
    <p>
      K<span>[</span>RE<span>]</span>ACT.JS
    </p>
    ],
  },
];

export default function Career() {

  return (
    <div>
      <section className="container max-w-base mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-2 justify-items-center">
          {cards.map((card, i) => (
            <Card
              imgSrc={card.imgSrc}
              alt={card.alt}
              width={card.width}
              height={card.height}
              heading={card.heading}
              subheading={card.subheading[0]}
              key={i}
            />
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center mt-32  justify-items-center max-w-base mx-auto">
        <figure className="justify-self-center md:justify-self-start">
          <Image src="/assets/career/04.png" alt="" width={582} height={711} />
        </figure>
        <div className="max-w-[422px] md:max-w-[300px] lg:max-w-[424px] mt-16 md:mt-0 px-6 md:px-0 ">
          <h2 className="text-5xl mb-16 font-bold">Rozwijaj si??</h2>
          <p className="text-3xl mb-10 leading-9">
            Zawsze szukamy utalentowanych ludzi, kt??rzy pozwol?? nam by??
            odwa??niejszymi, mie?? wi??ksze marzenia i osi??ga?? lepsze wyniki.
          </p>
          <p>
            Mamy ambitne plany rozwoju Project: People na najbli??sze 5 lat.
            Wiemy, co chcemy osi??gn???? i szukamy os??b, kt??re chc?? by?? cz????ci??
            naszego wzrostu i wespr?? nas swoimi umiej??tno??ciami.
          </p>
        </div>
      </section>
      <section className="mt-8 max-w-base mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-[70%,1fr] justify-items-end">
          <div>
            <div className="w-full bg-black h-[19vw] 3xl:h-[364px]"></div>
            <div className="pl-28 pr-36 mt-24">
              <p className="text-3xl mb-10 leading-9">
                Zawsze szukamy utalentowanych ludzi, kt??rzy pozwol?? nam by??
                odwa??niejszymi, mie?? wi??ksze marzenia i osi??ga?? lepsze wyniki.
              </p>
              <p>
                Mamy ambitne plany rozwoju Project: People na najbli??sze 5 lat.
                Wiemy, co chcemy osi??gn???? i szukamy os??b, kt??re chc?? by?? cz????ci??
                naszego wzrostu i wespr?? nas swoimi umiej??tno??ciami.
              </p>
              <h2 className="text-5xl mt-20 font-bold">Nasze warto??ci</h2>
              <div className="grid grid-cols-3 mt-20 text-2xl font-bold">
                <div>
                  <span className="text-yellow">r</span>
                  <p>
                    B??d??
                    <br />
                    otwarty
                  </p>
                </div>
                <div>
                  <span className="text-yellow">e</span>
                  <p>
                    B??d??
                    <br />
                    szczery
                  </p>
                </div>
                <div>
                  <span className="text-yellow">b</span>
                  <p>
                    B??d??
                    <br />
                    uprzejmy
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden w-9/10 sm:block bg-black"></div>
        </div>
        <div className="grid grid-cols-3 w-7/10 mt-20 text-2xl font-bold pl-28 pr-36 mb-24">
          <div>
            <span className="text-yellow">e</span>
            <p>
              B??d??
              <br />
              sob??
            </p>
          </div>
          <div>
            <span className="text-yellow">n</span>
            <p>
              B??d??
              <br />
              pomocny
            </p>
          </div>
          <div>
            <span className="text-yellow">a</span>
            <p>
              Nie Bon??
              <br />
              toxic XD
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="ml-28 text-justify max-w-[440px]">
            <p className="mb-12">
              Tak, warto??ci s?? dla nas wa??ne, bo pozwalaj?? nam budowa??
              nowoczesn?? organizacj??, gdzie ka??dy mo??e realnie wp??ywa?? na jej
              rozw??j. Chcemy pracowa?? w poszanowaniu siebie nawzajem, dzia??a??
              zwinnie i na bie????co udziela?? sobie informacji zwrotnej.
            </p>
            <p>
              To wszystko umo??liwia nam lepsz?? wsp????prac?? i utrzymywanie
              pozytywnych relacji z klientami.
            </p>
          </div>
          <div className="mt-20 pl-12">
            <p className="text-4xl mb-16">
              Zostaw nam swoje portfolio lub realizacje. Odejd??my od CV - to co
              zrobi??e?? nas interesuje!
            </p>

            <button className="px-10 py-2 bg-yellow hover:bg-black hover:text-white rounded-md transition-colors duration-500 mb-20">
              Wy??lij CV
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
