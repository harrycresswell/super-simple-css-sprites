# Super Simple CSS Sprites

A super simple retina css sprite maker built with [Gulp](https://gulpjs.com/) and [Spritesmith](https://github.com/Ensighten/grunt-spritesmith) to automate your sprite workflow

## Getting Started
The following steps will help you get up and running with a simple sprite automation which spits out a retina and non retina sprite, and the css to go with it.

### Install pre-requisites

- Make sure you install [Homebrew](http://brew.sh/) first.
- Then install [Node.js](http://nodejs.org/) with `brew install node`
- Install Gulp globally `npm install -g gulp`

### Setup

```
git clone https://github.com/harrycresswell/sscs.git
cd sscs
```

- Run `npm install` to install the node dependencies.

### usage

- Run `rm -rf dist` to delete the current example contents from the `dist` folder.
- Update the contents of `src` folder with the images you want to sprite
- run `gulp sprite` to create the sprite image and css in `/dist`.

For retina images, be sure to use the suffix `@2x` in order to generate a `@2x` sprite. For example `github@2x.png`.

I've left a `index.html` file in the root, so you can check everything is working correctly. Just update the class names accordingly.


## Attribution
This is based on the great work of [Todd Wolfson](https://github.com/twolfson) on [Spritesmith](https://github.com/twolfson/gulp.spritesmith)
