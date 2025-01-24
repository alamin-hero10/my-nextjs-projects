import getPosts from "../../../../utils/getPosts";

const PostPage = async ({ params }) => {
  const { id } = params;
  console.log(id)
  const data = await getPosts(id);
  console.log(data)
    return (
      <div className="w-7/12 mx-auto mt-10 border border-[#BFDBFE] bg-[#e0e7f1] p-10 rounded-md shadow-xl">
        <h1 className="">
          {" "}
          <span className="text-xl font-medium mr-5">Title:</span> {data.title}
        </h1>
        <div className="divider"></div>
        <p className="">
          <span className="text-xl font-medium mr-5">Description:</span>
          {data.body}
        </p>
      </div>
    );
};

export default PostPage;