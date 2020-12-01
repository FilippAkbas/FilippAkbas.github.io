var gulp          = require("gulp"),
    sass          = require("gulp-sass"),
    postcss       = require("gulp-postcss"),
    autoprefixer  = require("autoprefixer"),
    cssnano       = require("cssnano"),
    sourcemaps    = require("gulp-sourcemaps"),
    browserSync   = require("browser-sync").create();

var paths = {
    styles: {
        src: "src/scss/**/*.scss",
        dest: "src/css"
    }

    // Easily add additional paths
     ,html: {
      src: '...',
      dest: '...'
     }
};

function style() {
    return gulp
        .src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}




// A simple task to reload the page
function reload() {
    browserSync.reload();
}

// Add browsersync initialization at the start of the watch task
function watch() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
    gulp.watch(paths.styles.src, style);
    // We should tell gulp which files to watch to trigger the reload
    // This can be html or whatever you're using to develop your website
    // Note -- you can obviously add the path to the Paths object
    //gulp.watch("src/*.html", reload);
    gulp.watch("src/*.html").on('change', browserSync.reload);
}

// Don't forget to expose the task!
exports.watch = watch

// $ gulp style
exports.style = style;

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.parallel(style, watch);

/*
 * You can still use `gulp.task` to expose tasks
 */
//gulp.task('build', build);

/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build);
