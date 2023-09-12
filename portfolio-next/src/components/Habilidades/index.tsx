import CardSkills from "./CardSkills";
import { dataSkills } from "./dataSkills";

const Habilidades = () => {
  return (
    <section id="skills" className="items-center flex flex-col sm:mt-6 py-5">
      <h2 className="section_title ">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-4/5 mt-10 mx-auto px-4">
        {dataSkills.map((item, i) => (
          <div className="mt-10 sm:mt-0 md:mt-10">
            <CardSkills Icon={item.icon} title={item.title} desc={item.desc} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;
