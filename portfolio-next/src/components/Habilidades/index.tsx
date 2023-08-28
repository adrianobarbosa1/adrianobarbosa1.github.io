import { skills } from "./data.skills";

const Habilidades = () => {
  return (
    <section id="skills" className="items-center flex flex-col mt-10 py-5">
      <h2 className="section_title">HABILIDADES</h2>
      <ul className="max-w-md w-95 mx-auto flex flex-wrap justify-center">
        {skills.map((skill, index) => (
          <li
            key={`${skill}${index}`}
            className="m-2 btn btn--plain hover:text-defaultPrimary"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Habilidades;
