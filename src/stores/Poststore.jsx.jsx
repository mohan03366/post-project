import { createContext, useReducer } from "react";

// Create Context
export const PostContext = createContext({
  PostList: [],
  AddPost: () => {},
  DeletePost: () => {},
});

// Reducer Function
const PostListReducer = (currentPost, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...currentPost, action.payload];
    case "DELETE_POST":
      return currentPost.filter((post) => post.title !== action.payload);
    default:
      return currentPost;
  }
};

// Context Provider Component
function PostContextProvider({ children }) {
  const [PostList, dispatchPostList] = useReducer(PostListReducer, []);

  const AddPost = (userId, title, body, tags, reaction) => {
    const newPost = {
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId,
        title,
        body,
        tags: tags.split(" "),
        reaction,
      },
    };
    dispatchPostList(newPost);
  };

  const DeletePost = (posttitle) => {
    const deleteAction = {
      type: "DELETE_POST",
      payload: posttitle,
    };
    dispatchPostList(deleteAction);
  };

  return (
    <PostContext.Provider value={{ PostList, AddPost, DeletePost }}>
      {children}
    </PostContext.Provider>
  );
}

export default PostContextProvider;
