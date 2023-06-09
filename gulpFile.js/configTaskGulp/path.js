"use strict";

const pathSrc = "./src";
const pathDest = "./dist";

module.exports = {
  root: pathDest,

  html: {
    src: pathSrc + "/html/**/*.html",
    watch: pathSrc + "/html/**/*.*",
    dest: pathDest,
  },

  css: {
    src: pathSrc + "/style/{normalaze,style,*, !theme}/*.css",
    watch: pathSrc + "/style/**/*.*",
    dest: pathDest + "/style",
  },

  cssTheme: {
    src: pathSrc + "/style/theme/*.css",
    watch: pathSrc + "/style/**/*.*",
    dest: pathDest + "/style",
  },

  scss: {
    // как перемещать в дист не все файлы
    src: pathSrc + "/sass/**/*.{sass,scss}",
    watch: pathSrc + "/sass/**/*.*",
    dest: pathDest + "/sass",
    del: pathDest + "/sass/includes",
  },

  js: {
    src: pathSrc + "/js/**/*.js",
    watch: pathSrc + "/js/**/*.*",
    dest: pathDest + "/js",
  },

  img: {
    src: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg,webp,avif}",
    watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
    dest: pathDest + "/img",
  },

  fonts: {
    src: pathSrc + "/fonts/**/*.{eof,ttf,otf,otc,woff,woff2,svg}",
    watch: pathSrc + "/fonts/**/*.{eof,ttf,otf,otc,woff,woff2,svg}",
    dest: pathDest + "/fonts",
  },
};
