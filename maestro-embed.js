/**
 * Maestro Embed API
 * Allows external websites to embed and control Maestro metronome/tuner
 * 
 * Usage:
 * <script src="https://yourdomain.com/maestro-embed.js"></script>
 * <script>
 *   MaestroEmbed.init({ container: '#my-container' });
 *   MaestroEmbed.startMetronome(120);
 * </script>
 */

(function(window, document) {
  'use strict';

  const MaestroEmbed = {
    version: '1.0.0',
    iframe: null,
    container: null,
    api: null,

    /**
     * Initialize Maestro embed
     * @param {Object} options - Configuration options
     * @param {string} options.container - CSS selector or element for container
     * @param {string} options.src - Source URL for Maestro (default: current origin)
     * @param {number} options.width - Width in pixels (default: 400)
     * @param {number} options.height - Height in pixels (default: 600)
     * @param {boolean} options.floating - Enable floating mode (default: false)
     */
    init: function(options = {}) {
      const config = {
        container: options.container || 'body',
        src: options.src || window.location.origin + '/maestro.html',
        width: options.width || 400,
        height: options.height || 600,
        floating: options.floating || false
      };

      // Get container element
      if (typeof config.container === 'string') {
        this.container = document.querySelector(config.container);
      } else {
        this.container = config.container;
      }

      if (!this.container) {
        console.error('Maestro Embed: Container not found');
        return;
      }

      // Create iframe
      this.iframe = document.createElement('iframe');
      this.iframe.src = config.src;
      this.iframe.width = config.width;
      this.iframe.height = config.height;
      this.iframe.frameBorder = '0';
      this.iframe.allow = 'microphone';
      this.iframe.style.border = 'none';
      this.iframe.style.borderRadius = '16px';
      this.iframe.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';

      if (config.floating) {
        this.iframe.style.position = 'fixed';
        this.iframe.style.bottom = '20px';
        this.iframe.style.right = '20px';
        this.iframe.style.zIndex = '10000';
      }

      this.container.appendChild(this.iframe);

      // Wait for iframe to load
      this.iframe.addEventListener('load', () => {
        try {
          this.api = this.iframe.contentWindow.MaestroAPI;
          if (this.api) {
            console.log('Maestro Embed: API connected');
            this.onReady();
          }
        } catch (e) {
          console.warn('Maestro Embed: Cross-origin restrictions may apply');
        }
      });

      return this;
    },

    /**
     * Callback when embed is ready
     */
    onReady: function() {
      // Override in your implementation
      if (typeof this.onReadyCallback === 'function') {
        this.onReadyCallback();
      }
    },

    /**
     * Start metronome
     * @param {number} bpm - Beats per minute
     */
    startMetronome: function(bpm = 120) {
      if (this.api) {
        this.api.startMetronome(bpm);
      } else {
        console.warn('Maestro Embed: API not ready yet');
      }
    },

    /**
     * Stop metronome
     */
    stopMetronome: function() {
      if (this.api) {
        this.api.stopMetronome();
      }
    },

    /**
     * Set BPM
     * @param {number} bpm - Beats per minute
     */
    setBPM: function(bpm) {
      if (this.api) {
        this.api.setBPM(bpm);
      }
    },

    /**
     * Get current BPM
     * @returns {number} Current BPM
     */
    getBPM: function() {
      if (this.api) {
        return this.api.getBPM();
      }
      return null;
    },

    /**
     * Check if metronome is running
     * @returns {boolean}
     */
    isRunning: function() {
      if (this.api) {
        return this.api.isRunning();
      }
      return false;
    },

    /**
     * Open tuner
     */
    openTuner: function() {
      if (this.api) {
        this.api.openTuner();
      }
    },

    /**
     * Enter floating mode
     */
    enterFloatingMode: function() {
      if (this.api) {
        this.api.enterFloatingMode();
      }
    },

    /**
     * Exit floating mode
     */
    exitFloatingMode: function() {
      if (this.api) {
        this.api.exitFloatingMode();
      }
    },

    /**
     * Destroy embed
     */
    destroy: function() {
      if (this.iframe && this.iframe.parentNode) {
        this.iframe.parentNode.removeChild(this.iframe);
      }
      this.iframe = null;
      this.api = null;
    }
  };

  // Expose to global scope
  window.MaestroEmbed = MaestroEmbed;

  // Auto-initialize if data attributes are present
  document.addEventListener('DOMContentLoaded', function() {
    const autoInit = document.querySelector('[data-maestro-embed]');
    if (autoInit) {
      const options = {
        container: autoInit,
        src: autoInit.dataset.maestroSrc || undefined,
        width: parseInt(autoInit.dataset.maestroWidth) || undefined,
        height: parseInt(autoInit.dataset.maestroHeight) || undefined,
        floating: autoInit.dataset.maestroFloating === 'true'
      };
      MaestroEmbed.init(options);
    }
  });

})(window, document);

