'use client';
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
const {status, data: session} = useSession();


return (
    <div className='navbar flex bg-slate-600 text-white p-5'>
        <Link href="/" className=' navbar-start'>Next.js</Link>
        <Link className='navbar-center px-10' href="/users">Users</Link>
        <Link className='navbar-center mr-2' href="/products">Products</Link>
        
        { status === 'loading' && <div className=''>Loading..</div> }
        { status === 'authenticated' && <div className='n navbar-end'>
        <Link href="/users">{ session.user!.name } </Link>  
          <Link href="/api/auth/signout" className='pl-10 mr-10'>Sign out</Link>
        </div>}
        { status === 'unauthenticated' && <Link href="/api/auth/signin">Sign in</Link>}
        { status === 'unauthenticated' && <Link href="/register" className='pl-6'>Register</Link>}
        
    </div>
  )
}

export default NavBar