const request = require('request')



const forecast = function (latitude, longitude, callback) {
    const url = 'http://api.weatherstack.com/current?access_key=707f2f43e7d50341d46038ad99839d91&query=' + latitude + ',' + longitude + '&units=m'

    request({ url: url, json: true }, function (error, response) {
        if (error) {
            callback('unable to connect', undefined)  //for basic OS error like no inernet
        }
        else if (response.body.error) {
            callback('unable to find', undefined)
        }
        else {
            callback(undefined, 'it is currently ' + response.body.current.temperature + ' but feels like  ' + response.body.current.feelslike)

        }



    })


}
// forecast(20.5937, 78.9629, function (error, data) {

//     console.log(data)
// })
module.exports = forecast