import React, { useContext, useState } from 'react'
import assets from '../assets/assets';
import { AuthContext } from '../../context/AuthContext';

const LoginPage = () => {

  const [currState, setCurrState] = useState("Sign up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const {login} = useContext(AuthContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    if (currState === "Sign up" && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }

    login(currState === "Sign up" ? 'signup' : 'login', {fullName, email, password, bio});
  }


  return (
  <div className='min-h-screen bg-cover bg-center flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 px-4 py-6 backdrop-blur-2xl'>
    
    <img
      src={assets.logo_big}
      alt=""
      className='w-4/5 sm:w-1/2 lg:w-1/3 max-w-xs sm:max-w-none'
    />

    <form
      onSubmit={onSubmitHandler}
      className='w-full max-w-sm sm:max-w-md border-2 bg-white/10 text-white border-gray-500 p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 rounded-lg shadow-lg'
    >
      <h2 className='font-medium text-xl sm:text-2xl flex justify-between items-center'>
        {currState}
        {isDataSubmitted && (
          <img
            onClick={() => setIsDataSubmitted(false)}
            src={assets.arrow_icon}
            alt=""
            className='w-5 cursor-pointer'
          />
        )}
      </h2>

      {currState === "Sign up" && !isDataSubmitted && (
        <input
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          type="text"
          placeholder='Full Name'
          required
          className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600'
        />
      )}

      {!isDataSubmitted && (
        <>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder='Email Address'
            required
            className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600'
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder='Password'
            required
            className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600'
          />
        </>
      )}

      {currState === "Sign up" && isDataSubmitted && (
        <textarea
          onChange={(e) => setBio(e.target.value)}
          value={bio}
          rows={4}
          placeholder='Provide a short bio'
          required
          className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
        ></textarea>
      )}

      <button
        type='submit'
        className='py-3 bg-gradient-to-r from-green-600 to-green-600 text-white rounded-md cursor-pointer'
      >
        {currState === "Sign up" ? "Create an Account" : "Login Now"}
      </button>

      <div className='flex items-center gap-2 text-sm text-white'>
        <input type="checkbox" />
        <p>Agree to the terms of use & privacy policy.</p>
      </div>

      <div className='text-sm text-white'>
        {currState === "Sign up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => {
                setCurrState("Login");
                setIsDataSubmitted(false);
              }}
              className='font-medium text-green-500 cursor-pointer'
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create an Account{" "}
            <span
              onClick={() => setCurrState("Sign up")}
              className='font-medium text-green-500 cursor-pointer'
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  </div>
);

}

export default LoginPage