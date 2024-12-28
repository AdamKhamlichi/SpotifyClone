# Spotify Clone

This project was developed as part of a web development course to demonstrate full-stack development skills using the MERN stack (MongoDB, Express.js, React, Node.js).

## Project Overview

This application is a music playlist management system that allows users to:
- Create, modify, and delete playlists
- Play songs from specific playlists
- Control music playback through the interface or keyboard shortcuts
- Search for songs and playlists
- Like/unlike songs
- View song information and playlist details

The project consists of two main applications:
- A React frontend application (in `/site-web`)
- A Node.js/Express backend server (in `/server`)

## Technologies Used

- Frontend:
  - React
  - React Router for navigation
  - Custom state management using the SAM pattern and Reducers
  - Modern ES6+ JavaScript

- Backend:
  - Node.js
  - Express.js
  - MongoDB for data persistence
  - RESTful API architecture

## Setup Instructions

1. Configure MongoDB:
   - Set up a MongoDB instance using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Update the connection information in `env.js` with your MongoDB credentials

2. Install Dependencies:
   ```bash
   # Install server dependencies
   cd server
   npm ci

   # Install frontend dependencies
   cd ../site-web
   npm ci
   ```

3. Local Deployment:
   ```bash
   # Start the backend server (from /server directory)
   npm start

   # Start the frontend development server (from /site-web directory)
   npm start
   ```

   - Frontend will be available at: `localhost:5010`
   - Backend will be available at: `localhost:5020`

## Features

### Search Functionality
- Case-sensitive and case-insensitive search options
- Search across multiple fields (name, description, artist)
- Real-time search results

### Music Player
- Play/pause (Space key)
- Previous track (N key)
- Next track (P key)
- Mute/unmute (M key)
- Shuffle mode
- Progress bar with seeking capability (J/K keys for ±5 seconds)

### Playlist Management
- Create new playlists
- Edit existing playlists
- Delete playlists
- Add/remove songs from playlists
- Custom playlist thumbnails

### Song Features
- Like/unlike songs
- View song details (artist, genre, duration)
- Automatic playlist continuation

## Project Structure

```
├── server/
│   ├── controllers/
│   ├── services/
│   ├── data/
│   └── server.js
└── site-web/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   └── assets/
    └── package.json
```

## Music Files

The initial songs are available in the `assets/media` directory. All songs are royalty-free and obtained from [pixabay](https://pixabay.com/music/). Additional songs can be added by placing MP3 files in the `assets/media` directory and updating `songs.json`.

## Acknowledgments

This project was created for educational purposes to demonstrate full-stack development capabilities and understanding of modern web development practices.