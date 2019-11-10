#!/usr/bin/env node
const Program = require('@auttam/easycli').Program
const figlet = require('figlet')

class TextArt extends Program {

    async main(text, $options) {
        const fontName = $options.font || this.getRandomFontName();
        var art = await this.generateArt(text, {
            horizontalLayout: $options.horizontalLayout || 'default',
            verticalLayout: $options.verticalLayout || 'default',
            font: fontName,
        })
        console.log(art)
        console.log();
        console.log('Font Name:', fontName)
        console.log();
    }

    getRandomFontName() {
        const fontList = this.config.options.get('font').acceptOnly;
        return fontList[Math.round(Math.random() * (fontList.length - 1))]
    }

    generateArt(msg, options) {
        return new Promise((resolve, reject) => {
            figlet(msg, options, (err, data) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(data)
            })
        })
    }

}

module.exports = TextArt