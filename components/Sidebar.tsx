import React from 'react'
import{
    HomeIcon,
     MagnifyingGlassIcon,
    RectangleStackIcon,
    PlusCircleIcon
 }from "@heroicons/react/24/outline";
 import {SongProp,songs} from './songs/Songs';
import Box from './Box';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className='text-gray-500 fixed h-screen w-64 bg-black flex flex-col  '>
     
      <div className='bg-neutral-900 rounded-2xl  mt-3 mb-3 ml-2.5 mr-2.5'>

      <div className='mr-auto '>
      <img src={'https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg'} alt="Spotify Logo" className="w-50 h-28" />
      </div>

      <Box>
        <div>
        </div>
      </Box>

    <ul className='flex flex-col p-5 space-y-1'>
       <li>
        <Link href="/">
         <button className="flex items-center space-x-2 mb-3 hover:text-white ">
         <HomeIcon className="h-7 w-7" />
          <p>Home</p>
         </button>
         </Link>
         
        </li> 

      <li>
      <Link href="/search">
  <button className="flex items-center space-x-2 mb-3 hover:text-white">
    <MagnifyingGlassIcon className="h-7 w-7" />
    <p>Search</p>
  </button>
</Link>
    </li>
      
      

    </ul>

    </div>

<ul className="list-none p-0 overflow-y-auto h-full bg-neutral-900 rounded-2xl mb-3 ml-2.5 mr-2.5"> {/* Tailwind classes for styling */}
<li className="flex  hover:text-white">
    <button className='flex justify-center px-5  pt-2 pb-4 mt-2'>
        <RectangleStackIcon className="h-7 w-7" />
        <p>Your Library</p>
    </button>
    </li>
     
      {songs.map((song) => (
        <button className="flex items-center space-x-2 hover:text-white">
        <li key={song.index} className="flex items-center py-2 px-4 "> {/* Tailwind classes for styling */}
          <img src={song.imageUrl} alt={song.songName} className="h-10 w-10 mr-4 rounded-lg" />
          <div className="flex flex-col">
            <p className="text-lg font-medium">{song.songName}</p>
            <p className="text-gray-600 text-sm">{song.artistName}</p>
          </div>
        </li>
        </button>
      ))}
    </ul>




     </div>
  )
}

export default Sidebar