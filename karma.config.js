// Karma configuration
// Generated on Wed Sep 29 2021 13:35:20 GMT+0800 (中国标准时间)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'src/**/*.@(js|jsx)',
      'test/**/*.@(js|jsx)'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
    preprocessors: {
      // 匹配源文件，并使用 webpack 进行预处理
      'src/**/*.@(js|jsx)': ['webpack', 'coverage'],
      // 匹配测试文件，并使用 webpack 进行预处理
      'test/**/*.@(js|jsx)': ['webpack'],
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
    reporters: ['spec', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser instances should be started simultaneously
    concurrency: Infinity,

    coverageReporter: {
      // 生成报告的目录
      dir: 'coverage/',
      // 要生成的报告类型
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text', subdir: '.', file: 'text.txt' },
        { type: 'text-summary', subdir: '.', file: 'text-summary.txt' }
      ]
    },

    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            // 匹配 JavaScript 文件
            test: /\.(js|jsx)$/,
            // 排除 node_modules 和 bower_components 目录
            exclude: /(node_modules|bower_components)/,
            use: [
              {
                loader: 'babel-loader',
              },
              // {
              //   loader:'ts-loader',
              //   options:{
              //     configFile : './tsconfig.json'
              //   }
              // }
            ]
          }
        ]
      }
    }
  })
}
