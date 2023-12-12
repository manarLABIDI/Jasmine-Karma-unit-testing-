module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['Chrome', 'Edge'], // You can use other browsers as well
    files: [
      'src/**/*.spec.ts', // Include your spec files
    ],
    preprocessors: {
      'src/**/*.spec.ts': ['webpack', 'sourcemap'],
    },
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-webpack'),
      require('karma-sourcemap-loader'),
    ],
    webpack: {
      module: {
        rules: [
          {
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: ['.ts', '.js'],
      },
    },
    reporters: ['progress'],
  });
};
