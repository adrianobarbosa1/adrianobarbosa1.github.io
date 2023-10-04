import Image from "next/image";

const Hero = () => {
  return (
    <section
      className=" mt-20 flex flex-col items-center"
      data-aos="fade-up"
      data-aos-offset="350"
    >
      <div
        className="relative mt-10 h-64 w-64 rounded-full border-2 border-primary dark:border-primary"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <Image
          src="/adriano.png"
          alt="Adriano Barbosa"
          className="rounded-full object-cover"
          quality={100}
          priority={true}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <h1 className=" mt-10 text-4xl font-bold leading-6 text-primary dark:text-primary sm:text-6xl">
        Adriano Barbosa.
      </h1>
    </section>
  );
};

export default Hero;
