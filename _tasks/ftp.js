var gulp = require('gulp');
var sftp = require('gulp-sftp');

gulp.task('ftp', function () {
    return gulp.src('pattern-lab/public/**/*')
        .pipe(sftp({
            host: // your host,
            user: // your host username,
            pass: // your host password,
            remotePath: // your host path
        }));
});