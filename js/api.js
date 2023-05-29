let image;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

fetch("https://api.unsplash.com/search/photos?query=forniture&client_id=rv7cdQf0Ip6qEmuZyBfAKM42pHA4cHv_D8NqOWfV5xU")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
       image = `<img class="imgBack" src="${data.results[getRandomInt(9)].urls.regular}" alt="main-background">`
        $("#imgBackAPI").append(image)
    })