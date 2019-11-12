const axios = require('axios')

function chamaDepoisDe2(param, callback) {
  setTimeout(function () {
    callback(param)
  }, 20)
}

function getSuel() {
  return axios.get("http://api.deezer.com/artist/238486")
}

module.exports = { chamaDepoisDe2, getSuel }