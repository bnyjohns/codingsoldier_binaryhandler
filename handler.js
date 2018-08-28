const fs = require('fs');

exports.handler = (event, context, callback) => {
    const fileName = event.fileName.toLowerCase();
    let filePath;    
    switch(fileName){
        case "favicon.ico":
        filePath = "./favicon.ico";
        break;

        case "soldier.png":
        filePath = "./images/soldier.png";
        break;

        default:
        filePath = `./certificates/${fileName}.pdf`;
        break;
    }

    fs.readFile(filePath, (err, data) => {
        if(err)
            callback('resource not found', null);
        else
            callback(null, data.toString('base64'));
    });
}