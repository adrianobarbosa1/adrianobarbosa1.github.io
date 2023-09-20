interface CardSkillsProps {
  Icon: React.ElementType;
  title: string;
  desc: string;
}

const CardSkills = ({ Icon, title, desc }: CardSkillsProps) => {
  return (
    <div className="flex flex-col items-center text-center min-h-[450px] h-auto bg-gray-300 dark:bg-[#242424] p-3">
      <div className="flex items-center justify-center w-12 h-12 bg-primary -mt-10  rounded-full">
        <Icon className="w-8 h-8" color="white" />
      </div>
      <div>
        <h3 className="font-bold mt-5 text-primary">{title}</h3>

        <p className="mt-5 p-2 dark:text-darkTexto">{desc}</p>
      </div>
    </div>
  );
};

export default CardSkills;
