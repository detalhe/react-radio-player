import React from 'react';
import { Volume, Volume1, Volume2, VolumeX } from 'lucide-react';

const VolumeControl = ({ volume, onVolumeChange }) => {
  const getVolumeIcon = () => {
    if (volume === 0) return <VolumeX size={20} />;
    if (volume < 0.33) return <Volume size={20} />;
    if (volume < 0.66) return <Volume1 size={20} />;
    return <Volume2 size={20} />;
  };

  return (
    <div className="w-64 flex items-center justify-end group">
      <div className="mr-2">
        {getVolumeIcon()}
      </div>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={onVolumeChange}
        className="volume-slider w-32 h-1 bg-gray-700 rounded-full appearance-none outline-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, white ${volume * 100}%, #4B5563 ${volume * 100}%)`,
        }}
      />
    </div>
  );
};

export default VolumeControl;
