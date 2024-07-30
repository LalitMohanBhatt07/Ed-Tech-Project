import {useState} from 'react'
import { AiOutlineEye, AiOutlineInbox } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BsDisplay } from 'react-icons/bs';
import { PiPasswordDuotone } from 'react-icons/pi';
import {toast,Toaster} from "react-hot-toast"

import {Link,useNavigate} from "react-router-dom"

const LoginForm = () => {

  

  const navigate=useNavigate()
  const [formData,setFormData]=useState({
    email:"",
    password:"",
  })

  const [showPassword,setShowPassword]=useState(false)

  const {email,password}=formData

  const handleOnChange=(e)=>{
    setFormData((prevdata)=>({
      ...prevdata,
      [e.target.name]:e.target.value
    }))
  }

  const handleOnSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <form className='mt-6 flex w-full flex-col gap-y-4' onSubmit={handleOnSubmit}>
      <label className='w-full'>
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">Email Address <sup className='text-pink-200'>*</sup>
        </p>
      
      <input 
       required 
       className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
       type='text'
       name='email'
       value={email} 
       onChange={handleOnChange}
       placeholder='Enter email address'
       style={{
        boxShadow:"inset 0px -1px 0px rgba(255,255,255,0.18)"
       }}
      />
      </label>
      
      <label className='relative'>
        <p className="mb-1 text=[0.875rem] leading-[1.375rem] text-richblack-5">Password <sup className='text-pink-200'>*</sup></p>
        <input
          required
          type={showPassword?"text":"password"}
          name='password'
          value={password}
          onChange={handleOnChange}
          placeholder='Enter password'
          style={{
            boxShadow:"inset 0px -1px 0px rgba(255,255,255,0.18)"
          }}
          className='w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5'
        />
        <span className="absolute right-3 top-[38px] z-[10] cursor-pointer" onClick={()=>setShowPassword((prev)=>!prev)}>{showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
        </span>
        <Link to="/forgot-password">
          <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">Forgot password</p>
        </Link>
        
      </label>
      <button className="mt-6 rounded-[8px] bg-yellow-50 py-[12px] font-medium text-richblack-900" type='submit'>
        Sign In
      </button>
    </form>
  )
}


export default LoginForm
