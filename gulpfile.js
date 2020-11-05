/*jshint esversion: 6 */

const { src, task, dest, parallel, series, watch } = require("gulp");
const gulpif = require("gulp-if");
const sass = require("gulp-sass");
const uglify = require('gulp-uglify');
const concat = require("gulp-concat");
const cleanCSS = require('gulp-clean-css');
const order = require("gulp-order");
const gzip = require("gulp-gzip");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require('gulp-autoprefixer');

var DIST = "dist";
var SRC = "src";
var TEMP = "temp";
var PRODUCTION = false;

var cleanCSSOptions = {
    debug: false,
    compatibility: '*'
};

var banner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * ',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''
].join('\n');

var tsconfig = require('./tsconfig.json');

function ts() {

    var tsc = require("gulp-typescript");
    var filename = "angular-super-gallery.js";

    return src([
            SRC + "/**/*.ts",
        ])
        .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
        .pipe(order([
            "asg.ts",
            "asg-factory.ts"
        ], {
            base: SRC
        }))
        .pipe(tsc(tsconfig.compilerOptions))
        .pipe(concat(filename))
        .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
        .pipe(dest(TEMP));

}

function js() {

    var filename = "angular-super-gallery.js";
    var header = require('gulp-header');
    var app = require('./package.json');

    return src([
            TEMP + "/*.js"
        ])
        .pipe(order([
            "angular-super-gallery.js"
        ], {
            base: TEMP
        }))
        .pipe(concat(filename))
        .pipe(header(banner, { pkg: app }))
        .pipe(dest(DIST));

}

function js_min() {

    var filename = "angular-super-gallery.js";
    var header = require('gulp-header');
    var app = require('./package.json');

    return src([
            DIST + "/" + filename,
        ])
        .pipe(concat(filename))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(header(banner, { pkg: app }))
        .pipe(dest(DIST))
        .pipe(gzip({ append: true }))
        .pipe(dest(DIST));

}

function css() {

    return src([
            SRC + '/*.scss'
        ])
        .pipe(concat("angular-super-gallery.css"))
        .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
        .pipe(dest(DIST));

}

function css_min() {

    var filename = "angular-super-gallery.css";

    return src([
            DIST + "/" + filename
        ])
        .pipe(concat(filename))
        .pipe(cleanCSS(cleanCSSOptions))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest(DIST))
        .pipe(gzip({ append: true }))
        .pipe(dest(DIST));


}

function views() {

    var templateCache = require('gulp-angular-templatecache');
    var htmlmin = require('gulp-htmlmin');

    return src([SRC + '/**/*.html'])
        .pipe(htmlmin({
            removeComments: true,
            collapseWhitespace: true,
            preserveLineBreaks: false,
        }))
        .pipe(templateCache({
            module: 'angularSuperGallery',
            root: ''
        }))
        .pipe(concat("angular-super-gallery-views.js"))
        .pipe(dest(TEMP));

}

function production(callback) {

    PRODUCTION = true;
    callback();

}

function versionBump() {

    var bump = require('gulp-bump');

    return src(['./package.json'])
        .pipe(bump({
            type: 'patch',
            indent: 4
        }))
        .pipe(dest('./'));

}

function versionReplace() {

    var app = require('./package.json');
    var replace = require('gulp-replace');

    return src([
            SRC + '/asg-service.ts',
        ])
        .pipe(replace(/version\s=\s"\d+\.\d+\.\d+/g, 'version = "' + app.version))
        .pipe(dest(SRC));

}

function copyAssetsJs() {

    return src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/angular/angular.min.js',
        './node_modules/angular-animate/angular-animate.min.js',
        './node_modules/angular-touch/angular-touch.min.js',
        './node_modules/screenfull/dist/screenfull.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
    ]).pipe(dest('./demo/assets/js'));

}

task('assets', series(
    copyAssetsJs
));

task('ts2js', series(
    views,
    ts,
    js
));

task('dev', series(
    css,
    "ts2js"
));

task('prod', series(
    production,
    "dev",
    css_min,
    js_min,
    "assets"
));

task('release', series(
    versionBump,
    versionReplace
));

task("watch", function(callback) {

    watch([
        SRC + "/**/*.html",
        SRC + "/*.ts"
    ], series("ts2js"));

    watch([
        SRC + "/**/*.scss"
    ], series(css));

    callback();

});

task('default', series(
    "dev"
));
