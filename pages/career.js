import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="container max-w-base mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 justify-items-center">
          <figure className="relative">
            <Image
              src="/assets/career/01.png"
              alt=""
              width={422}
              height={477}
            />
            <figcaption className="absolute -mt-32 left-16 font-medium z-50 text-[30px] text-white">
              Grafik
              <span className="block text-[17px]">
                K<span className="text-yellow">[</span>RE
                <span class="text-yellow">]</span>ATYWNIE
              </span>
            </figcaption>
            <div className="absolute bg-black bg-opacity-70 top-0 w-full h-full z-40"></div>
          </figure>
          <figure class="relative">
            <Image
              src="/assets/career/02.png"
              alt=""
              width={422}
              height={477}
            />
            <figcaption className=" absolute -mt-32 left-16 font-medium z-50 text-[30px] text-white">
              Copywriter
              <span className="block text-[17px]">
                K<span className="text-yellow">[</span>RE
                <span class="text-yellow">]</span>ACJA
              </span>
            </figcaption>
            <div className="absolute bg-black bg-opacity-70 top-0 w-full h-full z-40"></div>
          </figure>
          <figure class="relative">
            <Image
              src="/assets/career/03.png"
              alt=""
              width={422}
              height={477}
            />
            <figcaption className=" absolute -mt-32 left-16 font-medium z-50 text-[30px] text-white">
              Webdeveloper
              <span className="block text-[17px]">
                K<span className="text-yellow">[</span>RE
                <span class="text-yellow">]</span>ACT.JS
              </span>
            </figcaption>
            <div className="absolute bg-black bg-opacity-70 top-0 w-full h-full z-40"></div>
          </figure>
          <figure class="relative">
            <Image
              src="/assets/career/01.png"
              alt=""
              width={422}
              height={477}
            />
            <figcaption className=" absolute -mt-32 left-16 font-medium z-50 text-[30px] text-white">
              SEO Specialist
              <span className="block text-[17px]">
                K<span className="text-yellow">[</span>RE
                <span class="text-yellow">]</span>ATYWNIE
              </span>
            </figcaption>
            <div className="absolute bg-black bg-opacity-70 top-0 w-full h-full z-40"></div>
          </figure>
          <figure class="relative">
            <Image
              src="/assets/career/02.png"
              alt=""
              width={422}
              height={477}
            />
            <figcaption className=" absolute -mt-32 left-16 font-medium z-50 text-[30px] text-white">
              Koder
              <span className="block text-[17px]">
                K<span className="text-yellow">[</span>RE
                <span class="text-yellow">]</span>ACJA
              </span>
            </figcaption>
            <div className="absolute bg-black bg-opacity-70 top-0 w-full h-full z-40"></div>
          </figure>
          <figure class="relative">
            <Image
              src="/assets/career/03.png"
              alt=""
              width={422}
              height={477}
            />
            <figcaption className=" absolute -mt-32 left-16 font-medium z-50 text-[30px] text-white">
              Telemarketer
              <span className="block text-[17px]">
                K<span className="text-yellow">[</span>RE
                <span class="text-yellow">]</span>ACT.JS
              </span>
            </figcaption>
            <div className="absolute bg-black bg-opacity-70 top-0 w-full h-full z-40"></div>
          </figure>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 items-center mt-32  justify-items-center max-w-base mx-auto">
        <figure className="justify-self-center md:justify-self-start">
          <Image src="/assets/career/04.png" alt="" width={582} height={711} />
        </figure>
        <div className="md:max-w-[424px]">
          <h2 className="text-[48px] mb-16">Rozwijaj się</h2>
          <p className="text-[30px] mb-10">
            Zawsze szukamy utalentowanych ludzi, którzy pozwolą nam być
            odważniejszymi, mieć większe marzenia i osiągać lepsze wyniki.
          </p>
          <p className="text-[18px] ">
            Mamy ambitne plany rozwoju Project: People na najbliższe 5 lat.
            Wiemy, co chcemy osiągnąć i szukamy osób, które chcą być częścią
            naszego wzrostu i wesprą nas swoimi umiejętnościami.
          </p>
        </div>
      </section>
       <section>
        <div className="w-full" h=""></div>
       </section>
    </div>
  );
}
