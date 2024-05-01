
import Sidebar from '@/components/Sidebar'
import React from 'react'
import Player from '@/components/Player'

const page = ({children}:{children: React.ReactNode}) => {
  return (
    
    <div className="flex items-center justify-center min-h-screen bg-black">
    <main className="text-center  p-8 rounded-lg shadow-xl">
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-green-700 sm:text-5xl">Welcome to Spotify clone</h1>
      <p className="mt-6 leading-7 text-gray-400">Made by Navjot Singh</p>
    </main>
  </div>
  

    
   
  )
}

export default page