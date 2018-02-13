// Load dependencies
var gulp = require('gulp');

var buffer = require('vinyl-buffer');
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var merge = require('merge-stream');

var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {

  // Grab all normal and `@2x` (retina) images from `src
  //   e.g. `github.png`, `github@2x.png`
  var spriteData = gulp.src('./src/*.png').pipe(spritesmith({

      // Filter out `@2x` (retina) images to separate spritesheet
      //   e.g. `github@2x.png`, `twitter@2x.png`
      retinaSrcFilter: './src/*@2x.png',

      // set the background image urls to reference in CSS
      imgPath: 'sprite.png',
      retinaImgPath: 'sprite@2x.png',

      // Generate a normal and a `@2x` (retina) spritesheet
      imgName: 'sprite.png',
      retinaImgName: 'sprite@2x.png',

      // Generate CSS for both spritesheets
      cssName: 'sprites.css'
    }));

    // Pipe image stream through image optimizer and onto disk
 var imgStream = spriteData.img

   // DEV: We must buffer our stream into a Buffer for `imagemin`
   .pipe(buffer())
   .pipe(imagemin())
   .pipe(gulp.dest('./dist/'));

 // Pipe CSS stream through CSS optimizer and onto disk
 var cssStream = spriteData.css
   .pipe(csso())
   // Pipe CSS and spritesheets to `dist` folder
   .pipe(gulp.dest('./dist/'));

 // Return a merged stream to handle both `end` events
 return merge(imgStream, cssStream);
});
