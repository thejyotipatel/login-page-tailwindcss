function App() {
  return (
    <div className='  flex items-center justify-center bg-gray-100'>
      <div className='  mx-auto my-auto bg-white    overflow-hidden md:flex'>
        <div className='hidden md:block md:w-2/3 bg-yellow-200 p-5 h-screen   '>
          <h2 className='text-2xl font-bold text-center mt-4  text-yellow-800'>
            Discover the world’s top Designers & Creatives.
          </h2>
          <div className='mt-10 '>
            <img
              src='./Tablet login-pana.svg'
              alt='Artwork'
              className=' max-w-sm w-full mx-auto '
            />
            <p className='text-xs m-3 text-gray-500'>
              Illustrations by{' '}
              <a href='https://storyset.com/user' className=' underline '>
                Storyset
              </a>
            </p>
          </div>
        </div>
        <div className='w-full  p-8 md:w-2/3'>
          <h2 className='text-2xl font-bold mb-6'>Sign up to Dribbble</h2>
          <form>
            <div className='mb-4'>
              <label className='block text-gray-700'>Name</label>
              <input
                type='text'
                className='mt-1 block w-full border-2 border-pink-100 rounded-md shadow-sm p-1 outline-1 outline-pink-600'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Email</label>
              <input
                type='email'
                className='mt-1 block w-full border-pink-100 rounded-md shadow-sm p-2 outline-1 outline-pink-600 border-2 '
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Username</label>
              <input
                type='text'
                className='mt-1 block w-full  p-2 outline-1 outline-pink-600 border-2  border-pink-100 rounded-md shadow-sm'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700'>Password</label>
              <input
                type='password'
                className='mt-1 block w-full border-pink-100 rounded-md shadow-sm p-2 outline-1 outline-pink-600 border-2 '
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
