const cote = require('cote');

const temp1Responder = new cote.Responder({
    name: 'temperature 1 responder',
    namespace: 'sensor',
    respondsTo: ['temp1-data']
});

const temp1Publisher = new cote.Publisher({
    name: 'temperature 1 publisher',
    namespace: 'sensor',
    broadcasts: ['temp1-data']
});

let temp_status;

temp1Responder.on('temp1-data', (request, callback) => {
    let temperature = Math.floor((Math.random() * 40) + Math.random() * 10);
    temp_status = {
        description: 'Temperature 1',
        value: temperature,
        timestamp: new Date()
    };
    callback(temp_status);
});

function publishTemperature1()
{
    temp1Publisher.publish('temp1-data', temp_status);
}

setInterval(publishTemperature1, 1000);
