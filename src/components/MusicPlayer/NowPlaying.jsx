import React from 'react';

const NowPlaying = ({ track, albumArt, isPlaying }) => {
  return (
    <div className="w-full max-w-xs bg-[#121212] rounded-lg p-4 flex flex-col">
      <div className="aspect-square w-full mb-4 bg-gray-800 relative overflow-hidden">
        <img 
          src={albumArt}
          alt="Album cover" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <h2 className="text-xl font-bold truncate">{track.title}</h2>
      <p className="text-base text-gray-400 mb-4">{track.artist}</p>
      <div className="mt-2 flex items-center justify-center">
        <p className="text-lg font-bold">{isPlaying ? 'Playing Now' : 'Press Play to Listen'}</p>
      </div>
    </div>
  );
};

export default NowPlaying;
