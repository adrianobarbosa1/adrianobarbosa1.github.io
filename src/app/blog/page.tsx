import CardPost from "@/components/CardPost";
import MenuCategories from "@/components/MenuCategories";
import Pagination from "@/components/Pagintaion";

const getData = async (page) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?page=${page}`,
    {
      cache: "default",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const page = async ({ searchParams }) => {
  const page = parseInt(searchParams) || 1;
  const data = await getData(page);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page + 1) > 0;

  return (
    <div className="mt-20 w-full bg-[#f9f9f9] py-[50px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 gap-10 px-4 text-black sm:grid-cols-12">
          <div className="sm:col-span-8">
            {/* {data.map((post) => (
              //colocar a imagem, o titulo e o texto para abrir a pagina
            ))} */}
            <CardPost post={data[0]} />
            <CardPost post={data[1]} />
            <CardPost post={data[2]} />
            <CardPost post={data[3]} />
          </div>

          <div className=" sm:col-span-4">
            <MenuCategories />
          </div>
        </div>
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
      </div>
    </div>
  );
};

export default page;
