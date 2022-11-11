const { get } = require('request');
const request = require('request');

const fetchBreedDescription = function (breedName, callback) {

  const url = (`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`)

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    };

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback("Not a valid breed", null);
      return;
    };

    const breed = data[0];
    const description = breed.description
    callback(null, description);
  });


}


module.exports = { fetchBreedDescription };