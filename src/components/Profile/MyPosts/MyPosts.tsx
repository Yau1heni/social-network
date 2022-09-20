import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you' like={10}/>
                <Post message='It is my second messages' like={20}/>
                <Post message='Hello' like={35}/>
                <Post message='Good night' like={1}/>
            </div>
        </div>
    );
};

export default MyPosts;