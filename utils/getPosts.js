import React from 'react';

const getPosts = async (id) => {
    const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await result.json();
    return data
};

export default getPosts;