import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name:'comment',
    initialState:{
        comments:[
            {
                id: 1,
                name: 'Rana',
                text: 'Lorem ipsum jsvhdo',
                replies: [
                    {
                        id: 101,
                        name: 'Alice',
                        text: 'Great point, Rana! What do you think about the latest developments?',
                        replies: [
                            {
                                id: 201,
                                name: 'Bob',
                                text: 'I agree with Alice. The latest developments are quite intriguing. Lorem ipsum dolor sit amet.',
                                replies: [
                                    {
                                        id: 301,
                                        name: 'Charlie',
                                        text: 'I have a different perspective. The recent changes raise some concerns. What are your thoughts?',
                                        replies: [
                                            {
                                                id: 401,
                                                name: 'Emily',
                                                text: 'Charlie, your concerns are valid. Let’s explore possible solutions together.',
                                                replies: [],
                                            },
                                        ],
                                    },
                                    {
                                        id: 302,
                                        name: 'David',
                                        text: "I'm with Rana on this one. Lorem ipsum!",
                                        replies: [],
                                    },
                                ],
                            },
                            {
                                id: 202,
                                name: 'Eva',
                                text: "I'm curious about the future implications of this discussion. Rana, any insights?",
                                replies: [
                                    {
                                        id: 303,
                                        name: 'George',
                                        text: 'Eva, I share your curiosity. Rana, enlighten us with your thoughts on the potential outcomes.',
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 102,
                        name: 'Sophie',
                        text: 'Interesting perspective, Rana! I never thought about it that way.',
                        replies: [
                            {
                                id: 203,
                                name: 'Frank',
                                text: 'Sophie, your response made me reconsider my stance. Lorem ipsum dolor sit amet.',
                                replies: [
                                    {
                                        id: 304,
                                        name: 'Helen',
                                        text: 'Frank, what aspects of Sophie’s perspective had the most impact on your reconsideration?',
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                name: 'Sarah',
                text: 'Lorem ipsum dolor sit amet.',
                replies: [
                    {
                        id: 104,
                        name: 'Jack',
                        text: 'Sarah, I’m intrigued by your comment. Can you elaborate on your thoughts?',
                        replies: [],
                    },
                ],
            },
            {
                id: 3,
                name: 'Michael',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                replies: [],
            },
        ]
    },
    reducers:{
        addReplies: (state, action) => {
            const { commentId, newReplies } = action.payload;

            // Recursively find the comment by its ID
            const findAndModifyComment = (comments) => {
                for (let i = 0; i < comments.length; i++) {
                    const comment = comments[i];

                    if (comment.id === commentId) {
                        // Update the replies of the found comment
                        comment.replies = [...comment.replies, ...newReplies];
                        return;
                    }

                    if (comment.replies && comment.replies.length > 0) {
                        // Continue searching in nested replies
                        findAndModifyComment(comment.replies);
                    }
                }
            };

            findAndModifyComment(state.comments);
        
    },
    }
})

export const {addReplies} = commentSlice.actions;
export default commentSlice.reducer;