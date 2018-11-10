const gulp = require('gulp');
const util = require('gulp-util');
const sequence = require('run-sequence');

require('./gulpttask/app');
require('./gulpttask/deps');
require('./gulpttask/server');

gulp.task('default', () => {
    if (util.env.production) {
        sequence('deps', 'app')
    } else {
        sequence('deps', 'app', 'server')
    }
})


