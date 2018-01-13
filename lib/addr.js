var generateAddr = function (iota, seed) {
  return new Promise((resolve, reject) => {
    iota.api.getNewAddress(seed, function (error, success) {
      if (!error) {
        console.log("Addr: ", success);
        var checkSumAddr = iota.utils.addChecksum(success);
        console.log("Addr after adding checksum: ", checkSumAddr)
        resolve(checkSumAddr);
      } else {
        console.log("Error occured: " + error);
        reject("Error")
      }
    })
  });
};

module.exports = {
  'generateAddr': generateAddr
};

