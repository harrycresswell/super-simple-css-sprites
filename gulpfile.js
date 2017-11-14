// Load dependencies
var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');


gulp.task('sprite', function () {
  // Grab all normal and `@2x` (retina) images from `src
  //   e.g. `github.png`, `github@2x.png`
  var spriteData = gulp.src('./src/*.png').pipe(spritesmith({

      // Filter out `@2x` (retina) images to separate spritesheet
      //   e.g. `github@2x.png`, `twitter@2x.png`
      retinaSrcFilter: './src/*@2x.png',

      // Generate a normal and a `@2x` (retina) spritesheet
      imgName: 'spritesheet.png',
      retinaImgName: 'spritesheet@2x.png',

      // Generate CSS for both spritesheets
      cssName: 'sprites.css'
    }));
    // Pipe CSS and spritesheets to `dist` folder
   return spriteData.pipe(gulp.dest('./dist/'));
});
