import { useState } from 'react'
import reactLogo from './assets/react.svg'
import test from './assets/object.png'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full min-h-screen bg-white flex font-poppins'>
      <div className='w-[60%] flex items-center justify-center p-6'>
        <div className='w-full h-fit'>
          <h1 className='font-roboto font-[500] text-[32px] text-center'>Welcome to <span className=' text-[#2692ff] '>Treasure</span>Tabs</h1>
          <h2 className='mb-[50px] text-center text-[15px]'>Discover at the Speed of Thought: Seamlessly Organize, Rapidly Access!</h2>
          
          <div className="w-[450px] mx-auto">
            <label htmlFor="" className="text-[14px] mb-2 block">Email</label>
            <input className='block w-full mx-auto border rounded-[3px] placeholder-[#676879] px-4 py-2 text-[14px] font-roboto' type="email" placeholder='example@example.com'/>
            <label htmlFor="" className="mt-4 text-[14px] mb-2 block">Password</label>
            <input className='block w-full mx-auto border rounded-[3px] placeholder-[#676879] px-4 py-2 text-[14px] font-roboto' type="password" placeholder='●●●●●●●●●●●●'/>
            <button className="block w-full bg-[#2692ff] hover:bg-[#438dd7] text-white mt-[30px] text-[14px] px-4 py-2 rounded-[3px]">Sign in</button>

           <p className='mt-[40px] text-[15px] text-center'>You don't have an account ? <span className='text-[#2692ff]'>Register</span></p>

          </div>
        </div>
      </div>
      <div className='w-[40%] h-screen bg-[#2692ff] flex items-center justify-center'>
        <img className='block w-auto object-cover ' src={test} alt="" />
      </div>
    </div>
  )
}

export default App
