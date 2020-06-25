const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['http://localhost:3000', 'https://localhost:3443']; //lists that the server are available to accept
var corsOptionsDelegate = (req, callback) => {
    var corsOptions;

    if(whitelist.indexOf(req.header('Origin')) != -1) {
        corsOptions = {origin: true}; //the origin in the incming request is in whitelist so i will accept
    }
    else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};


exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);