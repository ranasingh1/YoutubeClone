import { useState } from "react";
import { CommentsList, MemoizedCommentsList } from "./ComentsContainer";
import Comments from "./Comments";
import { useDispatch } from "react-redux";
import { generateID } from "../constants/helper";
import { addReplies } from "../utils/commentsSlice";

const CommentItem = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [addComment, setAddComment] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <Comments data={comment} />
        <div className="flex gap-2">
          <button
            className="ml-8 text-blue-400 "
            onClick={() => setShowReplies(!showReplies)}
          >
            {!showReplies
              ? `${comment.replies.length} Replies `
              : "Hide Replies"}
          </button>

          <button
            className=" rounded-lg bg-slate-50 shadow-sm p-2"
            onClick={() => setAddComment(!addComment)}
          >
            Reply
          </button>
        </div>
        <div>
          {addComment && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className=" ml-7 flex gap-2  "
            >
              <input
                type="text"
                value={commentValue}
                onChange={(e) => setCommentValue(e.target.value)}
                className="w-1/2 h-10 p-2 rounded-lg border border-black"
              />
              <button
                className=" bg-slate-200 rounded-lg p-2"
                onClick={() => setAddComment(!addComment)}
              >
                Cancel
              </button>{" "}
              <button
                onClick={() => {
                  dispatch(
                    addReplies({
                      commentId: comment.id,
                      newReplies: [
                        {
                          id: generateID(3),
                          name: "Rana",
                          text: commentValue,
                          replies: [],
                        },
                      ],
                    })
                  );
                  setCommentValue("");
                  setAddComment(!addComment);
                }}
                className=" p-2 bg-slate-200 rounded-lg"
              >
                Reply
              </button>
            </form>
          )}
        </div>

      {showReplies && (
        <div className="pl-5 ml-5 border-l-black border-l-2">
          <MemoizedCommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  );
};

export default CommentItem;
