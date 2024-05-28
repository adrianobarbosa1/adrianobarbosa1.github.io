import MenuCategories from "@/components/MenuCategories";

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
  const post = {
    id: 1,
    title: "Blog 1",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eaque, numquam id voluptas porro perspiciatis aut minus illo quos veritatis nisi recusandae ratione quasi at totam tempore officia delectus aliquid?",
    coverImg:
      "https://temismarketing.com/wp-content/uploads/2023/04/what-is-figma.jpg",
  };

  return (
    <div className="mt-20 w-full bg-[#f9f9f9] py-[50px]">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 gap-10 px-4 text-black sm:grid-cols-12">
          <div className="sm:col-span-8">
            <img className="h-56 w-full object-cover" src={post.coverImg} />
            <h1 className="my-1 pt-5 text-2xl font-bold">{post.title}</h1>
            <div className="pt-5">
              <p className="">{post.desc}</p>
            </div>
          </div>

          <div className="sm:col-span-4">
            <MenuCategories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
