module.exports = {
  darkMode: 'class',
  content: ['../../apps/**/*.{js, ts, jsx, tsx}', '../../packages/**/*.{js, ts, jsx, tsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#1E40AF',
        customGreen: '#10B981'
      },
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
