
import user from '../assets/user.jpg'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'

const Addpost = ({ setIsFormOpen, setPostArr, editingPost = null }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: editingPost || {}
    })
    

    // console.log(errors.content.message);
    const handleFormSubmit = (data) => {
        if (editingPost) {
            setPostArr((prev) =>
                prev.map((post) =>
                    post.id === editingPost.id ? { ...data, id: editingPost.id } : post
                )
            )
        } else {
            setPostArr((prev) => [{ ...data, id: nanoid() }, ...prev])
        }
        reset()
        setIsFormOpen(false)
    }


    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsFormOpen(false)
        }
    }

    return (
        <div
            onClick={handleBackdropClick}
            className='fixed inset-0 z-50 flex items-center justify-center w-full h-full backdrop-blur-xs bg-black/40 ' >
            <div className='w-lg rounded-2xl mx-2  bg-[#111] px-3 md:px-6 py-12 sm:py-8 relative '>

                <div className=' flex flex-col '>
                    <form
                        onSubmit={handleSubmit(handleFormSubmit)}
                        className='flex flex-col gap-y-4 xl:gap-y-8'>
                        <div className='flex w-full gap-3'>
                            <img src={user} alt="" className='w-13 h-13 rounded-full' />
                            <div>
                                {/* <h1 className='text-xl font-bold tracking-wider capitalize'>Pulkit arora </h1> */}
                                <input
                                    
                                    {...register("name",{required:"Name is Bahut Jaruri"})}
                                    type="text"
                                    className='w-full bg-black/30 outline-none pl-5 py-2 rounded-lg text-xl' placeholder='Your Name'
                                />
                                {errors.name && <p className='px-2 text-red-500'>{errors.name.message}</p>}
                                <p className='tetx-xs text-slate-400 px-3'>Visible to everyone</p>
                            </div>
                        </div>
                        <div className='text-left  px-1 flex flex-col gap-y-2'>
                            <textarea
                                {...register("caption", { required: "Caption is mandatory" })}
                                id='name'
                                type="text"
                                className='w-full h-30 bg-black/30 outline-none px-5 py-2 rounded-lg '
                                placeholder='What&apos;s on your mind....'
                            />
                            {errors.caption && <p className='px-2 text-red-500'>{errors.caption.message}</p>}
                        </div>
                        <div className='text-left px-1 flex flex-col gap-y-2'>
                            <input
                                {...register("image")}
                                id='image'
                                type="text"
                                className='w-full bg-black/30 outline-none px-5 py-2 rounded-lg'
                                placeholder='Image URL'
                            />
                        </div>
                        <div className='text-left px-1 flex flex-col gap-y-2'>
                            <input
                                {...register("role")}
                                id='role'
                                type="text"
                                className='w-full bg-black/30 outline-none px-5 py-2 rounded-lg'
                                placeholder='Designation: Developer'
                            />
                        </div>
                        <div className='text-left px-1 flex flex-col gap-y-2'>
                            {/* <label htmlFor="role">Role <i class="ri-image-upload-line"></i></label> */}
                            <input
                                {...register("location")}
                                id='location'
                                type="text"
                                className='w-full bg-black/30 outline-none px-5 py-2 rounded-lg'
                                placeholder='City: Bhopal,MP'
                            />
                        </div>
                        <div className='p-1'>
                            <button
                                className={`w-full bg-white text-black rounded-lg py-2 font-semibold text-lg cursor-pointer `}>
                                {editingPost ? "Update Post" : "Upload Post"}
                            </button>
                        </div>
                    </form>
                </div>
                <div 
                onClick={() => setIsFormOpen(false)}
                className='absolute right-3 text-2xl text-gray-400 top-1'>
                    <i className="ri-close-line cursor-pointer"></i>
                </div>
            </div>
        </div>
    )
}

export default Addpost
