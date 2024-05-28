import AutorComponent from "./AutorComponent";

const CardPost = ({ post }) => {
  return (
    <div
      key={post.id}
      className="mb-12 overflow-hidden rounded-xl bg-white drop-shadow-md sm:col-span-6 lg:col-span-8"
    >
      <a
        href={`blog/${post.id}`}
        className="transition duration-300 ease-in-out hover:brightness-75"
      >
        <img
          className="h-56 w-full object-cover"
          src={
            "https://temismarketing.com/wp-content/uploads/2023/04/what-is-figma.jpg"
          }
        />
      </a>
      <div className="px-8 pb-8 pt-2">
        <AutorComponent autor={post} />
        <a
          href={`blog/${post.id}`}
          className=" text-2xl font-bold text-black hover:text-primary "
        >
          {post.title}
        </a>
        <div className="mt-4 text-lg text-gray-600 hover:text-gray-400">
          <a href={`blog/${post.id}`}>
            <p>{post.body}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardPost;
