const figlet = require('figlet');

let fontList = [];

const generateArt = (msg, options) => {
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

const getRandomFont = () => {
    return fontList[Math.round(Math.random() * (fontList.length - 1))]
}

const artify = async (msg, options) => {
    const horizontalLayout = options.horizontalLayout || 'default';
    const verticalLayout = options.verticalLayout || 'default';
    const font = options.font || getRandomFont();

    const art = await generateArt(msg || 'TextArt', { horizontalLayout, verticalLayout, font });
    console.log();
    console.log(art);
    console.log();
    console.log('Font Name:', font);
    console.log();
}

const getFontList = () => {
    return new Promise((resolve, reject) => {
        if (fontList && fontList.length) {
            resolve(fontList);
            return;
        };
        figlet.fonts(function (err, fonts) {
            if (err) {
                reject(err);
                return;
            }
            fontList = fonts;
            resolve(fonts);
        });
    })
}

module.exports = [artify, getFontList];