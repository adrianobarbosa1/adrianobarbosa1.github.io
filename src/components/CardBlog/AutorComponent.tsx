import { CiCalendar } from "react-icons/ci";

const AutorComponent = (autor) => {
  return (
    <div className="mb-2 flex items-center">
      <a
        href="#"
        className="transition duration-300 ease-in-out hover:brightness-75"
      >
        <img
          className="relative inline-block h-12 w-12 rounded-full object-cover object-center"
          alt="Image placeholder"
          src="https://temismarketing.com/wp-content/uploads/2023/04/what-is-figma.jpg"
        />
      </a>
      <a href="#" className="ml-5 text-sm hover:text-primary">
        Adriano Barbosa,
      </a>
      <a href="#" className=" ml-2 flex text-sm  uppercase ">
        Fashion,
      </a>
      <a href="#" className="ml-2 flex text-sm hover:text-primary">
        <CiCalendar className="mr-1 " />
        25 de maio de 2024
      </a>
    </div>
  );
};

export default AutorComponent;
