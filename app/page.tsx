

import { getServerSession } from 'next-auth'
import ProductCard from './components/ProductCard'
import { authOption } from './api/auth/[...nextauth]/route'





export  default async function Home() {
  const session = await getServerSession(authOption);
  return (
    
    <main>
      <h1>Hello there, { session && <span>{session.user!.name}</span>}</h1>
      


      
      <ProductCard />
      </main>
    
      
  )
}
