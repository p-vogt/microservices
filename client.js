const cote = require('cote');
const client = new cote.Requester({name: 'Client'});

let id = 0;
setInterval(() => {
    let req_time = {type: 'time', id: id++};

    client.send(req_time, (time) => {
        console.log(`time is ${time}`);
    })

    let req_temp1 = {type: 'temperature 1', id: id++};
    let req_temp2 = {type: 'temperature 2', id: id++};

    let req_humid1 = {type: 'humidity 1', id: id++}

    client.send(req_humid1, (humidity) => {
        console.log(`humidity 1 is ${humidity}%`);
    })

    client.send(req_temp1, (temperature) => {
        console.log(`temperature 1 is ${temperature}°`);
    })

    client.send(req_temp2, (temperature) => {
        console.log(`temperature 2 is ${temperature}°`);
    })
}, 1000);