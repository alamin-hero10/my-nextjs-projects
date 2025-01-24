import getPosts from "../../../../utils/getPosts";

const PostPage = async ({ params }) => {
  const { id } = params;
  console.log(id)
  const data = await getPosts(id);
  console.log(data)
    return (
      <div className="mt-5">
        <div>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </div>
      </div>
    );
};

export default PostPage;