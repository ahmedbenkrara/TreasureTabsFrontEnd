import { Link } from 'react-router-dom'
import image from './../../assets/object.png'

export default function Login(){
    return(
        <div className='w-full min-h-screen bg-white sm:flex-col md:flex-row flex-col-reverse flex font-poppins'>
            <div className='sm:order-2 md:order-1 md:w-[60%] flex items-center justify-center sm:p-4 md:p-6'>
                <div className='w-full h-fit'>
                <h1 className='font-roboto font-[500] sm:text-[25px] lg:text-[32px] text-center'>Welcome to <span className=' text-[#2692ff] '>Treasure</span>Tabs</h1>
                <h2 className='mb-[50px] mx-auto sm:max-w-[320px] md:max-w-none text-center sm:text-[13px] lg:text-[15px]'>Discover at the Speed of Thought: Seamlessly Organize, Rapidly Access!</h2>
                
                <div className="sm:w-[300px] md:w-[350px] lg:w-[450px] mx-auto sm:*:text-[12px] lg:*:text-[14px] ">
                    <label htmlFor="" className="mb-2 block">Email</label>
                    <input className='block w-full mx-auto border rounded-[3px] placeholder-[#676879] px-4 py-2 font-roboto' type="email" placeholder='example@example.com'/>
                    <label htmlFor="" className="mt-4 mb-2 block">Password</label>
                    <input className='block w-full mx-auto border rounded-[3px] placeholder-[#676879] px-4 py-2 font-roboto' type="password" placeholder='●●●●●●●●●●●●'/>
                    <button className="block w-full bg-[#2692ff] hover:bg-[#438dd7] text-white mt-[30px] px-4 py-2 rounded-[3px]">Sign in</button>

                <p className='mt-[40px] sm:text-[13px] lg:text-[15px] text-center'>You don't have an account ? <span className='text-[#2692ff]'><Link to="/register">Register</Link></span></p>

                </div>
                </div>
            </div>
            <div className='sm:order-1 md:order-2 sm:mb-5 md:mb-0 md:w-[40%] md:h-screen bg-[#2692ff] flex items-center justify-center py-14'>
                <img className='block object-cover' src={image} alt="" />
            </div>
        </div>
    )
}