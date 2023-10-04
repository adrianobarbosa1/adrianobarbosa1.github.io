interface CardSkillsProps {
  Icon: React.ElementType;
  title: string;
  desc: string;
  index: number;
}

const CardSkills = ({ Icon, title, desc, index }: CardSkillsProps) => {
  return (
    <div
      className={`flex h-auto min-h-[450px] flex-col items-center bg-gray-300 p-3 text-center dark:bg-[#242424] `}
      data-aos="fade-up"
      data-aos-delay={`${index % 2 === 0 ? "700" : "600"}`}
    >
      <div className="-mt-10 flex h-12 w-12 items-center justify-center rounded-full  bg-primary">
        <Icon className="h-8 w-8" color="white" />
      </div>
      <div>
        <h3 className="mt-5 font-bold text-primary">{title}</h3>

        <p className="mt-5 p-2 dark:text-darkTexto">{desc}</p>
      </div>
    </div>
  );
};

export default CardSkills;
