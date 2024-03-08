var generator = require('strong-pwd-generator');

let generateStr = async function () {
    var password = generator.generate({
        length: 20,
        numbers: false
    });
    return password
}

module.exports = {
    generateStr
}