import React, {FC} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsPropsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import TextareaControls from '../../common/FormsControls/TextareaControls';

export type PostFormType = {
    newText: string
}

const MyPosts = (props: PostsPropsType) => {
    const addPostHandler = (values: PostFormType) => {
        debugger
        props.addPost(values.newText);
    };

    const postsElements = props.posts.map((p) => <Post
        key={p.id}
        message={p.message}
        like={p.like}
    />);

    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={addPostHandler}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

const maxLength = maxLengthCreator(50)
const AddPostForm: FC<InjectedFormProps<PostFormType>> = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <Field component={TextareaControls}
                       name={'newText'}
                       placeholder={'enter your post'}
                       validate={[required, maxLength]}
                />
                <div>
                    <button>Add post</button>
                </div>
            </form>
    );
};

const AddPostFormRedux = reduxForm<PostFormType>({form: 'profileAddPostForm'})(AddPostForm);

export default MyPosts;