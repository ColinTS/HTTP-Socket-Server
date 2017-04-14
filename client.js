 /*jshint esversion: 6*/
const net = require('net');

const path = process.argv[2];
const client = net.createConnection({ port: 8080}, () => {
  console.log('connected');

  client.write(`GET ${path} HTTP/1.1`);

  client.on('data', (data) => {
    if(path === undefined){
      console.log('You did not enter a path. Type /help for help!');
    } else {
    console.log(data.toString());
    }
  });

  process.stdin.on('data', (data) => {
    if(data.toString().replace(/(\r\n|\n|\r)/gm,"") === '/help'){
      console.log('Make sure that your terminal command reads: nodemon client.js [path]');
    }
    });

});



