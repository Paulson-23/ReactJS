import React from 'react'

function App(){
  return (
      <>
        <div className='h-screen w-screen flex justify-center items-center bg-gradient-to-r from-black to-blue-500'>
          <div className='h-3/5 w-1/3 bg-black flex flex-col justify-center items-center rounded-lg'>
          <h1 className='text-white font-bold text-3xl'>Sign-Up</h1>
          <form className='w-[80%] h-[80%] flex flex-col justify-center items-center gap-5'>
            <input type='text' name='' id='' placeholder='Name' className='p-3 outline-none active:outline-none focus:outline-blue-500 bg-gray-600 text-white rounded-md w-full'></input>
            <input type='text' name='' id='' placeholder='E-mail' className='p-3 outline-none active:outline-none focus:outline-blue-500 bg-gray-600 text-white rounded-md w-full'></input>
            <input type='tel' name='' id='' placeholder='Phone' className='p-3 outline-none active:outline-none focus:outline-blue-500 bg-gray-600 text-white rounded-md w-full'></input>
            <input type='password' name='' id='' placeholder='Password' className='p-3 outline-none active:outline-none focus:outline-blue-500 bg-gray-600 text-white rounded-md w-full'></input>
            <br></br>
            <button type='submit' className='w-[30%] bg-blue-900 text-white p-3 rounded-md'>Submit</button>
          </form>
          </div>
        </div>
    </>
  )
}

export default App