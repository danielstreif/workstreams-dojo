export default function reducer(state = {}, action) {
    if (action.type == "GET_COMMENTS") {
        state = {
            ...state,
            comments: action.comments,
        };
    }
    if (action.type == "ADD_COMMENT") {
        state = {
            ...state,
            comments: [...state.comments, action.newComment],
        };
    }

    return state;
}
