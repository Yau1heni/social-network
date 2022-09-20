import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message='Hi, how are you' like={10}/>
                <Post message='It is my second messages' like={20}/>
                <Post message='Hello' like={35}/>
                <Post message='Good night' like={1}/>
            </div>
        </div>
    );
};

export default MyPosts;