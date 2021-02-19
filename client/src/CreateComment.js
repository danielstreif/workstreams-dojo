import { useDispatch } from "react-redux";
import { addComment } from "./redux/actions";
import { useState } from "react";

export default function CreateComment() {
    const [input, setInput] = useState();
    const dispatch = useDispatch();

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            dispatch(
                addComment({
                    text: input,
                    author: "Daniel",
                    createdDate: new Date(Date.now()).toUTCString(),
                })
            );
            return setInput();
        } else if (e.key === "Escape") {
            return setInput();
        }
    };

    const handleChange = (e) => {
        return setInput(e.target.value);
    };

    return (
        <div className="text-field">
            <textarea
                placeholder="Type your comment..."
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                value={input ? input : ""}
            ></textarea>
        </div>
    );
}
