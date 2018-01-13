const express = require("express");
const IOTA = require("iota.lib.js");
var mongoose = require('mongoose');
const addr = require("./lib/addr");

const app =express();

const iota = new IOTA({
  'provider': 'http://mainnet.iotachina.win:14224'
});
console.log("iota version:", iota.version);

const seed = process.env.SEED;

mongoose.connect('mongodb://localhost/test');

app.get("/", (req, res) => res.send("hello, weiOTA"));

app.get("/address/generate", (req, res) => {
  const addrResult = addr.generateAddr(iota, seed);
  addrResult.then(address => {
    return res.send({'address': address});
  });
});

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}.`));
