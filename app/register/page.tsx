import React from 'react'
import { useFormik } from 'formik'


const RegsiterPage = () => {
  // formik logics
 
  
  return (
    <main className='h-screen flex item items-center justify-center'>
        
        <form className='bg-blue-200 rounded-lg w-1/2'>
<div className='pl-5 mt-5'>
<h1>Register</h1>
<div className='pb-4'>
    <label className='block' htmlFor="name">Name</label>
    <input className='p-2 rounded-md border-2 w-1/2 focus: border-blue-800' type="text" name='name' placeholder='Enter your name' />
    

</div>
<div className='pb-4'>
    <label className='block' htmlFor="email">Email</label>
    <input className='p-2 rounded-md border-2 w-1/2 focus: border-blue-800' type="text" name='email' placeholder='Enter your email' />
    

</div>
<div className='pb-4'>
    <label className='block' htmlFor="password">Password</label>
    <input className='p-2 rounded-md border-2 w-1/2 focus: border-blue-800' type="password" name='password' placeholder='Enter your password' />
    

</div>
<button className='btn bg-blue-800 text-white p-3 mb-5' type='submit'>Button</button>
</div>

        </form>
    </main>
  )
}

export default RegsiterPage

