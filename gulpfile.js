const gulp = require("gulp"),
  style = require("gulp-sass"),
  plumber = require("gulp-plumber"),
  imagemin = require("gulp-imagemin"),
  concat = require("gulp-concat"),
  minify = require("gulp-minify"),
  cleanCss = require("gulp-clean-css"),
  prefixer = require("gulp-autoprefixer"),
  sourcemap = require("gulp-sourcemaps"),
  ejs = require("gulp-ejs"),
  template = require("gulp-html-replace"),
  watch = require("gulp-watch"),
  webpack = require("webpack-stream"),
  bs = require("browser-sync");

gulp.task("bs", function() {
  bs.init({
    server: {
      baseDir: "dist"
    }
  });

  gulp.start(["images", "script", "style", "view"]);

  gulp.watch("assets/**/*.js", ["script"]);
  gulp.watch("assets/**/*.scss", ["style"]);
  gulp.watch("assets/images/*", ["images"]);
  gulp.watch("dist/**/*").on("change", () => {
    bs.reload();
  });
});

gulp.task("style", () => {
  gulp
    .src("assets/styles/styles.scss")
    .pipe(sourcemap.init())
    .pipe(
      plumber({
        handleError: function(error) {
          this.emit("end");
          console.log(error);
        }
      })
    )
    .pipe(style())
    .pipe(
      prefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("dist/css/"));
});

gulp.task("view", () => {
  gulp
    .src("app/views/**/*.ejs")
    .pipe(ejs({}, {}, { ext: ".html" }))
    .pipe(template())
    .pipe(gulp.dest("dist"));
});

gulp.task("buildview", () => {
  gulp
    .src("dist/*.html")
    .pipe(template())
    .pipe(gulp.dest("build"));
});

gulp.task("images", () => {
  gulp
    .src("assets/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"));
});

gulp.task("bundleimages", () => {
  gulp
    .src("assets/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("build/images"));
});

gulp.task("script", () => {
  gulp
    .src("assets/scripts/*.js")
    .pipe(
      webpack({
        output: {
          filename: "[name].js"
        }
      })
    )
    .pipe(gulp.dest("dist/js"));
});

gulp.task("bundlejs", () => {
  gulp
    .src("assets/scripts/*.js")
    .pipe(concat("main.js"))
    .pipe(minify())
    .pipe(gulp.dest("build/js"));
});

gulp.task("bundlecss", () => {
  gulp
    .src("dist/css/main.css")
    .pipe(cleanCss())
    .pipe(gulp.dest("build/css"));
});

// default task with BrowserSync
gulp.task("default", ["bs"]);
gulp.task("build", ["bundlejs", "bundlecss", "bundleimages", "buildview"]);
