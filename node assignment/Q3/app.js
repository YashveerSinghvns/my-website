const fs = require('fs');
const request = require('request');
const http = require('http');
const server = http.createServer();

//request('http://www.google.com').pipe(fs.createWriteStream('b.html'));

server.on('request',(req,res) =>{

    fs.readFile('b.html', (err,data) =>{
        if (err) console.log(err);
        res.end(data);
    })
})

server.listen(8000,"127.0.0.1");


