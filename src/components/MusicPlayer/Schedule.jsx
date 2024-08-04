import PropTypes from 'prop-types';
import { Music, Mic, Radio, Headphones, Guitar, Disc } from 'lucide-react';

const scheduleData = [
  { genre: "Rock", show: "Classic Rock Hour", icon: Guitar },
  { genre: "Pop", show: "Top 40 Hits", icon: Mic },
  { genre: "Hip Hop", show: "Rap & Rhythm", icon: Headphones },
  { genre: "Electronic", show: "EDM Mix", icon: Disc },
  { genre: "Jazz", show: "Smooth Jazz", icon: Music },
  { genre: "Country", show: "Nashville Nights", icon: Radio },
];

const ScheduleItem = ({ genre, show, Icon }) => (
  <div className="flex items-center mb-3 p-2 rounded-lg">
    <div className="w-10 h-10 bg-white mr-3 flex-shrink-0 rounded-full flex items-center justify-center">
      <Icon size={24} className="text-black" />
    </div>
    <div className="overflow-hidden">
      <h3 className="text-sm font-bold truncate text-white">{genre}</h3>
      <p className="text-xs text-gray-500 truncate">{show}</p>
    </div>
  </div>
);

ScheduleItem.propTypes = {
  genre: PropTypes.string.isRequired,
  show: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
};

const Schedule = () => (
  <div className="w-80 bg-[#121212] rounded-lg p-4 overflow-y-auto custom-scrollbar">
    <h2 className="text-lg font-bold mb-3">Playing Today</h2>
    {scheduleData.map((item, index) => (
      <ScheduleItem 
        key={index} 
        genre={item.genre} 
        show={item.show} 
        Icon={item.icon}
      />
    ))}
  </div>
);

export default Schedule;