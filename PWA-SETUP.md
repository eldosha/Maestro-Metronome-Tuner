# Maestro PWA Setup Guide

## 📱 Progressive Web App (PWA) Setup

Maestro is now a fully functional Progressive Web App that can be installed on mobile devices and desktops!

### Features Added:
- ✅ Installable on iOS, Android, and Desktop
- ✅ Offline functionality via Service Worker
- ✅ Floating window mode
- ✅ Picture-in-Picture support
- ✅ Video platform integration APIs
- ✅ Embed API for external websites

## 🎨 Creating Icons

You need to create icon files for the PWA. Here are the required sizes:

### Required Icons:
- `icon-72x72.png` (72×72)
- `icon-96x96.png` (96×96)
- `icon-128x128.png` (128×128)
- `icon-144x144.png` (144×144)
- `icon-152x152.png` (152×152)
- `icon-192x192.png` (192×192)
- `icon-384x384.png` (384×384)
- `icon-512x512.png` (512×512)

### Quick Icon Generation:

1. **Using Online Tools:**
   - Visit https://realfavicongenerator.net/
   - Upload a 512×512 PNG image
   - Download all generated icons

2. **Using ImageMagick (Command Line):**
   ```bash
   # Create icons from a source image (icon-source.png)
   convert icon-source.png -resize 72x72 icon-72x72.png
   convert icon-source.png -resize 96x96 icon-96x96.png
   convert icon-source.png -resize 128x128 icon-128x128.png
   convert icon-source.png -resize 144x144 icon-144x144.png
   convert icon-source.png -resize 152x152 icon-152x152.png
   convert icon-source.png -resize 192x192 icon-192x192.png
   convert icon-source.png -resize 384x384 icon-384x384.png
   convert icon-source.png -resize 512x512 icon-512x512.png
   ```

3. **Using Photoshop/GIMP:**
   - Create a 512×512 design
   - Export at each required size
   - Save as PNG with transparency

### Icon Design Tips:
- Use a simple, recognizable design
- Ensure good contrast
- Test on both light and dark backgrounds
- The 512×512 icon should work as a maskable icon

## 📦 Installation Instructions

### For Users:

#### Android (Chrome):
1. Open Maestro in Chrome
2. Tap the menu (⋮) → "Add to Home screen" or "Install app"
3. Or tap the install button that appears

#### iOS (Safari):
1. Open Maestro in Safari
2. Tap the Share button (□↑)
3. Select "Add to Home Screen"
4. Customize the name and tap "Add"

#### Desktop (Chrome/Edge):
1. Look for the install icon in the address bar
2. Click "Install" when prompted
3. Or use the install button in the app

## 🔧 For Developers

### Service Worker:
The service worker (`service-worker.js`) handles:
- Offline caching
- Background sync
- Push notifications (ready for future features)

### Manifest:
The `manifest.json` includes:
- App metadata
- Icons and screenshots
- Shortcuts
- Share target configuration

### Testing PWA:
1. Use Chrome DevTools → Application → Manifest
2. Test offline mode
3. Verify installability
4. Check service worker status

## 🪟 Floating Window Mode

### For Users:
- Click the "🪟 Float" button in the header
- Or press Ctrl+Shift+I to open integration panel
- Enable floating mode from there

### For Developers:
```javascript
// Enter floating mode
window.MaestroAPI.enterFloatingMode();

// Exit floating mode
window.MaestroAPI.exitFloatingMode();
```

## 🎬 Video Platform Integration

### Setting Up API Keys:

1. **YouTube API:**
   - Go to https://console.cloud.google.com/
   - Create a project
   - Enable YouTube Data API v3
   - Create credentials (API Key)
   - Add to Maestro integration panel

2. **Vimeo API:**
   - Go to https://developer.vimeo.com/
   - Create an app
   - Generate an access token
   - Add to Maestro integration panel

3. **Custom Domain:**
   - Enter your domain for embedding
   - Generate embed code using the API

### Using the Embed API:

#### Basic Embed:
```html
<script src="https://yourdomain.com/maestro-embed.js"></script>
<div id="maestro-container"></div>
<script>
  MaestroEmbed.init({ container: '#maestro-container' });
</script>
```

#### With Options:
```html
<script>
  MaestroEmbed.init({
    container: '#maestro-container',
    width: 400,
    height: 600,
    floating: true,
    src: 'https://yourdomain.com/maestro.html'
  });
  
  // Control the metronome
  MaestroEmbed.startMetronome(120);
  MaestroEmbed.setBPM(140);
  MaestroEmbed.stopMetronome();
</script>
```

#### Auto-Initialize with Data Attributes:
```html
<div 
  data-maestro-embed
  data-maestro-width="400"
  data-maestro-height="600"
  data-maestro-floating="true">
</div>
<script src="https://yourdomain.com/maestro-embed.js"></script>
```

## 🌐 Deployment

### HTTPS Required:
PWAs require HTTPS (except for localhost). Deploy to:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting
- Your own HTTPS server

### Files to Deploy:
- `maestro.html`
- `manifest.json`
- `service-worker.js`
- `maestro-embed.js`
- `browserconfig.xml`
- All icon files (icon-*.png)
- Screenshots (optional but recommended)

## 🔐 Security Notes

- API keys are stored in localStorage (client-side)
- For production, consider server-side API key management
- Use HTTPS for all API communications
- Implement CORS properly for embed API

## 📱 Mobile Optimization

The app is optimized for mobile with:
- Touch-friendly controls
- Responsive design
- Safe area insets support
- Mobile viewport meta tags
- iOS-specific optimizations

## 🚀 Next Steps

1. Create and add icon files
2. Test on various devices
3. Deploy to HTTPS server
4. Submit to app stores (optional):
   - PWA Builder: https://www.pwabuilder.com/
   - Can convert to native apps

## 📞 Support

For issues or questions:
- Check browser console for errors
- Verify service worker registration
- Test on different browsers
- Check HTTPS certificate

---

**Made with ❤️ by Eldosha**

