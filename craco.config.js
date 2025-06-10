// E:\varn-extrusion\craco.config.js
const path = require('path'); // Node.js built-in module for path manipulation

module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'), // Maps @assets to the absolute path of src/assets
      // You should also add your other aliases here for Webpack to understand them:
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages')
    },
  },
};