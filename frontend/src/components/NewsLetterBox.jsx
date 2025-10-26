import React from 'react'

const NewsLetterBox = () => {
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & ger 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores laboriosam animi suscipit vitae facilis nobis natus unde. Est, perspiciatis. Voluptates sint tenetur, quam doloribus sapiente quaerat ut corrupti voluptatum sunt.</p>
        <form className='w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6 border pl-3'>
            <input  className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your E-mail' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
      
    </div>
  )
}

export default NewsLetterBox
