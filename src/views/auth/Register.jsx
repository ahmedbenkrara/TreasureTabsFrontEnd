import { Link, useNavigate } from 'react-router-dom'
import Layout from '../../components/auth/AuthLayout'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from './../../redux/auth/actions'
import { setStatus } from './../../redux/auth'

export default function Register(){
    const navigate = useNavigate()
    const [validate, setValidate] = useState(null)
    const { errorMessage, status } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const firstName = useRef(null)
    const lastName = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    
    useEffect(() => {
        dispatch(setStatus('idle'))
        return () => {
            dispatch(setStatus('idle'))
        }
    }, [dispatch])


    useEffect(() => {
        if(status == 'success'){
            navigate('/login')
            dispatch(setStatus('idle'))
        }
    }, [status])
    

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            password: password.current.value,
        }

        if(areInputsValidated())
            dispatch(register(data))
    }

    const areInputsValidated = () => {
        const emailPattern = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")

        if(firstName.current.value.trim().length < 3){
            setValidate('Please enter a valid first name !')
            return false
        }

        if(lastName.current.value.trim().length < 3){
            setValidate('Please enter a valid last name !')
            return false
        }

        if(!emailPattern.test(email.current.value)){
            setValidate('Please enter a valid email !')
            return false
        }

        if(password.current.value.trim().length < 8){
            setValidate('Password should at least contain 8 characters !')
            return false
        }

        setValidate(null)
        return true
    }

    return(
        <Layout>
            <form onSubmit={ handleSubmit } className="block sm:w-[300px] md:w-[350px] lg:w-[450px] mx-auto sm:*:text-[12px] lg:*:text-[14px] ">
                {status === 'failed' && <div className='text-red-500 mb-4'>{ errorMessage }</div>}
                {validate != null && <div className='text-red-500 mb-4'>{ validate }</div>}
                
                <label htmlFor="" className="mb-2 block">First name</label>
                <input ref={ firstName } className='block w-full mx-auto border rounded-[3px] placeholder-[#676879] px-4 py-2 font-roboto' type="text" placeholder='jasmine'/>

                <label htmlFor="" className="mt-4 mb-2 block">Last name</label>
                <input ref={ lastName } className='block w-full mx-auto border rounded-[3px] placeholder-[#676879] px-4 py-2 font-roboto' type="text" placeholder='patel'/>

                <label htmlFor="" className="mt-4 mb-2 block">Email</label>
                <input ref={ email } className='block w-full mx-auto border rounded-[3px] placeholder-[#676879] px-4 py-2 font-roboto' type="email" placeholder='example@example.com'/>

                <label htmlFor="" className="mt-4 mb-2 block">Password</label>
                <input ref={ password } className='block w-full mx-auto border rounded-[3px] placeholder-[#676879] px-4 py-2 font-roboto' type="password" placeholder='●●●●●●●●●●●●'/>
                
                <button type="submit" className="block w-full bg-[#2692ff] hover:bg-[#438dd7] text-white mt-[30px] px-4 py-2 rounded-[3px]">Sign up</button>

                <p className='mt-[40px] sm:text-[13px] lg:text-[15px] text-center'>You already have an account ? <span className='text-[#2692ff]'><Link to="/login">Login</Link></span></p>
            </form>
        </Layout>
    )
}