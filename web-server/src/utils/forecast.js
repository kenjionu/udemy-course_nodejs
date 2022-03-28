const request = require('request')

const forecast =  (latitude, longitude, callback) => {
    console.log(latitude)
    console.log(longitude)
   let url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)+'.json?access_token=pk.eyJ1Ijoia2VuamlvbnUiLCJhIjoiY2wxM3ZiODBkMjBoMDNpcWhlamo0MHRuMSJ9.VtiUQ2ddQEvPqabF1SRatQ&language=es';
   console.log(url)
   request({ url, json:true }, (error, {body}) => {
    if(error) {
        callback('Unable to connect to location services!')
        } else if (body.features.length === 0) {
            callback('unable to find location')
        } else {
            callback(undefined, {
                latitude: body.features[0].geometry.coordinates[0],
                longitude: body.features[0].geometry.coordinates[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = forecast   