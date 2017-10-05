'use strict'

const gulp = require('gulp')
const plugins = require('gulp-load-plugins')({ pattern: ['gulp-*', 'gulp.*'] })

const argv = require('yargs').argv

const browserSync = require('browser-sync')
const fs = require('fs')
const mainBowerFiles = require('main-bower-files')
const merge = require('merge-stream')
const request = require('request')

const webpackStream = require('webpack-stream')
const webpack = require('webpack')

const map = require('vinyl-map')
const named = require('vinyl-named')

const TARGET_CSS_FILE = '__main.css'

const CSS_PATH = './itcase_sphinx_theme/itcase/static/css/'
const JS_PATH = './itcase_sphinx_theme/itcase/static/js/'
const IMG_PATH = './itcase_sphinx_theme/itcase/static/img/'
const FONT_PATH = './itcase_sphinx_theme/itcase/static/fonts/'

const TARGET_CSS_PATH = CSS_PATH + TARGET_CSS_FILE

const CSS_FILES = [
  './itcase_sphinx_theme/itcase/static/css/*.css',
  './itcase_sphinx_theme/itcase/static/css/**/*.css',
  '!itcase_sphinx_theme/itcase/static/css/badge_only.css',
  '!itcase_sphinx_theme/itcase/static/css/' + TARGET_CSS_FILE
]

const TEMPLATES_FILES = [
  './itcase_sphinx_theme/itcase/*.html',
  './itcase_sphinx_theme/itcase/**/*.html'
]

let webpackConfig

const options = {
  'development': argv.D || argv.dev || argv.develop || argv.development || false,
  'production': argv.P || argv.prod || argv.production || false
}

if (!options.development && !options.production) {
  options.development = true
}

if (options.production) {
  webpackConfig = require('./webpack.config.prod.js')
} else {
  webpackConfig = require('./webpack.config.dev.js')
}

gulp.task('browser-sync', (cb) => {
  browserSync.init({
    proxy: '127.0.0.1:8000',
    port: 3000,
    logLevel: 'info',
    open: false
  }, () => { cb() })
  plugins.util.colors.yellow('Webpack server listening on http://localhost:8000/')
})

gulp.task('bower', () => {
  let cssStream = gulp.src(mainBowerFiles({
    base: 'bower_components',
    paths: {
      bowerDirectory: './bower_components',
      bowerJson: './bower.json'
    }}))
    .pipe(plugins.filter('**/*.css'))
    .pipe(plugins.rename((path) => {
      path.dirname = path.dirname.slice(0, path.dirname.indexOf('/') + 1)
    }))
    .pipe(gulp.dest(CSS_PATH + 'vendor/'))
    .pipe(map((code, filename) => {
      plugins.util.log('Bower CSS ' +
      plugins.util.colors.green(filename))
    }))

  let jsStream = gulp.src(mainBowerFiles({
    base: 'bower_components',
    paths: {
      bowerDirectory: './bower_components',
      bowerJson: './bower.json'
    }}))
    .pipe(plugins.filter(['**/*.js', '**/*.map']))
    .pipe(plugins.rename((path) => {
      path.dirname = ''
    }))
    .pipe(plugins.if(/ru.js|en-gb.js$/,
      gulp.dest(JS_PATH + 'vendor/locale/')
        .pipe(map((code, filename) => {
          plugins.util.log('Bower JS ' +
          plugins.util.colors.green(filename))
        }))))
    .pipe(plugins.filter(['**', '!**/locale/*']))
    .pipe(gulp.dest(JS_PATH + 'vendor/'))
    .pipe(map((code, filename) => {
      plugins.util.log('Bower JS ' +
      plugins.util.colors.green(filename))
    }))

  let imgStream = gulp.src(mainBowerFiles({
    base: 'bower_components',
    paths: {
      bowerDirectory: './bower_components',
      bowerJson: './bower.json'
    }}))
    .pipe(plugins.filter(['**/*.png', '**/*.jpg', '**/*.gif', '**/*.svg']))
    .pipe(plugins.rename((path) => {
      path.dirname = path.dirname.slice(0, path.dirname.indexOf('/') + 1)
    }))
    .pipe(gulp.dest(IMG_PATH + 'vendor/'))
    .pipe(map((code, filename) => {
      plugins.util.log('Bower Images ' +
      plugins.util.colors.green(filename))
    }))

  let fontStream = gulp.src(mainBowerFiles({
    base: 'bower_components',
    paths: {
      bowerDirectory: './bower_components',
      bowerJson: './bower.json'
    }}))
    .pipe(plugins.filter(['**/*.eot', '**/*.otf', '**/*.svg', '**/*.ttf', '**/*.woff', '**/*.woff2']))
    .pipe(plugins.rename((path) => {
      path.dirname = path.dirname.slice(0, path.dirname.indexOf('/') + 1)
    }))
    .pipe(gulp.dest(FONT_PATH))
    .pipe(map((code, filename) => {
      plugins.util.log('Bower Fonts ' +
      plugins.util.colors.green(filename))
    }))

  return merge(cssStream, jsStream, imgStream, fontStream)
})

