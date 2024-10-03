const fs = require('fs');
const path = require('path');
const os = require('os');

function find_jre8(callback) {
    const path_jre = `${path.join(os.homedir(), 'Web-Pan', 'Minecraft', 'runtime')}`;

    let files = fs.readdirSync(path_jre);

    for (let file of files) {
        if (file.substring(0, 5) === 'jre-8') {
            return file;
        }
    }

    return '';
}

console.log('This will run before JRE is found, JRE File is:', find_jre8());
