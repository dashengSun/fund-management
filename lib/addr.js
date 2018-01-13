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

var saveAddr = function(mongoose, address) {
  const Address = mongoose.model('Address', {
    userID: String,
    address: String
  });

  const userAddr = new Address({
    userID: 1,
    address: address
  })

  return new Promise((resolve, reject) => {
    userAddr.save(err => {
      if (err) {
        console.log("Save address error: ", err);
        reject("Error")
      } else {
        resolve("OK")
      }
    })
  })
}

module.exports = {
  'generateAddr': generateAddr,
  'saveAddr': saveAddr
};

