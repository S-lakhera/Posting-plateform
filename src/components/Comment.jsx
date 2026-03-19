import React from 'react'

const Comment = ({commentingPost}) => {
    console.log(commentingPost);
    
  return (
    <div className='fixed inset-0 w-15 h-55 bg-black/60'>
      <form > 
        <h1>Add Comment</h1>
        <input type="text" />
      </form>
    </div>
  )
}

export default Comment
