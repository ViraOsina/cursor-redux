const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const YODA_IMAGE = "https://www.liveabout.com/thmb/OHyay7RPSFHxasgJ9_Okz1Jhu-Q=/1167x1167/smart/filters:no_upscale()/yoda-56a8f97a3df78cf772a263b4.jpg";
const BABY_YODA_IMAGE = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bbyoda-1575303784.jpeg?resize=980:*";

const defaultState = {
    posts: [
        {
            id: Math.floor(Math.random() * Date.now()),
            authorName: "Anakin Skywalker",
            authorIcon: ANAKIN_IMAGE,
            authorNickname: "@dart_vader",
            content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
            image: RAY_IMAGE,
            date: "26 Feb"
        },
        {
            id: Math.floor(Math.random() * Date.now()),
            authorName: "Yoda",
            authorIcon: YODA_IMAGE,
            authorNickname: "@yoda",
            content: "Have you seen my little one's movie debut?",
            image: BABY_YODA_IMAGE,
            date: "01 May"
        }
    ]
};

export default function reducer(state = defaultState, action) {

    switch (action.type) {
        case 'new-post':
            return {
                ...state,
                posts: [
                    {
                        ...action.payload,
                        id: Date.now(),
                        date: `${Date().toString().slice(4, 10)}`,
                        comments: 0,
                        retweets: 0,
                        likes: 0,
                        
                    },
                    ...state.posts
                ],
            }
        default:
            return state
    }
}