gulp.task('css', () => {
  const postcssOptions = {
    basePath: CSS_PATH,
    maps: ['breakpoints.yml']
  }

  const processors = [
    require('postcss-import'),
    require('postcss-map')(postcssOptions),
    require('postcss-custom-media'),
    require('postcss-media-minmax'),
    require('postcss-nested'),
    require('postcss-color-function'),
    require('postcss-pxtorem')({
      rootValue: 16,
      unitPrecision: 5,
      propWhiteList: ['font', 'font-size', 'line-height', 'letter-spacing'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }),
    require('autoprefixer')({
      browsers: [
        'Firefox >= 3',
        'Explorer >= 6',
        'Opera >= 9',
        'Chrome >= 15',
        'Safari >= 4',
        '> 1%'
      ],
      cascade: false
    }),
    require('postcss-custom-properties'),
    require('postcss-opacity'),
    require('postcss-reporter')({
      clearMessages: true
    })
  ]

  const mq = [
    require('css-mqpacker')({
      sort: true
    })
  ]

  return gulp.src(CSS_FILES)
    .pipe(plugins.plumber({
      errorHandler: (err) => {
        plugins.util.log(
          plugins.util.colors.red('gulp-css:'),
          plugins.util.colors.yellow(err.message),
          plugins.util.colors.yellow(err))
      }
    }))
    .pipe(plugins.if(options.development,
      plugins.newer(TARGET_CSS_PATH)
    ))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.postcss(processors))
    .pipe(plugins.modifyCssUrls({
      modify: function (url, filePath) {
        if (filePath.indexOf('vendor') > -1) {
          if (url.indexOf('./font') > -1) {
            url = './../' + url.substring(url.indexOf('font'))
          } else if (url.indexOf('./img') > -1) {
            url = './../img/vendor/' + url.substring(url.indexOf('img'))
          }
          if (url.match(/.*\.(png|jpg|gif)$/i)) {
            url = './../img/vendor/' + url.substring(url.indexOf('/'))
          }
          return url
        } else {
          return url
        }
      }
    }))
    .pipe(plugins.concat(TARGET_CSS_FILE))
    .pipe(plugins.base64({
      baseDir: IMG_PATH,
      extensions: ['svg', 'png', /\.jpg#datauri$/i],
      maxImageSize: 8 * 1024,
      deleteAfterEncoding: false
    }))
    .pipe(plugins.if(options.production,
      plugins.postcss(mq)))
    .pipe(plugins.if(options.development,
      plugins.sourcemaps.write('.')))
    .pipe(plugins.if(options.production,
      plugins.cssnano({
        svgo: false,
        colormin: true,
        convertValues: true,
        discardComments: { removeAll: true },
        discardDuplicates: true,
        discardEmpty: true,
        mergeIdents: true,
        mergeLonghand: true,
        mergeRules: true,
        minifyFontValues: true,
        minifyGradients: true,
        minifySelectors: true,
        normalizeCharset: true,
        normalizeUrl: true,
        reduceTransforms: true,
        zindex: false
      })))
    .pipe(gulp.dest(CSS_PATH))
    .pipe(plugins.filter('**/*.css'))
    .pipe(map((code, filename) => {
      plugins.util.log('CSS: ' +
      plugins.util.colors.green(filename))
    }))
    .pipe(plugins.shell('touch ./example/source/index.rst'))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('html', () => {
  return gulp.src(TEMPLATES_FILES)
    .pipe(plugins.shell('touch ./example/source/index.rst'))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('watch', () => {
  plugins.watch(CSS_FILES, { verbose: true },
    plugins.batch((cb) => {
      gulp.series('css')()
      cb()
    }))

  plugins.watch(TEMPLATES_FILES, { verbose: true },
    plugins.batch((cb) => {
      gulp.series('html')()
      cb()
    }))
})

gulp.task('webpack', (cb) => {
  let firstBuildReady = false

  function done (err, stats) {
    firstBuildReady = true
    if (err) {
      return
    }
    plugins.util.log(stats.toString({
      colors: true,
      chunkModules: false
    }))
  }

  function getJsStream (settings, directory) {
    return gulp.src(directory)
      .pipe(plugins.plumber((error) => {
        plugins.util.log(error)
      }))
      .pipe(named())
      .pipe(webpackStream(settings, webpack, done))
      .pipe(plugins.filter(['**', '!**/*.hot-update*']))
      .pipe(map((code, filename) => {
        plugins.util.log('Webpack JS ' +
        plugins.util.colors.green(filename))
      }))
      .pipe(gulp.dest(settings.output.path))
      .pipe(plugins.shell('touch ./example/source/index.rst'))
      .on('data', () => {
        if (firstBuildReady) {
          cb()
        }
      })
  }

  let jsStream = getJsStream(webpackConfig.MAIN.settings, webpackConfig.MAIN.directory)

  return jsStream
})

gulp.task('bump', () => {
  const url = 'https://pypi.python.org/pypi/itcase-sphinx-theme/json'
  let pypiVersion

  request({ url: url, json: true }, (error, response, data) => {
    if (!error && response.statusCode === 200) {
      pypiVersion = data.info.version
    }
  })

  return gulp.src(['./bower.json', './package.json'])
    .pipe(plugins.bump({ version: pypiVersion }))
    .pipe(gulp.dest('./'))
})

gulp.task('tag', (cb) => {
  let version = (() => {
    return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version
  })()

  return plugins.git.tag(version, 'Release ' + version, (err) => {
    if (err) {
      throw err
    } else {
      plugins.util.log('Create tag: ' +
      plugins.util.colors.cyan(version))
    }
  })
})

gulp.task('default',
  gulp.series('webpack', 'browser-sync', 'watch')
)
