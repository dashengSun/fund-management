var generateAddr = function(iota, seed, res) {
  iota.api.getNewAddress(seed, function(error, success) {
    if (!error) {
      console.log("Addr: ", success);
      var checkSumAddr = iota.utils.addChecksum(success);
      console.log("Addr after adding checksum: ", checkSumAddr)
      // return checkSumAddr;
      res.send({'address': checkSumAddr})
    } else {
      console.log("Error occured: " + error);
      // TODO return optional
    }
  });
};

module.exports = {
  'generateAddr': generateAddr
};

