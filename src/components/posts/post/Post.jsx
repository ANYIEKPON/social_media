import React, { useState } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import { BsShare } from 'react-icons/bs';
import { FaRegCommentDots } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Comments from '../../comments/Comments';
import "./post.scss"


const Post = ({post}) => {

    const [commentOpen, setCommentOpen] = useState(false);

const liked = true;

const openComment = () => {
    setCommentOpen(pre => !pre)
}

  return (
    <div className='post'>
        <div className='container'>
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt="" />
                        <div className='details'>
                            <Link to={`/profile/${post.userId}`}>
                                <span>{post.name}</span>
                                <span className='date'>1 min ago</span>
                            </Link>
                        </div>
                    </div>
                    <div className="moreInfo"><FiMoreHorizontal /></div>
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                    <div className='infoFlex'>
                        {liked ? <AiTwotoneHeart /> : <AiOutlineHeart />}
                        <p>12 <span>Likes</span></p>
                    </div>
                    <div className='infoFlex' onClick={openComment}>
                        <FaRegCommentDots />
                        <span>12 Comments</span>
                    </div>
                    <div className='infoFlex'>
                        <BsShare />
                        <span>Share</span>
                    </div>
                </div>
                {commentOpen && <Comments />}
        </div>
    </div>
  )
}

export default Post;