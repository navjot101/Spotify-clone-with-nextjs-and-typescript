"use client"
import React, { createContext, useContext, useState } from 'react';

// Define the shape of the context
interface PlayerContextType {
  currentSongIndex: number;
  isPlaying: boolean;
  setCurrentSongIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}


const PlayerContext = createContext<PlayerContextType>({
  currentSongIndex: 0,
  isPlaying: false,
  setCurrentSongIndex: () => {},
  setIsPlaying: () => {},
});


export const usePlayerContext = () => useContext(PlayerContext);


export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <PlayerContext.Provider value={{ currentSongIndex, isPlaying, setCurrentSongIndex, setIsPlaying }}>
      {children}
    </PlayerContext.Provider>
  );
};
