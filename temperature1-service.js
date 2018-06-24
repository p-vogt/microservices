const cote = require('cote');
const getTemp1 = new cote.Responder({name: 'Temperature Service 1'});

getTemp1.on('temperature 1', (request, callback) => {
    let temperature = Math.floor((Math.random() * 40) + Math.random() * 10);
    callback(temperature);
});