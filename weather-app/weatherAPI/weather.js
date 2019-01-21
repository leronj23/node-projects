const request = require('request');

exports.getWeather = (lat, lng, callback) => {

    request({
        url: `https://api.darksky.net/forecast/bf0f0a69cc794f6adcad3ba93e8cf748/${lat},${lng}`,
        json: true
    }, (error, response, body) => {

        if (!error && response.statusCode === 200) {

            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        }
        else {

            callback('Unable to connect to Forecast.io server.')
        }
    })
}