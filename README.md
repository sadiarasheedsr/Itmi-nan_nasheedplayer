# Itmi'nan

A clean, responsive, vocals-only nasheed player built with **HTML, CSS, and JavaScript**. Itmi'nan provides a peaceful music-player experience with search, category filtering, playback controls, volume control, and light/dark mode.

## Features

- 🎵 Vocals-only nasheed player
- ▶️ Play, pause, previous, and next controls
- 🔎 Search nasheeds by title or artist
- 🏷️ Filter nasheeds by category
- ⏱️ Playback progress and duration display
- 🔊 Adjustable volume
- 🌙 Light/dark theme toggle
- 📱 Responsive layout for desktop, tablet, and mobile
- 🔄 Automatically plays the next nasheed when a song ends
- ✨ Animated, glassmorphism-inspired interface

## Nasheeds

The current playlist contains:

| # | Title | Artist | Category |
|---|---|---|---|
| 1 | Duaon me meri | Ayesha Abdul Basith | Gratitude |
| 2 | Muhammad Nabinah | Ayesha Abdul Basith | Trust |
| 3 | Hum na ankhon se dekha nahi ha magar | Mohamed Tarek | Devotion |
| 4 | Qalbi fil Madinah | Maher Zain & Harris J | Meditation |
| 5 | Kun Anta | Humood Alkhudher | Family |

## Project Structure

```text
Itmi'nan/
├── index.html
├── style.css
├── script.js
├── download.jpeg
└── audio/
    ├── WhatsApp Audio 2026-08-10 at 5.06.47 PM.mpeg
    ├── WhatsApp Audio 2026-08-10 at 5.05.43 PM.mpeg
    ├── WhatsApp Audio 2026-08-10 at 5.06.49 PM.mpeg
    ├── WhatsApp Audio 2026-08-10 at 5.06.47 PM (1).mpeg
    └── WhatsApp Audio 2026-08-10 at 5.06.48 PM.mpeg
```

## How It Works

### HTML

`index.html` provides the application structure, including:

- Sidebar navigation
- Search interface
- Category filters
- Hero section
- Nasheed list
- Music-player controls
- Audio element

### CSS

`style.css` handles:

- Glassmorphism UI
- Pink/purple visual theme
- Animations and hover effects
- Dark mode
- Responsive layouts
- Music-player styling

### JavaScript

`script.js` manages:

- Playlist data
- Loading and playing songs
- Play/pause controls
- Previous/next navigation
- Search
- Category filtering
- Progress tracking
- Volume control
- Automatic next-song playback

## Customizing the Playlist

Edit the `songs` array near the top of `script.js`:

```javascript
const songs = [
    {
        title: "Your Song",
        artist: "Artist Name",
        src: "your-audio-file.mpeg"
    }
];
```

After adding a song, add a corresponding item to the nasheed list in `index.html` if you want it displayed in the interface.

## Dependencies

The project uses external CDN resources for:

- **Poppins** — Google Fonts
- **Font Awesome 6.6.0** — icons

An internet connection may therefore be required for those external resources to load.

## Browser Support

The project is intended for modern browsers such as:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari


## License

No license has been specified for this project yet. Add a license here if you plan to distribute the project publicly.

---

## 👩‍💻 Author

**Sadia Rasheed**

Frontend Developer | UI Designer

---
