import CardBlog from "@/components/CardBlog";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "default",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const page = async () => {
  const data = await getData();

  return (
    <div className="mt-20 w-full bg-[#f9f9f9] py-[50px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 gap-10 px-4 text-black sm:grid-cols-12">
          <div className="sm:col-span-8">
            {data.map((post) => (
              //colocar a imagem, o titulo e o texto para abrir a pagina
              <CardBlog post={post} />
            ))}
          </div>

          <div className=" sm:col-span-4">
            <h3 className="mb-5 text-gray-600">Categorias</h3>
            <div className="flex items-start  pb-3">
              <div className="mr-3 inline-block overflow-hidden rounded-xl">
                <img
                  className="h-20 w-20 bg-cover bg-center"
                  src={"https://tailwindcss.com/img/card-left.jpg"}
                />
              </div>
              <div className="text-sm">
                <p className="text-xs text-gray-600">Aug 18</p>
                <a
                  href="#"
                  className="font-medium leading-none text-gray-900 hover:text-indigo-600"
                >
                  Cristiano Ronaldo of Juventus FC looks dejected during the...
                </a>
              </div>
            </div>
            <div className="flex items-start  pb-3">
              <div className="mr-3 inline-block overflow-hidden rounded-xl">
                <img
                  className="h-20 w-20 bg-cover bg-center"
                  src={"https://tailwindcss.com/img/card-left.jpg"}
                />
              </div>
              <div className="text-sm">
                <p className="text-xs text-gray-600">Aug 18</p>
                <a
                  href="#"
                  className="font-medium leading-none text-gray-900 hover:text-indigo-600"
                >
                  Cristiano Ronaldo of Juventus FC looks dejected during the...
                </a>
              </div>
            </div>
            <div className="flex items-start  pb-3">
              <div className="mr-3 inline-block overflow-hidden rounded-xl">
                <img
                  className="h-20 w-20 bg-cover bg-center"
                  src={"https://tailwindcss.com/img/card-left.jpg"}
                />
              </div>
              <div className="text-sm">
                <p className="text-xs text-gray-600">Aug 18</p>
                <a
                  href="#"
                  className="font-medium leading-none text-gray-900 hover:text-indigo-600"
                >
                  Cristiano Ronaldo of Juventus FC looks dejected during the...
                </a>
              </div>
            </div>
            <div className="flex items-start  pb-3">
              <div className="mr-3 inline-block overflow-hidden rounded-xl">
                <img
                  className="h-20 w-20 bg-cover bg-center"
                  src={"https://tailwindcss.com/img/card-left.jpg"}
                />
              </div>
              <div className="text-sm">
                <p className="text-xs text-gray-600">Aug 18</p>
                <a
                  href="#"
                  className="font-medium leading-none text-gray-900 hover:text-indigo-600"
                >
                  Cristiano Ronaldo of Juventus FC looks dejected during the...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
