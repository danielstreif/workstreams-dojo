export function getComments() {
    return {
        type: "GET_COMMENTS",
        comments: [
            {
                text: "Hi",
                author: "Lukas",
                createdDate: "Fri, 19 Feb 2021 11:01:30 GMT",
            },
            {
                text: "Hello",
                author: "Daniel",
                createdDate: "Fri, 19 Feb 2021 11:02:00 GMT",
            },
        ],
    };
}

export function addComment(input, timestamp) {
    return {
        type: "ADD_COMMENT",
        newComment: {
            text: input,
            author: "Daniel",
            createdDate: timestamp,
        },
    };
}
