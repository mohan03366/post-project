import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostContext } from "../stores/Poststore.jsx";
function Post({ post }) {
  const { DeletePost } = useContext(PostContext);
  return (
    <div className="card" style={{ width: "18rem", margin: "30px" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <MdDelete onClick={() => DeletePost(post.title)} />
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary">
            {tag}
          </span>
        ))}

        <div className="alert alert-info" role="alert">
          {post.reaction}
        </div>
      </div>
    </div>
  );
}
export default Post;
