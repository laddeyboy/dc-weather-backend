var axios = require('axios');
var cors = require('cors');
var express = require('express');
var morgan = require('morgan');

var env_result = require('dotenv').config();
if (env_result.error && env_result.error.code != 'ENOENT') {
  throw env_result.error;
}

var app = express();
app.use(morgan('dev'));
app.use(cors());

app.get("/", function (request, response, next) {
  var zip = request.query.zip || "78133";

  axios.get(
    'http://api.openweathermap.org/data/2.5/weather',
    {params: {q: zip, APPID: process.env.OPEN_WEATHER_MAP_KEY}}
  )
    .then((result) => {
      var temp = Math.round(1.8 * (result.data.main.temp - 273) + 32);

      response.json({temp: temp});
    })
    .catch(next);
});

var PORT = process.env.PORT || 9000;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
