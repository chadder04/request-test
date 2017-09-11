var request = require('request');
var fs = require('fs');

var getURL = 'https://sytantris.github.io/http-examples/future.jpg';

request.get(getURL)
    .on('error', function (err) {
        throw err;
    })
    .on('response', function (response) {
        console.log('Response Status Code: ', response.statusCode);
        console.log('Response Status Message: ', response.statusMessage);
        console.log('Response Status Content Type: ', response.headers['content-type']);
    })
    .on('end', function() {
        console.log('Download complete.')
    })
    .pipe(fs.createWriteStream('./future.jpg')); 