import React, { useState } from 'react'
import user from '../assets/user.jpg'
import Addpost from './Addpost'
import Comment from './Comment'

const Post = ({ post,deletePost,updatePost,handleCommentBox}) => {
  const [isLiked, setIsLiked] = useState(false)
  
  return (
    <div 
    onDoubleClick={() => setIsLiked((prev) => !prev)}
    className='flex flex-col px-3 py-2  items-center border-gray-400/50 border rounded-2xl overflow-hidden shadow-[0_1px_10px_rgb(255,255,255,0.2)] hover:shadow-[0_1px_10px_rgb(255,255,255,0.25)] transition-shadow duration-200 cursor-pointer max-h-[90vh] select-none'>

      <div className='flex items-center w-full rounded-full overflow-hidden p-2 '>
        <img src={user} alt="" className='w-10 rounded-full overflow-hidden' />
        <div>
          <h1 className='capitalize px-3 text-xl font-bold'>{post.name}</h1>
          <p className='text-xs text-gray-400 capitalize px-4'>
            {post.role ? post.role : "Developer"}, &nbsp; <i className="ri-map-pin-2-line pr-0.5"></i>  
            {post.location ? post.location : "Bhopal MP"}
          </p>
        </div>
      </div>

      <div 
      
      className='p-1 px-3 w-full'>
        <p>{post.caption}</p>
      </div>
      {
        post.image &&
        <div className=' overflow-hidden p-2 rounded-2xl w-full'>
        <img
          src={post.image}
          alt="" className='rounded-2xl w-full' />
      </div>
      }

      <div className='w-full px-5 pt-1'>
        <div className='flex w-full text-xl bg-[#030303] rounded-2xl justify-around py-1'>
          {isLiked ?
            <i className="ri-heart-fill active:scale-80 transition-transform duration-150 hover:scale-110 text-red-600" onClick={() => setIsLiked(false)}></i>
            :
            <i className="ri-heart-line active:scale-80 transition-transform duration-150 hover:scale-110 " onClick={() => setIsLiked(true)}></i>
          }

          <i className="ri-save-line active:scale-80 transition-transform duration-150 hover:scale-110"
          onClick={() => handleCommentBox(post.id)}
          ></i>

          <i className="ri-pencil-ai-line active:scale-80 transition-transform duration-150 hover:scale-110 "
            onClick={() => updatePost(post)}
          ></i>

          <i className="ri-delete-bin-5-line active:scale-80 transition-all duration-150 hover:scale-110 " 
          onClick={() => deletePost(post.id)}></i>
        </div>
      </div>
    </div>
  )
}

export default Post
