import { useDispatch, useSelector } from "react-redux";
import { getComments } from "./redux/actions";
import { useEffect } from "react";
import CreateComment from "./CreateComment";
import "./CommentList.css";

export default function CommentList() {
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comments);

    useEffect(() => {
        dispatch(getComments());
    }, []);

    return (
        <div className="comment-container">
            {comments && (
                <ul className="comment-list">
                    {comments.map((comment, index) => (
                        <li className="comment" key={index}>
                            <p className="comment-text">{comment.text}</p>
                            <p className="comment-info">
                                <span>{comment.createdDate}</span>
                                <span>{comment.author}</span>
                            </p>
                        </li>
                    ))}
                </ul>
            )}
            <CreateComment />
        </div>
    );
}
