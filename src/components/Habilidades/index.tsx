import CardSkills from "./CardSkills";
import { dataSkills } from "./dataSkills";

const Habilidades = () => {
  return (
    <section id="skills" className=" flex flex-col items-center py-5 sm:mt-6">
      <h2 className="section_title " data-aos="fade-up" data-aos-delay="200">
        Skills
      </h2>

      <div className="mx-auto grid w-4/5 grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
        {dataSkills.map((item, i) => (
          <div className="mt-10 sm:mt-0 md:mt-10" key={i}>
            <CardSkills
              Icon={item.icon}
              title={item.title}
              desc={item.desc}
              index={i}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;
