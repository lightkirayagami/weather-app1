const request = require('request')

const geocode = function (address, callback) {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2hhdGF5dSIsImEiOiJja3JkbGdycXQwZjlvMnZvZWR2dXgyM3A2In0.ZZGeePw3SyRkgoafbz__3g&limit=1'
    request({ url: url, json: true }, function (error, response) {
        if (error) {
            callback('unable to connect', undefined)
        }
        else if (response.body.features.length === 0) {
            callback('unable to find', undefined)
        }
        else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }



    })




}

module.exports = geocode