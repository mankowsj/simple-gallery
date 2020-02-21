var path = require('path'),
    dirName = __dirname + './../../';

function fromRoot(filePath) {
    return path.join(dirName, filePath)
}

function fromRelative(filePath) {
    return path.join(__dirname, filePath);
}

module.exports = {
    fromRoot,
    fromRelative
};