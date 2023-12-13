module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['Chrome', 'Edge'],

    preprocessors: {
      'src/**/*.spec.ts': ['webpack', 'sourcemap'],
    },
    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),  // Add coverage plugin
      require('karma-chrome-launcher'),
      require('karma-edge-launcher'),
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
    reporters: ['progress', 'coverage'],  // Add 'coverage' to reporters
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcov', subdir: 'lcov' },
        { type: 'text-summary' },
      ],
    },
    singleRun: true,  // Set to true if you want Karma to exit once the tests are done
  });
};
