import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Post from './components/Post'
import Addpost from './components/Addpost'
import { nanoid } from 'nanoid'

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingPost, setEditingPost] = useState(null)
  const posts = [
  
  {
    id: nanoid(),
    name: "Ananya Sharma",
    caption: "The architecture in Indore is truly underrated. Spent the weekend exploring Rajwada and the local food scene. Highly recommend a visit! 🏛️",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1000&auto=format&fit=crop",
    role: "UI/UX Designer",
    location: "Indore, MP"
  },
  {
    id: nanoid(),
    name: "Vikram Singh",
    caption: "Consistency is key. 3 months of regular gym and high-protein diet is finally showing results. Staying focused on the bulk! 💪 #FitnessJourney #GymRat",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa200181?q=80&w=1000&auto=format&fit=crop",
    role: "Data Scientist",
    location: "Bangalore, KA"
  },
  {
    id: nanoid(),
    name: "Ishita Verma",
    caption: "Nature is the best physician. Taking a small break from the screens to recharge in the mountains. Sometimes you need to disconnect to reconnect.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
    role: "Software Engineer",
    location: "Manali, HP"
  },
  {
    id: nanoid(),
    name: "Arjun Mehta",
    caption: "Deep dive into philosophical music today. Listening to Piyush Mishra always brings a different perspective to life. 'Ik bagal mein chand hoga...' hits different. 🎶",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
    role: "Content Creator",
    location: "Mumbai, MH"
  },
  {
    id: nanoid(),
    name: "Arvind Shukla",
    caption: "Just finished setting up the MERN stack for my new project! Building with React and Vite feels so much faster. Can't wait to deploy this one. #WebDev #CodingLife",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
    role: "Full Stack Developer",
    location: "Bhopal, MP"
  },
];
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
