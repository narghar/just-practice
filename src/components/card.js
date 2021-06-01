import Image from "next/image";

export default function Card({ imgSrc, alt, width, height, heading, subheading })
{
  return (
      <figure className="relative brackets">
        <Image src={imgSrc} alt={alt} width={width} height={height} />
        <figcaption
          className="absolute -mt-32 pb-96 left-16 font-medium z-50 text-3xl text-white"
        > {heading}
          {subheading}
        </figcaption>
        <div className="absolute bg-black bg-opacity-70 top-0 w-full h-cardFix z-40"></div>
      </figure>
  );
}

