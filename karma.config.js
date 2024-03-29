// Karma configuration
// Generated on Wed Sep 29 2021 13:35:20 GMT+0800 (中国标准时间)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ['mocha', 'chai-dom', 'sinon-chai', 'chai', 'sinon'],


    // list of files / patterns to load in the browser
    files: [
      'src/**/*.@(ts|tsx)',
      'test/**/*.@(ts|tsx)'
    ],


    // list of files / patterns to exclude
    exclude: [
      'src/index.tsx'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
    preprocessors: {
      // 匹配源文件，并使用 webpack 进行预处理
      'src/**/*.@(ts|tsx)': ['webpack', 'coverage'],
      // 匹配测试文件，并使用 webpack 进行预处理
      'test/**/*.@(ts|tsx)': ['webpack'],
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
    browsers: ['ChromeHeadless'],


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
            test: /\.(ts|tsx|js|jsx)$/,
            // 排除 node_modules 和 bower_components 目录
            exclude: /(node_modules|bower_components)/,
            use: [
              {
                loader: 'babel-loader',
              }
            ]
          },
          {
            test: /\.(le|c)ss$/,
            exclude: /(node_modules|bower_components)/,
            oneOf: [
              {
                // module.css启用css modules
                test: /\.module\.(le|c)ss/,
                use: [
                  {
                    loader: 'style-loader',
                  },
                  {
                    loader: 'css-loader',
                    options: {
                      modules: {
                        // css modules 启用
                        localIdentName: '[path][name]__[local]--[hash:base64:5]',
                      },
                    },
                  },
                  {
                    loader: 'less-loader',
                  }
                ],
              },
              {
                use: [
                  {
                    loader: 'style-loader',
                  },
                  {
                    loader: 'css-loader',
                  },
                  {
                    loader: 'less-loader',
                  }
                ],
              },
            ],
          }
        ]
      },
      resolve: {
        // 支持缩写
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }
    }
  })
}
