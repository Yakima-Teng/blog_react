'use strict'
const gulp = require('gulp')
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')
const del = require('del')
const path = require('path')
const less = require('gulp-less')
const LessAutoPrefix = require('less-plugin-autoprefix')
const autoPrefix = new LessAutoPrefix({
  browers: ['last 20 versions']
})
const rename = require('gulp-rename')
const minifycss = require('gulp-clean-css')
const uglify = require('gulp-uglify')
const connect = require('gulp-connect')
const proxy = require('http-proxy-middleware')
const gulpSequence = require('gulp-sequence')
const opn = require('opn')


const SOURCE = './source/'
const WWW = 'build/'
const DEST = './' + WWW + 'blog_react/'
const port = 3000

gulp.task('clean', () => {
  return del([WWW])
})

gulp.task('connect', () => {
  return connect.server({
    root: WWW,
    port: port,
    livereload: true,
    middleware (connect, opt) {
      return [
        proxy('/blog/v1', {
          // target: 'http://localhost:18080',
          target: 'http://yakima.duapp.com',
          changeOrigin: true
        })
      ]
    }
  })
})

gulp.task('open', () => {
  return opn(`http://localhost:${port}/blog_react/`)
})

gulp.task('copy-index', () => {
  return gulp.src(SOURCE + 'index.html')
    .pipe(gulp.dest(DEST))
    .pipe(connect.reload())
})

gulp.task('copy-favicon', () => {
  return gulp.src(SOURCE + 'favicon.ico')
    .pipe(gulp.dest(DEST))
    .pipe(connect.reload())
})

gulp.task('copy-third', () => {
  return gulp.src(SOURCE + 'third/**/*.js')
    .pipe(gulp.dest(DEST + 'js'))
    .pipe(connect.reload())
})

gulp.task('copy-third', () => {
  return gulp.src(SOURCE + 'third/**/*.js')
    .pipe(gulp.dest(DEST + 'js'))
    .pipe(connect.reload())
})

gulp.task('copy-fonts', () => {
  return gulp.src(SOURCE + 'fonts/*.*')
    .pipe(gulp.dest(DEST + 'fonts'))
})

gulp.task('less', () => {
  return gulp.src(SOURCE + 'styles/importer.less')
    .pipe(less({
      paths: [path.join(__dirname, 'source', 'styles')],
      plugins: [autoPrefix]
    }))
    .on('error', e => console.log(e))
    // ouput app.css
    .pipe(gulp.dest(DEST + 'css'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(minifycss({
      compatibility: 'ie8'
    }))
    // output app.min.css
    .pipe(gulp.dest(DEST + 'css'))
    .pipe(connect.reload())
})

gulp.task('js', () => {
  return browserify(SOURCE + 'app.js')
    .transform('babelify', { presets: ['es2015', 'react'] })
    .bundle()
    .pipe(source('complied.js'))
    .pipe(gulp.dest(DEST + 'js'))
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest(DEST + 'js'))
    .pipe(connect.reload())
})

gulp.task('watch', () => {
  gulp.watch(SOURCE + 'index.html', ['copy-index']).on('change', event => {
    console.log(`File ${event.path} was ${event.type}, running task \"copy-index\"...`)
  })
  gulp.watch([
    SOURCE + 'styles/**/*.less',
    SOURCE + 'styles/**/*.css'
  ], ['less'])
    .on('change', event => {
      console.log(`File ${event.path} was ${event.type}, running task \"less\"...`)
    })
  gulp.watch([
    SOURCE + 'app.js',
    SOURCE + 'components/**/*.js'
  ], ['js']).on('change', event => {
    console.log(`File ${event.path} was ${event.type}, running task \"js\"...`)
  })
  return
})

gulp.task('after-dev', ['watch', 'open'], () => {
  console.log(`Dev operation completed! Please wait to open localhost:${port}/blog_react/ to see the website`)
  return
})

gulp.task('dev', gulpSequence(['clean', 'connect'], ['copy-index', 'copy-favicon', 'copy-third', 'copy-fonts', 'less', 'js'], 'after-dev'))
