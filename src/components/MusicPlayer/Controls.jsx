import PropTypes from 'prop-types';
import { Play, Pause } from 'lucide-react';

const Controls = ({ isPlaying, onTogglePlay }) => (
  <div className="flex-1 flex justify-center">
    <button 
      className={`bg-white text-black rounded-full p-3 ${isPlaying ? 'pulse' : ''} play-pause-button`} 
      onClick={onTogglePlay}>
      {isPlaying ? 
        <Pause size={24} className="text-black" strokeWidth={1.5} /> : 
        <Play size={24} className="text-black" strokeWidth={1.5} />
      }
    </button>
  </div>
);

Controls.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onTogglePlay: PropTypes.func.isRequired,
};

export default Controls;