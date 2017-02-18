// Load plugins
var gulp = require('gulp');

// Copies the assetts from the pearson elements library and brings them into UI / Pattern Lab.
gulp.task('configure', ['install-elements'], function() {
    gulp.src("patternlab-config.json")
        .pipe(gulp.dest('node_modules/edition-node-gulp/'));

    gulp.src("meta/data.json")
        .pipe(gulp.dest('pattern-lab/source/_data/'));

    gulp.src("meta/styleguide.min.css")
        .pipe(gulp.dest('node_modules/edition-node-gulp/node_modules/styleguidekit-assets-default/dist/styleguide/css/'));

    gulp.src("node_modules/edition-node-gulp/source/**/*")
        .pipe(gulp.dest('pattern-lab/source/'));

    gulp.src("node_modules/materialize-css/dist/fonts/**")
        .pipe(gulp.dest('ui/fonts/'))
        .pipe(gulp.dest('pattern-lab/source/fonts/'));

    gulp.src("node_modules/materialize-css/dist/css/**")
        .pipe(gulp.dest('ui/css/'))
        .pipe(gulp.dest('pattern-lab/scss/materialize/'));

    gulp.src("node_modules/materialize-css/dist/js/**")
        .pipe(gulp.dest('ui/js/'))
        .pipe(gulp.dest('pattern-lab/source/js/'));
});


