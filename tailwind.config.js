/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#050508',        // Pure obsidian dark base
          card: '#0D0D15',      // Card surfaces
          cardHover: '#131322', // Hovered card surface
          border: '#1B1B2B',    // Thin structural borders
          muted: '#8C8C9E'      // Secondary/muted text
        },
        primary: {
          DEFAULT: '#7C84FF',   // Soft neon blue
          light: '#A2AAFF',     // Pale sky blue
          dark: '#5A63DB',      // Deep cobalt
        },
        secondary: {
          DEFAULT: '#FF758D',   // Coral pink
          light: '#FF9FB9',     // Soft pink glow
        },
        success: {
          DEFAULT: '#10B981',   // Emerald
          dark: '#059669',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        fredoka: ['Fredoka', 'sans-serif'],
        GochiHand: ['"Gochi Hand"', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(40px)' },
          '50%': { opacity: '0.8', filter: 'blur(60px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
