import Layout from '../../components/auth/AuthLayout'
import { Link, useNavigate  } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStatus } from './../../redux/auth'
import { login } from './../../redux/auth/actions'

export default function Login(){
    const navigate = useNavigate()
    const email = useRef(null)
    const password = useRef(null)
    const [validate, setValidate] = useState('')
    const dispatch = useDispatch()
    const { errorMessage, status } = useSelector((state) => state.auth)

    useEffect(() => {
        dispatch(setStatus('idle'))
        return () => {
            dispatch(setStatus('idle'))
            console.log('unmount')
        }
    }, [dispatch])

    useEffect(() => {
        if (status == 'success') {
            // <Navigate to="/register"/>
            navigate('/register')
        }
    }, [status])

    const handleSubmit = async(e) => {
        e.preventDefault()

        const data = {
            email: email.current.value,
            password: password.current.value,
        }

        if(isFormValidated())
            dispatch(login(data))
    }

    const isFormValidated = () => {
        const emailPattern = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")

        if(!emailPattern.test(email.current.value)){
            setValidate('Email isn\'t valid !')
            return false
        }

        if(password.current.value.trim().length == 0){
            setValidate('Please enter your password !')
            return false
        }

        setValidate('')
        return true
    }

    return(
        <Layout>
            <form onSubmit={ handleSubmit } className="sm:w-[300px] md:w-[350px] lg:w-[450px] mx-auto sm:*:text-[12px] lg:*:text-[14px] ">
                {status === 'failed' && <div className='text-red-500 mb-4'>{ errorMessage }</div>}
                {validate != null && <div className='text-red-500 mb-4'>{ validate }</div>}

                <label htmlFor="" className="mb-2 block">Email</label>
                <input ref={ email } className='block w-full mx-auto border rounded-[3px] placeholder-[#676879] px-4 py-2 font-roboto' type="email" placeholder='example@example.com'/>
                <label htmlFor="" className="mt-4 mb-2 block">Password</label>
                <input ref={ password } className='block w-full mx-auto border rounded-[3px] placeholder-[#676879] px-4 py-2 font-roboto' type="password" placeholder='●●●●●●●●●●●●'/>
                <button type="submit" className="block w-full bg-[#2692ff] hover:bg-[#438dd7] text-white mt-[30px] px-4 py-2 rounded-[3px]">Sign in</button>

                <p className='mt-[40px] sm:text-[13px] lg:text-[15px] text-center'>You don't have an account ? <span className='text-[#2692ff]'><Link to="/register">Register</Link></span></p>
            </form>
        </Layout>
    )
}