// webpack.mix.js

let mix = require('laravel-mix');

mix.js('assets/js/main.js', 'web')
    .sass('assets/scss/main.scss', 'web')
    .options({
        processCssUrls: false
    })
    .copyDirectory('assets/images', 'web/images')
    .setPublicPath('web')
    .browserSync({
        proxy: 'localhost:8000',
        open: false,
    });