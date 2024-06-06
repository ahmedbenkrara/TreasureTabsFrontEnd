import image from './../../assets/object.png'

export default function Layout({ children }){
    return(
        <div className='w-full min-h-screen bg-white sm:flex-col md:flex-row flex-col-reverse flex font-poppins'>
            <div className='sm:order-2 md:order-1 md:w-[60%] flex items-center justify-center sm:p-4 md:p-6'>
                <div className='w-full h-fit'>
                    <h1 className='font-roboto font-[500] sm:text-[25px] lg:text-[32px] text-center'>Welcome to <span className=' text-[#2692ff] '>Treasure</span>Tabs</h1>
                    <h2 className='mb-[50px] mx-auto sm:max-w-[320px] md:max-w-none text-center sm:text-[13px] lg:text-[15px]'>Discover at the Speed of Thought: Seamlessly Organize, Rapidly Access!</h2>
                
                    { children }
                </div>
            </div>
            <div className='sm:order-1 md:order-2 sm:mb-5 md:mb-0 md:w-[40%] md:min-h-screen bg-[#2692ff] flex items-center justify-center py-14'>
                <img className='block object-cover' src={image} alt="" />
            </div>
        </div>
    )
}