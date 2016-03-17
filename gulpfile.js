var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');

gulp.task('build', function(){
    return gulp.src(webpackConfig.entry).
        pipe(webpack(webpackConfig)).
        pipe(gulp.dest(webpackConfig.output.path));
});
