import React from 'react';
import s from "./Post.module.css";

type MessagePropsType = {
    message: string,
    like: number
}

const Post = (props: MessagePropsType) => {
    return (
        <div className={s.item}>
            <img src="" alt="img"/>
            <div>{props.message}</div>
            <div><span>Number of likes: {props.like}</span></div>
        </div>

    );
};

export default Post;