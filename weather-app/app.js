const yargs = require('yargs');

const geocode = require('./geocodeAPI/geocode')
const weather = require('./weatherAPI/weather')

const argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        description: 'Address to fetch the weather for',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) =>{

    if(errorMessage){
        console.log(errorMessage);
    }
    else{
        //console.log(JSON.stringify(results, undefined, 2))

        console.log(results.address)
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) =>{

            if(errorMessage){
                console.log(errorMessage);
            }
            else{
                console.log(`It's currently ${weatherResults.temperature}. It feel like ${weatherResults.apparentTemperature}`)
            }
        });
    }
});