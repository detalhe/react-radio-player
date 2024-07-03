<div align="center">

# React Radio Player

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A modern, responsive web radio player built with React, Vite, and Tailwind CSS. 

![React Radio Player UI](https://i.ibb.co/BtsMxX9/localhost-5173-2.png)

Demo: [reactradio.netlify.app](https://reactradio.netlify.app)

</div>

## Features

- 🎶 Live streaming audio playback (supports Zeno Radio stations)
- 🔄 Real-time metadata updates
- 🖼️ Dynamic album art fetching
- 📅 Daily schedule display
- 🔊 Volume control with visual feedback
- 🎚️ Play/Pause functionality
- 🎨 Sleek, dark-themed UI
- 🎛️ Media Session API integration for system-level media controls

## APIs Used

- Zeno.fm API for audio streaming and metadata
- StreamAfrica API for album art fetching
- Media Session API for system-level media control integration

## Setup and Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file in the root directory with the following content:

```env
VITE_STREAM_URL=https://stream.zeno.fm/your_station_id
VITE_METADATA_URL=https://api.zeno.fm/mounts/metadata/subscribe/your_station_id
VITE_ALBUM_ART_API_URL=https://api-v2.streamafrica.net/musicsearch
VITE_DEFAULT_ALBUM_ART=https://placehold.co/400?text=song
```

Replace `your_station_id` with the actual Zeno.fm station ID you want to use.

> [!IMPORTANT]
> The `.env` file is crucial for the application to function correctly. It contains the URLs for the audio stream, metadata updates, album art API, and a default album art image. Make sure to keep this file secure and do not commit it to version control.

4. Run `npm run dev` to start the development server

## Running the Project

To run the project locally:

1. Ensure you have Node.js installed on your machine
2. Open a terminal in the project directory
3. Run `npm install` to install all dependencies
4. Create and configure the `.env` file as described above
5. Run `npm run dev` to start the development server
6. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

> [!TIP]
> If you're having issues with the audio stream or metadata updates, double-check your Zeno.fm station ID in the `.env` file.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. :)
