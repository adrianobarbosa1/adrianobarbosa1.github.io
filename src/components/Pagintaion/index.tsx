const Pagination = ({ page, hasPrev, hasNext }) => {
  //   const router = useRouter();
  return (
    <div className="flex w-full  items-center justify-between lg:w-[67%]">
      <button
        disabled={!hasPrev}
        // onClick={() => router.push(`?page=${page - 1}`)}
        className="group relative h-10 w-48 overflow-hidden border-2 border-primary text-lg "
      >
        <div className="absolute inset-0 w-3 bg-primary transition-all ease-out group-hover:w-full"></div>
        <span className="relative text-black group-hover:text-white dark:text-darkTexto">
          Anterior
        </span>
      </button>

      <div className="hidden sm:flex">
        <p className="mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600 hover:border-primary hover:text-primary">
          1
        </p>
        <p className="mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600 hover:border-primary hover:text-primary">
          2
        </p>
        <p className="mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600 hover:border-primary hover:text-primary">
          3
        </p>
        <p className="mr-4 cursor-pointer border-t border-indigo-400 px-2 pt-3 text-sm font-medium leading-none text-primary">
          4
        </p>
        <p className="mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600 hover:border-primary hover:text-primary">
          5
        </p>
        <p className="mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600 hover:border-primary hover:text-primary">
          6
        </p>
        <p className="mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600 hover:border-primary hover:text-primary">
          7
        </p>
        <p className="mr-4 cursor-pointer border-t border-transparent px-2 pt-3 text-sm font-medium leading-none text-gray-600 hover:border-primary hover:text-primary">
          8
        </p>
      </div>

      <button
        disabled={!hasNext}
        // onClick={() => router.push(`?page=${page + 1}`)}
        className="group relative h-10 w-48 overflow-hidden border-2 border-primary text-lg "
      >
        <div className="absolute inset-0 w-3 bg-primary transition-all ease-out group-hover:w-full"></div>
        <span className="relative text-black group-hover:text-white dark:text-darkTexto">
          Próximo
        </span>
      </button>
    </div>
  );
};

export default Pagination;
