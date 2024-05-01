import React from 'react'
import Sidebar from '@/components/Sidebar'
import Player from '@/components/Player'


const HomeLayout = ({ children }: { children: React.ReactNode | null }) => {
  return (
   
    <main>



      <Sidebar />
      <div className="flex-1 pl-64">
        <Player />
      </div>

      <div className="pl-64">
          {/* Add padding to the left equal to the width of the sidebar */}
          {children}
        </div>

    
    </main>
  
  )
}

export default HomeLayout