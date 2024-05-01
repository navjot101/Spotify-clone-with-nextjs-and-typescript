"use client"
import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaBackward, FaForward, FaVolumeUp, FaVolumeDown, FaVolumeMute } from 'react-icons/fa';
import { songs } from './songs/Songs';
import { usePlayerContext } from './PlayerContext';

const Player = () => {
  const { currentSongIndex, isPlaying, setCurrentSongIndex, setIsPlaying } = usePlayerContext();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5); 
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const selectedSong = songs[currentSongIndex];

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Autoplay failed:", error);
      });
    } else if (!isPlaying && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = selectedSong.songsrc;
      audioRef.current.load(); 
    }
  }, [currentSongIndex, selectedSong]);
  

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handlePrevious = () => {
    const newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(newIndex);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleDurationChange = () => {
    if (audioRef.current && audioRef.current.duration !== 0) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const formatDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="fixed bottom-0 w-full max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24 bg-neutral-900 shadow-md rounded-lg">
      <div className="flex items-center">
        <img
          src={selectedSong.imageUrl}
          alt={selectedSong.songName}
          className="h-12 w-12 rounded-lg mr-4"
        />
        <div className="flex flex-col">
          <p className="text-white text-lg font-medium">{selectedSong.songName}</p>
          <p className="text-white text-sm opacity-75">{selectedSong.artistName}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-24 flex items-center text-white text-sm">
          {formatDuration(currentTime)} / {formatDuration(duration)}
        </div>
        <input
          type="range"
          min="0"
          max={duration || 100}
          step="0.1"
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-2 bg-gray-200 rounded-lg overflow-hidden"
        />
        <button onClick={handlePrevious}>
          <FaBackward className="text-white h-6 w-6" />
        </button>
        <button onClick={togglePlay}>
          {isPlaying ? <FaPause className="text-white h-6 w-6" /> : <FaPlay className="text-white h-6 w-6" />}
        </button>
        <button onClick={handleNext}>
          <FaForward className="text-white h-6 w-6" />
        </button>
        <div className="flex items-center">
          {volume === 0 ? (
            <FaVolumeMute className="text-white h-6 w-6" onClick={() => setVolume(0.5)} />
          ) : volume <= 0.5 ? (
            <FaVolumeDown className="text-white h-6 w-6" onClick={() => setVolume(1)} />
          ) : (
            <FaVolumeUp className="text-white h-6 w-6" onClick={() => setVolume(0)} />
          )}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 h-2 bg-gray-200 rounded-lg overflow-hidden mx-2"
          />
        </div>
      </div>
      <audio
        ref={audioRef}
        onEnded={handleNext}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleDurationChange}
      />
    </div>
  );
};

export default Player;
