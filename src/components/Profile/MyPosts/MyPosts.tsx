import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostsType} from "../../../redux/State";

type MyPostsPropsType = {
    updateNewPostText: (newText: string) => void
    addPost: () => void
    post: PostsType[]
    newPostText: string
}

const MyPosts = (props: MyPostsPropsType) => {
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        if (newPostElement.current) {
            props.addPost()
            newPostElement.current.value = ''
        }
    }
    const onPostChange = () => {
        let newText = newPostElement.current?.value
        if (newText) props.updateNewPostText(newText)

    }
    const postsElements = props.post.map((p) => <Post
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
                <button onClick={onAddPost}>Add post
                </button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;