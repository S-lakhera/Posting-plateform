import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Post from './components/Post'
import Addpost from './components/Addpost'
import posts from './data/data.js'

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingPost, setEditingPost] = useState(null)

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
    </>
  )
}

export default App
