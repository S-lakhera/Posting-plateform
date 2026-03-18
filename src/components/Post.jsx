import React from 'react'
import user from '../assets/user.jpg'

const Post = () => {
  return (
    <div className='flex flex-col px-3 py-2 items-center border-gray-400/50 border rounded-xl overflow-hidden shadow-[0_5px_15px_rgb(255,255,255,0.1)] hover:shadow-[0_5px_15px_rgb(255,255,255,0.15)] transition-shadow duration-200 cursor-pointer'>

        <div className='flex items-center w-full rounded-full overflow-hidden p-2 '>
            <img src={user} alt="" className='w-10 rounded-full overflow-hidden'/>
            <div>
                <h1 className='capitalize px-3 text-xl font-bold'>Pulkit arora</h1>
                <p className='text-xs text-gray-400 capitalize px-4'>Developer, Bhopal MP</p>
            </div>
        </div>

      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, vel provident eius laborum explicabo modi sunt. Id earum commodi explicabo asperiores cum cumque, eaque minus dolorem ipsa in reprehenderit.</p>
      </div>
      <div className='w-90 h-90 overflow-hidden pt-1 rounded-2xl'>
        <img src="https://i.pinimg.com/736x/14/23/9e/14239e825a5e765854b748c684f77d84.jpg" alt="" className='rounded-2xl'/>
      </div>
    </div>
  )
}

export default Post
