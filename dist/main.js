fetch('https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=28fe7b5f9a78838c639143fc517e4343')
  .then(function(response) {
      console.log(response)
})
  .catch(function(err) {
      console.log(err)
  });