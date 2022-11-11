const { get } = require('request');
const request = require('request');

const breedName = process.argv[2]

const url = (`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`)

request(url, (error, response, body) => {
  if (!breedName) {
    throw new Error("Please enter a breed");
    return;
  };

  if (error) {
    throw error;
    return;
  };

  const data = JSON.parse(body);

  if (data.length === 0) {
    throw new Error("Not a valid breed");
    return;
  };


  const breed = data[0];
  const description = breed.description
  console.log(description)
});