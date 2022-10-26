import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {AppPropsType} from "../../../redux/State";
import {addPostAC, updateNewPostAC} from "../../../redux/profile-reducer";


const MyPosts = (props: AppPropsType) => {
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current && props.dispatch) {
            props.dispatch(addPostAC())
            newPostElement.current.value = ''
        }
    }
    const onPostChange = () => {
        if (newPostElement.current && props.dispatch) {
            let newText = newPostElement.current.value
            props.dispatch(updateNewPostAC(newText))
        }
    }
    const postsElements = props.state.profilePage.posts.map((p) => <Post
        key={p.id}
        message={p.message}
        like={p.like}/>)
    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={onPostChange}>
                    </textarea>
                </div>
                <button onClick={addPost}>Add post
                </button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;