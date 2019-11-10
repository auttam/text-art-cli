#!/usr/bin/env node
const { Program } = require('@auttam/easycli');
const figlet = require('figlet')
const config = require('../config')

const TextArt = require('../text-art')

// loading available font names
figlet.fonts(function (err, fonts) {
    if (err) {
        console.log('There was some error running text-art cli.');
        console.dir(err);
        return;
    }

    // setting font names as accepted values for --font option
    config.options[0].acceptOnly = fonts

    // running program
    Program.run(new TextArt(config))
});