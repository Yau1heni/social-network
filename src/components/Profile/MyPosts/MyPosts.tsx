import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {AppPropsType} from "../../../redux/State";

const MyPosts = (props: AppPropsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if (newPostElement.current && props.addPostCallback) {
            props.addPostCallback(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }
    let onPostChange = () => {
        if (newPostElement.current && props.updateNewPostText) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
        }
    }
    let postsElements = props.state.profilePage.posts.map((p) => <Post
        key={p.id}
        message={p.message}
        like={p.like}/>)
    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement}
                               onChange={onPostChange}
                               ></textarea></div>
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