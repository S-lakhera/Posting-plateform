import React,{useEffect,useState} from 'react'
import logo from '../assets/favicon.png'

const Navbar = ({ addPost }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 40) {
                setIsNavbarVisible(false)
            } else {
                setIsNavbarVisible(true)
            }

            setLastScrollY(currentScrollY)
        };

        window.addEventListener('scroll', controlNavbar)

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }
    }, [lastScrollY])

  return (
    <div className={`w-full  px-5 md:px-15  py-3 sm:py-1 flex justify-between pt-2 fixed ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'} backdrop-blur-sm`}>
      <div className='w-10  md:w-12 flex  overflow-hidden items-center'>
        <img src={logo} alt="" className=' w-full rounded-4xl' />
      </div>

      <div className='w-3/5 flex justify-center mt-1 '>
        <div 
        onClick={()=> addPost()}
        className='w-full md:w-3/5 lg:w-2/5  flex items-center pr-1 text-xs sm:text-lg sm:px-4 rounded-2xl border border-gray-400 py-2 text-gray-300 cursor-text  ml-8 shadow-[0_1px_10px_rgb(255,255,255,0.2)] hover:shadow-[0_1px_10px_rgb(255,255,255,0.25)] transition-shadow duration-200'
        >
          <i className="ri-pencil-fill px-2 sm:pr-4 "></i>
          Create a Post
        </div>


      </div>

      <div className='flex gap-4 text-md md:text-2xl items-center '>
        <p ><i className="ri-notification-3-line p-1.5 hover:bg-[#111] cursor-pointer rounded-lg"></i></p>
        <p><i className="ri-user-line p-1.5 hover:bg-[#111] rounded-lg cursor-pointer"></i></p>
      </div>
    </div>
  )
}

export default Navbar
