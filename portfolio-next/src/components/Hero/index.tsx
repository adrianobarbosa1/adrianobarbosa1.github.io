import Image from "next/image";

const Hero = () => {
  return (
    <div className="items-center flex flex-col">
      <div className="h-64 w-64 relative mt-10 border-2 border-primary dark:border-primary rounded-full">
        <Image
          src="/adriano.png"
          layout="fill"
          quality={100}
          alt="Adriano Barbosa"
          objectFit="cover"
          className="rounded-full"
        />
      </div>

      <h1 className=" text-primary dark:text-primary leading-6 font-bold mt-10 text-4xl sm:text-6xl">
        Adriano Barbosa.
      </h1>
    </div>
  );
};

export default Hero;
