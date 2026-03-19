import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Post from './components/Post'
import Addpost from './components/Addpost'
import posts from './data/data.js'
import Comment from './components/Comment.jsx'

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingPost, setEditingPost] = useState(null)
  const [commentingPost, setCommentingPost] = useState(null)
  const [isCommentBoxOpen,setIsCommentBoxOpen] = useState(false)


  const [postArr, setPostArr] = useState(() => {
    const data = localStorage.getItem("posts");
    return data ? JSON.parse(data) : posts
  })

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(postArr))
  }, [postArr])

  const addPost = () => {
    setEditingPost(null)
    setIsFormOpen(true)
  }

  const deletePost = (id) => {
    if (confirm("This post will be deleted permanently.")) {
      let updatedArr = postArr.filter((post) => post.id !== id)
      setPostArr(updatedArr);
    }
  }

  const updatePost = (post) => {
    setEditingPost(post)
    setIsFormOpen(true)
  }

  const handleCommentBox = (id) => {
    setIsCommentBoxOpen(!isCommentBoxOpen)
    let post = postArr.find((p) => p.id === id)
    setCommentingPost(post)
  }

  return (
    <>
      <Navbar addPost={addPost} />
      <div className='w-full sm:w-120 mx-auto p-2  grid grid-cols-1  gap-5 pt-18'>
        {
          postArr.map((post, index) => (

            <Post
              key={index}
              post={post}
              deletePost={deletePost}
              updatePost={updatePost}
              handleCommentBox={handleCommentBox}
            />

          ))
        }
      </div>

      <div className={isFormOpen ? "visible" : "hidden"}>
        <Addpost
          key={editingPost?.id || "new"}
          setIsFormOpen={setIsFormOpen}
          setPostArr={setPostArr}
          editingPost={editingPost}
        />
      </div>
{/* 
      <div >
        <Comment
          commentingPost={commentingPost}
          setIsCommentBoxOpen={setIsCommentBoxOpen}
        />
      </div> */}
    </>
  )
}

export default App
