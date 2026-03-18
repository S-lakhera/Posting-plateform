import React from 'react'
import logo from '../assets/favicon.png'

const Navbar = () => {
  return (
    <div className='w-full gap-x-5 px-5 py-3 sm:py-1 flex justify-between mt-1'>
      <div className='w-10 md:w-12  rounded-4xl overflow-hidden '>
        <img src={logo} alt="" className='w-full '/>
      </div>

        <div className='w-3/5 flex justify-center mt-1'>
            <div className='w-full md:w-3/5 lg:w-2/5  flex items-center px-4 rounded-2xl border py-2 text-gray-400 cursor-text bg-[#111]'>
                <i className="ri-pencil-fill pr-4"></i>Create a Post
            </div>
            

        </div>

        <div className='flex gap-4 text-2xl items-center '>
            <p ><i className="ri-notification-3-line p-1.5 hover:bg-[#111] cursor-pointer rounded-lg"></i></p>
            <p><i className="ri-user-line p-1.5 hover:bg-[#111] rounded-lg cursor-pointer"></i></p>
        </div>
    </div>
  )
}

export default Navbar
