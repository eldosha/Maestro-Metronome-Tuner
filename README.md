# 🎵 Maestro - World-Class Metronome & Tuner

The most advanced professional metronome and tuner application, now available as a Progressive Web App (PWA)!

## ✨ Features

### Metronome
- **Extended BPM Range**: 20-300 BPM
- **Multiple Sound Options**: Click, Beep, Wood, Tick
- **Visual Metronome**: Animated pendulum
- **Beat Indicators**: Visual beat tracking
- **Volume Control**: 0-100% adjustable
- **Advanced Time Signatures**: 2/4, 3/4, 4/4, 5/4, 6/8, 7/8, 9/8, 12/8
- **Subdivisions**: Quarter, Eighth, Sixteenth, Triplet, Sextuplet
- **Swing Control**: 0-75%
- **Tempo Ramp**: Acceleration option
- **Tap Tempo**: Tap to set BPM
- **Keyboard Shortcuts**: Spacebar (start/stop), Arrow keys (adjust BPM)
- **15+ Song Presets**: Popular songs with their BPMs

### Professional Tuner
- **Studio-Grade Pitch Detection**: High-resolution FFT analysis
- **Multiple Tuning Standards**: A440, A432, A415, A446
- **Instrument Presets**: Chromatic, Guitar, Bass, Violin, Ukulele, Mandolin
- **Visual Needle Indicator**: Real-time pitch visualization
- **Frequency Display**: Exact Hz reading
- **Cents Accuracy**: Precise tuning feedback
- **Color-Coded Feedback**: Green (in tune), Yellow (close), Red (out of tune)

### PWA Features
- ✅ **Installable**: Works on iOS, Android, and Desktop
- ✅ **Offline Support**: Works without internet connection
- ✅ **Floating Window**: Picture-in-Picture mode
- ✅ **Video Integration**: API keys for YouTube, Vimeo
- ✅ **Embed API**: Embed Maestro on any website

## 📱 Installation

### Mobile (iOS/Android)
1. Open Maestro in your browser
2. Look for the "📱 Install App" button
3. Tap to install
4. Or use browser menu: "Add to Home Screen"

### Desktop
1. Look for install icon in address bar
2. Click "Install"
3. Or use the install button in the app

## 🪟 Floating Window Mode

Click the "🪟 Float" button in the header to enable floating window mode. The app will float over other content, perfect for use while watching videos or using other apps.

**Keyboard Shortcut**: Press `Ctrl+Shift+I` to open the integration panel.

## 🎬 Video Platform Integration

### Setting Up API Keys

1. **Open Integration Panel**: Press `Ctrl+Shift+I`
2. **Enter API Keys**:
   - YouTube API Key (from Google Cloud Console)
   - Vimeo API Key (from Vimeo Developer)
   - Custom Domain (for embedding)
3. **Click "Save Keys"**

### Embedding Maestro on Your Site

```html
<!-- Include the embed script -->
<script src="https://yourdomain.com/maestro-embed.js"></script>

<!-- Create container -->
<div id="maestro-container"></div>

<!-- Initialize -->
<script>
  MaestroEmbed.init({
    container: '#maestro-container',
    width: 400,
    height: 600
  });
  
  // Control the metronome
  MaestroEmbed.startMetronome(120);
</script>
```

## ⌨️ Keyboard Shortcuts

- **Spacebar**: Start/Stop metronome
- **↑ Arrow**: Increase BPM by 1
- **↓ Arrow**: Decrease BPM by 1
- **← Arrow**: Decrease BPM by 5
- **→ Arrow**: Increase BPM by 5
- **Ctrl+Shift+I**: Open integration panel

## 🔧 For Developers

### API Usage

```javascript
// Start metronome
window.MaestroAPI.startMetronome(120);

// Stop metronome
window.MaestroAPI.stopMetronome();

// Set BPM
window.MaestroAPI.setBPM(140);

// Get current BPM
const bpm = window.MaestroAPI.getBPM();

// Check if running
const isRunning = window.MaestroAPI.isRunning();

// Open tuner
window.MaestroAPI.openTuner();

// Floating mode
window.MaestroAPI.enterFloatingMode();
window.MaestroAPI.exitFloatingMode();
```

### Embed API

See `PWA-SETUP.md` for detailed embedding instructions.

## 📦 Files

- `maestro.html` - Main application
- `manifest.json` - PWA manifest
- `service-worker.js` - Offline functionality
- `maestro-embed.js` - Embed API for external sites
- `browserconfig.xml` - Windows tile configuration
- `PWA-SETUP.md` - Detailed setup guide

## 🎨 Icons Required

You need to create icon files for the PWA. See `PWA-SETUP.md` for instructions.

Required sizes: 72×72, 96×96, 128×128, 144×144, 152×152, 192×192, 384×384, 512×512

## 🌐 Deployment

Deploy to any HTTPS server:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Your own server

**Note**: HTTPS is required for PWA functionality (except localhost).

## 📄 License

Designed & Developed by Eldosha

---

**Enjoy making music with Maestro! 🎶**

