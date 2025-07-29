import React, { useState } from 'react'
import assets from '../assets/assets';

const LoginPage = () => {

  const [currState, setCurrState] = useState("Sign up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    if (currState === "Sign up" && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }
  }


  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max:sm:flex-col backdrop-blur-2xl'>

      <img src={assets.logo_big} alt="" className='w-full sm:w-1/2 lg:w-1/3'/>

      <form onSubmit={onSubmitHandler} className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg '>
        <h2 className='font-medium text-2xl flex justify-between items-center'>
          {currState}
          {isDataSubmitted && <img onClick={() => setIsDataSubmitted(false)}  src={assets.arrow_icon} alt="" className='w-5 cursor-pointer'/>
          }
          
        </h2>

        {currState === "Sign up" && !isDataSubmitted && (
          <input onChange={(e) => setFullName(e.target.value)} value={fullName}
          type="text" className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600' placeholder='Full Name' required/>
        )}
        
        {!isDataSubmitted && (
          <>
          <input onChange={(e) => setEmail(e.target.value)} value={email}
          type="email" placeholder='Email Address' required className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600' 
          />
          <input onChange={(e) => setPassword(e.target.value)} value={password}
          type="password" placeholder='Password' required className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600' 
          />
          </>
        )}

        {currState === "Sign up" && isDataSubmitted && (
          <textarea onChange={(e) => setBio(e.target.value)} value={bio}
          rows={4} className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          placeholder='Provide a short bio' required></textarea>
        )
        }

        <button type='submit' className='py-3 bg-gradient-to-r from-green-600 to-green-600 text-white rounded-md cursor-pointer'>
          {currState === "Sign up" ? "Create an Account" : "Login Now"}
        </button>

        <div className='flex items-center gap-2 text-sm text-white'>
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>

        <div className='flex flex-col gap-2'>
          {currState === "Sign up" ? (
            <p className='text-sm text-white'>Already have an account? <span
            onClick={() => setCurrState("Login") && setIsDataSubmitted(false)}
            className='font-medium text-green-500 cursor-pointer ml-0.3'>
              Login here
              </span></p>
          ) : (
            <p className='text-sm text-white '>Create an Account <span
            onClick={() => setCurrState("Sign up")}
            className='font-medium text-green-500 cursor-pointer ml-0.3'>
              Click here
              </span></p>
          )}
        </div>

      </form>

    </div>
  )
}

export default LoginPage