import React from 'react';
import { Play, Pause } from 'lucide-react';
import NowPlaying from './NowPlaying';

const MobilePlayer = ({ isPlaying, currentTrack, albumArt, togglePlayPause }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white p-4 overflow-y-auto">
      <div className="flex-shrink-0 text-center py-4">
        <h1 className="radio-title font-bold font-grand text-4xl">Radio</h1>
      </div>
      
      <div className="flex-grow flex items-center justify-center">
        <NowPlaying track={currentTrack} albumArt={albumArt} isPlaying={isPlaying} />
      </div>
      
      <div className="flex-shrink-0 py-4">
        <div className="flex justify-center">
          <button 
            className={`bg-white text-black rounded-full p-4 ${isPlaying ? 'pulse' : ''} play-pause-button`} 
            onClick={togglePlayPause}>
            {isPlaying ? 
              <Pause size={32} className="text-black" strokeWidth={1.5} /> : 
              <Play size={32} className="text-black" strokeWidth={1.5} />
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobilePlayer;
