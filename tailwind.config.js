module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      blue1: '#13212e',
      blue2: '#3d858b',
      blue3: '#c1dfdb',
      white1: '#fafaf5',
      orange1: '#f8bc6e',
      orange2: '#f06024',
      brown: '301008',
    },
    backgroundImage: {
      'bg-texture': "url('https://raw.githubusercontent.com/muriloommaia/coffee-time/main/src/images/bg-texture.png')",
      'bg-progressBar': "url('https://raw.githubusercontent.com/muriloommaia/coffee-time/main/src/images/bg-progressBar.png')",
      'bg-cup': "url('https://raw.githubusercontent.com/muriloommaia/coffee-time/main/src/images/cup.png')",
    },
  },
  plugins: [],
};
