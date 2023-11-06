import React, { Suspense } from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

interface Props {
  searchParams: { sortOrder: string } 
}


const UsersPage = async ({ searchParams: {sortOrder} }: Props) => {

  return (
    <>
    <h1>Users</h1>
    
<Link className='btn' href="/users/new">New user</Link>

    <UserTable sortOrder={sortOrder} />
   
    
    
    
    
    </>
  )
}

export default UsersPage