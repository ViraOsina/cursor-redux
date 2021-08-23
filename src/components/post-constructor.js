import React from 'react';
//npm install react-icons --save
import { IoShareOutline} from 'react-icons/io5';

import  verified  from './verified.svg';

const commentsImage = "https://image.flaticon.com/icons/png/512/134/134783.png";
const likeImage = "https://image.flaticon.com/icons/png/512/1077/1077035.png";
const replyImage = "https://image.flaticon.com/icons/png/512/4140/4140694.png";
function footerValue () {
    return 10;
}

const PostConstructor = (props) => {
    return (
        <div className="post_hw22">
        <header className="header_hw22">
            <div className="header_icon_hw22">
                <img src={ props.authorIcon } alt="authorIcon"/>
            </div>
            <div className="header_content_hw22">
                <div>
                    <span className="name_hw22">{ props.authorName }</span>
                    <span className="verified"><img src={verified} alt="verified" /></span>
                    <span className="header_additional">{props.authorNickname} - {props.date}</span>
                </div>
                <div className="content_hw22">{props.content}</div>
            </div>
        </header>
    
        <main className="body_hw22">
            <div className="image_hw22">
                <img src={props.image} alt="post_image"/> 
            </div>
        </main>
    
        <footer className="footer_hw22">
            <div className="icons_hw22">
                <div className="footer_icon_hw22">
                    <span className="footer_value"> <img src={commentsImage} alt="comment" /> {footerValue ()}</span>
                </div>
                <div className="footer_icon_hw22">
                    <span className="footer_value"> <img src={replyImage} alt="reply" /> {footerValue ()}</span>
                </div>
                <div className="footer_icon_hw22">
                    <span className="footer_value"> <img src={likeImage} alt="like" /> {footerValue ()}</span>
                </div>
                <div className="footer_icon_hw22">
                    <IoShareOutline />
                </div>
            </div>
        </footer>
        </div>
    )
}

export default PostConstructor;