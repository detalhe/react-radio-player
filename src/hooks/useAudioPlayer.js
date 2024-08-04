import { useState, useEffect, useRef, useCallback } from 'react';
import { fetchAlbumArt } from '../services/audioService';

const streamUrl = import.meta.env.VITE_STREAM_URL;
const metadataUrl = import.meta.env.VITE_METADATA_URL;

const useAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState({ title: 'Unknown', artist: 'Unknown' });
  const [albumArt, setAlbumArt] = useState(import.meta.env.VITE_DEFAULT_ALBUM_ART);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);
  const eventSourceRef = useRef(null);
  const volumeRef = useRef(1);

  useEffect(() => {
    audioRef.current = new Audio(streamUrl);
    audioRef.current.volume = volumeRef.current;
    audioRef.current.preload = 'auto';
    
    eventSourceRef.current = new EventSource(metadataUrl);
    
    eventSourceRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.streamTitle) {
        const [artist, title] = data.streamTitle.split(' - ');
        setCurrentTrack({ artist, title });
        fetchAlbumArt(data.streamTitle).then(setAlbumArt);
      }
    };

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
    volumeRef.current = volume;
  }, [volume]);

  useEffect(() => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentTrack.title,
        artist: currentTrack.artist,
        album: 'Radio',
        artwork: [
          { src: albumArt, sizes: '96x96', type: 'image/png' },
          { src: albumArt, sizes: '128x128', type: 'image/png' },
          { src: albumArt, sizes: '192x192', type: 'image/png' },
          { src: albumArt, sizes: '256x256', type: 'image/png' },
          { src: albumArt, sizes: '384x384', type: 'image/png' },
          { src: albumArt, sizes: '512x512', type: 'image/png' },
        ]
      });

      navigator.mediaSession.setActionHandler('play', () => {
        audioRef.current.play();
        setIsPlaying(true);
      });

      navigator.mediaSession.setActionHandler('pause', () => {
        audioRef.current.pause();
        setIsPlaying(false);
      });
    }

    document.title = `${currentTrack.title} - ${currentTrack.artist} | Radio`;
  }, [currentTrack, albumArt]);

  const togglePlayPause = useCallback(() => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.src = streamUrl;
      audioRef.current.load();
      audioRef.current.play().catch(error => console.error('Playback failed:', error));
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleVolumeChange = useCallback((e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  }, []);

  const load = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, []);

  return {
    isPlaying,
    currentTrack,
    albumArt,
    volume,
    togglePlayPause,
    handleVolumeChange,
    load
  };
};

export default useAudioPlayer;