"use client"
import React, { useState } from 'react';
import { usePlayerContext } from '@/components/PlayerContext';
import { songs } from '@/components/songs/Songs';

const Page = () => {
  const { setCurrentSongIndex, setIsPlaying } = usePlayerContext();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter songs based on search term
  const filteredSongs = songs.filter((song) =>
    song.songName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artistName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const playSong = (index: number) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  return (
    <div className='bg-neutral-900 rounded-2xl mt-3 mb-3 ml-2.5 mr-2.5 p-5'>
      <div className="relative">
        <input
          type="text"
          placeholder="Search song"
          className="w-full py-2 pl-10 pr-4 bg-white text-gray-900 rounded-full shadow focus:outline-none focus:ring-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg
          className="absolute top-0 left-0 w-6 h-6 m-2 text-gray-400 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>

      <ul role="list" className="divide-y divide-gray-700 mt-5">
        {filteredSongs.map((song, index) => (
          <li
            key={index}
            className="flex justify-between gap-x-6 py-5 items-center cursor-pointer hover:bg-green-800 p-5 rounded-md"
            onClick={() => playSong(index)} // Handle click event to play the song
          >
            <div className="flex min-w-0 gap-x-4 items-center">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={song.imageUrl}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="leading-6 text-white text-lg font-medium">{song.songName}</p>
                <p className="mt-1 truncate text-xs leading-5 text-white">{song.artistName}</p>
              </div>
            </div>
            {/* Play button */}
            <button className="text-gray-400 hover:text-white focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M3 22v-20l18 10-18 10z" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
