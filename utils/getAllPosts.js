
const getAllPosts = async () => {
      const result = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=20"
  );
  const data = await result.json();
    return data;
};

export default getAllPosts;