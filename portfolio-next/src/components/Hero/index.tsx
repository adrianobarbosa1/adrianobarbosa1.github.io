import Image from "next/image";

const Hero = () => {
  return (
    <section className="items-center flex flex-col mt-20">
      <div className="h-64 w-64 relative mt-10 border-2 border-primary dark:border-primary rounded-full">
        <Image
          src="/adriano.png"
          alt="Adriano Barbosa"
          className="rounded-full object-cover"
          quality={100}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <h1 className=" text-primary dark:text-primary leading-6 font-bold mt-10 text-4xl sm:text-6xl">
        Adriano Barbosa.
      </h1>
    </section>
  );
};

export default Hero;
