module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/Fonts'],
  devServer: {
    proxy: {
      '/*': {
        target: `http://192.168.0.107:5000`,
      },
    },
  },
  dependencies: {},
};
