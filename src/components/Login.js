import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true)
  const toggleSignInForm=()=>{
   setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
       <Header/>
          <div>
            <img className='absolute'src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='backgroundimage'/>
            </div> 
       <form className='w-3/12 absolute p-12 bg-slate-800 my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-90'>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm?'Sign In':'Sign Up'}</h1>
      {!isSignInForm && <input type='text' placeholder='Full Name' className=' p-4 my-4 w-full bg-gray-700'/>}
      <input type='text'placeholder='Email address' className='p-4 my-4 w-full bg-gray-700'/>
      <input type='password' placeholder='password' className='p-4 my-4 w-full bg-gray-700'/>
      
      <p className=' py-4 cursor-pointer'><a href='#' onClick={toggleSignInForm}> {isSignInForm?'New to Netflix? Sign up now':'Already registered? Sign Up Now.'}</a></p>
  <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm?'Sign In':'Sign Up'}</button>
       </form>
    </div>
  )
}

export default Login