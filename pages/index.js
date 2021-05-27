import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <div>
      <Head>
        <title>Ilona Brzozowska</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className=" max-w-screen-4xl 4xl:mx-auto">
        <nav>
          <ul className="flex justify-end">
            <li>
              <Link href="/">
                <a className="text-sm hover:text-primary-subheading">Główna</a>
              </Link>
            </li>
            <li className="text-sm hover:text-primary-subheading mx-5">
              <Link href="/kontakt">
                <a>Kontakt</a>
              </Link>
            </li>
          </ul>
        </nav>

        <header className="flex flex-wrap-reverse lg:flex-nowrap justify-center lg:justify-start">
          <div className="w-full flex-grow relative max-w-4xl px-20 pt-0 lg:pt-20 xl:px-30 xl:pt-30 2xl:px-40 2xl:pt-36">
            <Image
              className="z-10 "
              src="/assets/kolorystka1.png"
              alt="Zdjęcie Ilona Brzozowska"
              layout="responsive"
              width={561}
              height={748}
            />
            <div className="absolute h-1/4 w-full z-0 bottom-0 left-0  gradient-box"></div>
          </div>
          <div className="font-sans lg:pt-36 lg:-ml-64 z-20">
            <h1 className="font-thin text-xl  4xl:text-max text-primary-heading text-center lg:text-left">
              Kolorystka
            </h1>
            <p className="font-thin text-base z-30 text-primary-subheading text-center 2xl:text-left 2xl:ml-48 2xl:-mt-24">
              Ilona Brzozowska
            </p>
            <h2 className="font-light text-center xl:text-right 2xl:m-20    text-base md:text-lg text-primary-heading">
              Styl, kolor, biznes{" "}
            </h2>
          </div>
        </header>

        <div className="relative flex items-center -mt-24">
          <figure className="z-20 mx-4">
            <Image
              src="/assets/kolorystka2.png"
              alt="Zdjęcie Ilona Brzozowska"
              layout="intrinsic"
              width={475}
              height={348}
            />
          </figure>
          <figure className="z-20 mx-4">
            <Image
              src="/assets/kolorystka3.png"
              alt="Zdjęcie Ilona Brzozowska"
              layout="intrinsic"
              width={705}
              height={496}
            />
          </figure>
          <figure className="z-20 mx-4 xl:-mt-40">
            <Image
              src="/assets/kolorystka4.png"
              alt="Zdjęcie Ilona Brzozowska"
              layout="intrinsic"
              width={443}
              height={443}
            />
          </figure>

          <div className="hidden lg:block absolute h-1/2 w-1/2 z-10 bottom-10 right-0 gray-box"></div>
        </div>
        <div className="relative grid grid-col-1 lg:grid-cols-3 max-w-screen-3xl mt-44 justify-center">
          <div className="col-start-3  z-20  self-center justify-self-center overlap">
            <figure className="flex">
              <Image
                src="/assets/play-button.png"
                alt="Video"
                layout="intrinsic"
                width={80}
                height={91}
              />
              <figcaption className="pt-1 text-base text-primary-link">
                <span className="text-shadow">zobacz film</span>
              </figcaption>
            </figure>
          </div>
          <figure className="relative col-start-3 self-center justify-self-center overlap text-shadow">
            <Image
              className="z-10"
              src="/assets/video_thumbnail.png"
              alt="Video"
              layout="intrinsic"
              width={640}
              height={482}
            />
            <div
              className="z-0 absolute gradient-box h-5/3 w-96 -top-1/2
            left-1/2 transform -translate-x-1/2"
            ></div>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Home
