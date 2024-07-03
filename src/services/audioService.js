const albumArtApiUrl = import.meta.env.VITE_ALBUM_ART_API_URL;
const defaultAlbumArt = import.meta.env.VITE_DEFAULT_ALBUM_ART;

export const fetchAlbumArt = async (query) => {
  try {
    const response = await fetch(`${albumArtApiUrl}?query=${encodeURIComponent(query)}`);
    const data = await response.json();
    if (data.results && data.results.artwork && data.results.artwork.large) {
      return data.results.artwork.large;
    }
  } catch (error) {
    console.error('Error fetching album art:', error);
  }
  return defaultAlbumArt;
};
