import React from 'react'
import Navbar from './components/Navbar'
import Post from './components/Post'

const App = () => {
  return (
    <>
      <Navbar/>
      <div className='w-full p-5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </>
  )
}

export default App
