const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoia2VuamlvbnUiLCJhIjoiY2wxM3ZiODBkMjBoMDNpcWhlamo0MHRuMSJ9.VtiUQ2ddQEvPqabF1SRatQ&language=es';
    console.log('GEOCODE:'+url)
    request({url, json:true }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location services!')
        } else if (body.error) {
            callback('unable to find location')
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].properties.place_name
            })
        }
    })
}

module.exports = geocode