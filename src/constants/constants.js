const API_KEY ='AIzaSyAgCxMKdafjpYkoG5wwc1DHwrAWjp7FDA0' // Replace with your own YouTube Data v3 API key</s>
export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=AIzaSyCrG3Fs5K6litaPv4NjN7mIjeHQaqSjt-c";
export const YOUTUBE_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const SEARCH_ICON = "https://png.pngtree.com/png-clipart/20190921/original/pngtree-search-icon-png-image_4699282.jpg"
export const USER_ICON = "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
export const YOUTUBE_ICON= 'https://cdn-icons-png.flaticon.com/128/1384/1384060.png'
export const YOUTUBE_LOGO = "https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
export const commentData = [
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
];
