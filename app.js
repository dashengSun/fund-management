const express = require("express");
const IOTA = require("iota.lib.js");
const addr = require("./lib/addr")

const app =express();
const iota = new IOTA({
  'provider': 'http://mainnet.iotachina.win:14224'
});
const seed = process.env.SEED;

console.log("iota version:", iota.version);

app.get("/", (req, res) => res.send("hello, weiOTA"));
app.get("/address/generate", (req, res) => {
  addr.generateAddr(iota, seed, res);
});

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}.`));
