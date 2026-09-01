/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0E14',
        surface: '#12161F',
        surface2: '#171C27',
        line: '#232838',
        ink: '#E7E9EE',
        muted: '#8890A4',
        amber: '#FFB454',
        teal: '#5EEAD4',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        'slide-down': 'slideDown 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        'slide-left': 'slideLeft 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        'slide-right': 'slideRight 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        'bounce-up': 'bounceUp 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        'float': 'floatAnimation 3s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s infinite',
        'glow': 'glowEffect 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceUp: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '60%': { opacity: '1', transform: 'scale(1.02)' },
          '100%': { transform: 'translateY(0) scale(1)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        floatAnimation: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseRing: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 180, 84, 0.7)' },
          '50%': { boxShadow: '0 0 0 20px rgba(255, 180, 84, 0)' },
        },
        glowEffect: {
          '0%, 100%': { textShadow: '0 0 0 rgba(94, 234, 212, 0)' },
          '50%': { textShadow: '0 0 20px rgba(94, 234, 212, 0.5)' },
        },
      },
      boxShadow: {
        'glow-amber': '0 0 30px rgba(255, 180, 84, 0.3)',
        'glow-teal': '0 0 30px rgba(94, 234, 212, 0.3)',
        'glow-lg': '0 0 40px rgba(255, 180, 84, 0.25)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
