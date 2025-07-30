import React, { use } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import assets from '../assets/assets';

const ProfilePage = () => {

  const [selectedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();
  const [name, setName] = useState("Martin Johnson"); 
  const [bio, setBio] = useState("Hi Everyone, I am Using AvoChat.");

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <div className='min-h-screen bg-cover bg-no-repeat flex items-center justify-center'>
      <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 
      border-2 border-gray-500 flex items-center justify-between max-sm:flex-col-reverse rounded-lg'>
        <form  onSubmit={handleSubmit} className='flex flex-col gap-5 p-10 flex-1'>
          <h3 className='text-lg'>Profile details</h3>
          <label htmlFor="avatar" className='flex items-center gap-3 cursor-pointer'>
            <input onChange={(e) => setSelectedImg(e.target.files[0])} type="file" id='avatar' accept='.png, .jpg, .jpeg' hidden />
            <img src={selectedImg ? URL.createObjectURL(selectedImg) : assets.avatar_icon} alt="" className={`w-12 h-12 ${selectedImg && 'rounded-full'}`}/>
            Upload Image Profile
          </label>
          <input onChange={(e) => setName(e.target.value)} value={name}
          type="text" placeholder='Your name' required 
          className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600'/>
          <textarea onChange={(e) => setBio(e.target.value)} 
          value={bio} placeholder='Your bio'
          className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600' rows={4}>
          </textarea>
          <button type='submit'
          className='bg-gradient-to-r from-green-700 to-green-700 text-white p-2 rounded-full text-lg cursor-pointer'>
            Save
          </button>
        </form>
        <img className='max-w-45 aspect-sqaure rounded-full max-10 max-sm:mt-10' src={assets.logo_icon} alt="" />
      </div>
    </div>
  )
}

export default ProfilePage