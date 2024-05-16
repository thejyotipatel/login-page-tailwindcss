// src/App.jsx
import React, { useState } from 'react'

function App() {
  const [username, setUsername] = useState('')
  const [isUsernameTaken, setIsUsernameTaken] = useState(false)

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
    setIsUsernameTaken(e.target.value === 'John') // Simulate username check
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden md:flex'>
        <div className='hidden md:block md:w-1/2 bg-yellow-200 p-8'>
          <h2 className='text-2xl font-bold mb-4'>
            Discover the world’s top Designers & Creatives.
          </h2>
          <div className='mt-10'>
            <img
              src='https://via.placeholder.com/400'
              alt='Artwork'
              className='w-full rounded-lg'
            />
            <p className='text-xs mt-2 text-gray-500'>Art by Peter Tarka</p>
          </div>
        </div>
        <div className='w-full md:w-1/2 p-8'>
          <h2 className='text-2xl font-bold mb-6'>Sign up to Dribbble</h2>
          <form>
            <div className='mb-4'>
              <label className='block text-gray-700'>Name</label>
              <input
                type='text'
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Email</label>
              <input
                type='email'
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Username</label>
              <input
                type='text'
                value={username}
                onChange={handleUsernameChange}
                className={`mt-1 block w-full ${
                  isUsernameTaken ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm`}
              />
              {isUsernameTaken && (
                <p className='text-red-500 text-sm mt-1'>
                  Username has already been taken
                </p>
              )}
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Password</label>
              <input
                type='password'
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm'
              />
            </div>
            <div className='mb-4 flex items-start'>
              <input type='checkbox' className='mt-1 mr-2' />
              <label className='text-gray-700'>
                Creating an account means you’re okay with our Terms of Service,
                Privacy Policy, and our default Notification Settings.
              </label>
            </div>
            <button
              type='submit'
              className='bg-pink-600 text-white w-full py-2 rounded-md'
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
