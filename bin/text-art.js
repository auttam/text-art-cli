#!/usr/bin/env node
const Program = require('@auttam/easycli').Program;
const [artify, getFontList] = require('../index');
const config = require('./cli-config');
const os = require('os')

class TextArt extends Program {
    async main(text, $options) {
        if ($options.listFonts) {
            const fonts = await getFontList();
            this.showVersion();
            console.log(os.EOL + 'List of available fonts:' + os.EOL);
            console.log('   ' + fonts.join(os.EOL + '   '))
            return;
        }

        await artify(text, $options);
    }
}

// loading available font names
getFontList().then(fonts => {
    // setting font names as accepted values for --font option
    config.options[0].acceptOnly = fonts;

    // running program
    return Program.run(new TextArt(config))
}).catch(err => {
    console.log('There was some error running text-art cli.');
    console.dir(err)
})