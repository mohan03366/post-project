import React, { useContext } from "react";
import Post from "./Post";
import { PostContext } from "../stores/Poststore.jsx";

function Postlist() {
  // Use the useContext hook to consume PostContext
  const { PostList } = useContext(PostContext);

  console.log(PostList);

  return (
    <>
      {PostList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default Postlist;
