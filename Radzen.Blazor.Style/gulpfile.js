/// <binding BeforeBuild='css, scss' />
const { src, dest, watch } = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
var gutil = require('gulp-util');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

function scss(cb)
{
    var plugins = [
        autoprefixer(),
    ];
    src('./themes/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(dest('./wwwroot/css/'))
        .on('error', (err) => gutil.log(err.message));
    cb();
};


exports.scss = scss;