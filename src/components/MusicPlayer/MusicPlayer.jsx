import { memo } from 'react';
import { useMediaQuery } from 'react-responsive';
import Schedule from './Schedule';
import NowPlaying from './NowPlaying';
import Controls from './Controls';
import VolumeControl from './VolumeControl';
import MobilePlayer from './MobilePlayer';
import useAudioPlayer from '../../hooks/useAudioPlayer';
import { Github } from 'lucide-react';

const MemoizedSchedule = memo(Schedule);
const MemoizedNowPlaying = memo(NowPlaying);
const MemoizedControls = memo(Controls);
const MemoizedVolumeControl = memo(VolumeControl);

const MusicPlayer = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { 
    isPlaying, 
    currentTrack, 
    albumArt,
    volume,
    error,
    togglePlayPause,
    handleVolumeChange
  } = useAudioPlayer();

  if (isMobile) {
    return (
      <MobilePlayer
        isPlaying={isPlaying}
        currentTrack={currentTrack}
        albumArt={albumArt}
        volume={volume}
        togglePlayPause={togglePlayPause}
        handleVolumeChange={handleVolumeChange}
      />
    );
  }

  return (
    <div className="bg-black text-white h-screen flex flex-col p-4">
      {error && <div className="bg-red-500 text-white p-2 mb-4 rounded">{error}</div>}
      <div className="flex-1 flex gap-4 min-h-0">
        <MemoizedSchedule />
        <div className="flex-1 bg-[#121212] rounded-lg flex flex-col items-center p-6 overflow-hidden">
          <div className="text-center mt-8">
            <h1 className="radio-title font-bold mb-4 font-grand">Radio</h1>
            <p className="text-sm md:text-base max-w-md mx-auto mb-4">
              Welcome, music lover! Tune in to our 24/7 stream of the best tunes around! 🎵
            </p>
            <a 
              href="https://github.com/detalhe/react-radio-player" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center text-white hover:text-gray-300 transition-colors duration-200"
            >
              <Github size={24} className="mr-2" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <MemoizedNowPlaying track={currentTrack} albumArt={albumArt} isPlaying={isPlaying} />
      </div>
      <div className="h-20 bg-black flex items-center justify-between px-12 mt-4">
        <div className="w-64 flex items-center">
          <div className="w-12 h-12 bg-gray-800 overflow-hidden rounded mr-4 relative">
            <img 
              src={albumArt} 
              alt="Album Art" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-sm">{currentTrack.title}</p>
            <p className="text-xs text-gray-400">{currentTrack.artist}</p>
          </div>
        </div>
        <MemoizedControls isPlaying={isPlaying} onTogglePlay={togglePlayPause} />
        <MemoizedVolumeControl volume={volume} onVolumeChange={handleVolumeChange} />
      </div>
    </div>
  );
};

export default MusicPlayer;