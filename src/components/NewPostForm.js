import React from 'react';
import authorsList from '../redux/authorsList';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function NewPostForm() {

    const defaultContent = 'May the force be with you!';
    const defaultImage = 'https://source.unsplash.com/600x400/?star-wars';
    const defaultAuthor = authorsList;
    
    const [postContent, setPostContent] = useState(defaultContent);
    const [postImage, setPostImage] = useState(defaultImage);
    const [postAuthor, setPostAuthor] = useState(defaultAuthor);
    
    const dispatch = useDispatch();

    const handleInput = e => {
        const {name, value} = e.target;
        switch (name){
            case 'CONTENT': 
                setPostContent(value);
                break;
            case 'POST_IMAGE': 
                setPostImage(value);
                break;
            case 'POST_AUTHOR': 
                setPostAuthor(authorsList[value]);
                break;
            default: 
                break;
        }
    }

    const handleClick = e => {
        e.preventDefault();
        dispatch(dispatchAction);
    }

    const dispatchAction = {
        type: 'new-post',
        payload: {
            content: postContent, 
            image: postImage,
            ...postAuthor
        }
    };


    return (
        <div className="new_post_container">
            <div className="new_post">
                <h1>Create new post</h1>
                <form>
                    <label className="new_post_input">
                        Your name
                        <select name='POST_AUTHOR' onInput={handleInput} value={postAuthor} className="select_name">
                            <option value="@Yoda" className="name_option">
                                @Yoda
                            </option>
                            <option value="@dart_vader" className="name_option">
                                @dart_vader
                            </option>
                            <option value="@Han_Solo" className="name_option">
                                @Han_Solo
                            </option>
                        </select>
                    </label>

                    <label className="new_post_input">
                        Type your text
                        <textarea 
                            name='CONTENT' 
                            onInput={handleInput} 
                            value={postContent} 
                            placeholder='What is new?'>
                        </textarea>
                    </label>
                    <label className="new_post_input">
                        Link to your image
                        <input 
                            type="text" 
                            name="POST_IMAGE" 
                            onInput={handleInput} 
                            value={postImage} 
                            placeholder="https://image.com"/>
                    </label>
                    <button className="new_post_button" onClick={handleClick}>
                        Publish
                    </button>
                </form>
            </div>
        </div>
    );
}

export default NewPostForm;