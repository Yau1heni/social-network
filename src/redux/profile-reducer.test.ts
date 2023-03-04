import {addPostAC, ProfilePageType, profileReducer, setUserStatusAC} from './profile-reducer';

let startState = {} as ProfilePageType
beforeEach(() => {
    startState = {
        posts: [
            {id: '1', message: 'Hi, how are you?', like: 3},
            {id: '2', message: 'It is my second messages', like: 5},
            {id: '3', message: 'Hello', like: 67},
            {id: '4', message: 'Hi, how are you?', like: 33},
            {id: '5', message: 'Good night', like: 9},
        ],
        profile: {
            aboutMe: '',
            contacts: {
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: '',
            },
            lookingForAJob: false,
            lookingForAJobDescription: '',
            fullName: '',
            userId: 0,
            photos: {
                small: '',
                large: '',
            }
        },
        status: ""
    }
})
test('Add post test',() => {
    const newPost = 'newPost'
    const endState = profileReducer(startState, addPostAC(newPost))
    expect(endState.posts.length).toBe(6)
    expect(endState.posts[0].message).toBe('newPost')
})

test('Set new status', () => {
    const endState = profileReducer(startState, setUserStatusAC('newStatus'))
    expect(endState.status).toBe('newStatus')
})
