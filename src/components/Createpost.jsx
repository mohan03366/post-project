import { useContext, useRef } from "react";
import { PostContext } from "../stores/Poststore.jsx";

function Createpost() {
  const userIDElement = useRef();
  const tittleElement = useRef();
  const bodyElement = useRef();
  const tagElement = useRef();
  const reactionElement = useRef();
  const { AddPost } = useContext(PostContext);

  const handleFormElement = (event) => {
    event.preventDefault();

    const userId = userIDElement.current.value;
    const tittle = tittleElement.current.value;
    const body = bodyElement.current.value;
    const tags = tagElement.current.value;
    const reaction = reactionElement.current.value;
    AddPost(userId, tittle, body, tags, reaction);
    userIDElement.current.value = "";
    tittleElement.current.value = "";
    bodyElement.current.value = "";
    tagElement.current.value = "";
    reactionElement.current.value = "";
  };

  return (
    <form onSubmit={() => handleFormElement(event)} className="form">
      <div className="mb-3">
        <label htmlFor="userId" className="userId">
          Enter your userId
        </label>
        <input
          type="text"
          ref={userIDElement}
          className="form-control"
          id="userId"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tittle" className="tittle">
          Enter Post tittle
        </label>
        <input
          type="text"
          ref={tittleElement}
          className="form-control"
          id="tittle"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="postBody" className="postBody">
          Enter Post body
        </label>
        <textarea
          rows={5}
          type="text"
          ref={bodyElement}
          className="form-control"
          id="postBody"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="postTag" className="postTag">
          Enter Post Tags by giving Space
        </label>
        <input
          type="text"
          ref={tagElement}
          className="form-control"
          id="postBody"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postReaction" className="postReaction">
          enter number of post Reaction
        </label>
        <input
          type="text"
          ref={reactionElement}
          className="form-control"
          id="postBody"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Create Post
      </button>
    </form>
  );
}
export default Createpost;
