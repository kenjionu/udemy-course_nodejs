// const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide a address') 
} else {

    geocode(address, (error, {longitude, latitude, location}) =>{
        if(error) {
            return console.log(error)
        }
        forecast(longitude, latitude,  (error, forecastData )=> {
            if(error) {
                return console.log(error)
            }
    
            console.error(location)
            console.table(forecastData)
        })
    })
    
}

console.log(process.argv)
// const url = 'http://api.weatherstack.com/current?access_key=fce13e5b4804e8635556de218bc7e5f8&query=37.8267,-122.4233'

// request({ url: url, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connet to weather service!')
//     } else if (response.body.error) {
//         console.log('unable to find location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + JSON.stringify(response.body.current.temperature + ' degress out. It feels like ' + response.body.current.feelslike + ' degress out. ')) 
//     }

//     // console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + JSON.stringify(response.body.current.temperature + ' degress out. It feels like ' + response.body.current.feelslike + ' degress out. ')) 
// })

// const urlGeocoding = 'https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoia2VuamlvbnUiLCJhIjoiY2wxM3ZiODBkMjBoMDNpcWhlamo0MHRuMSJ9.VtiUQ2ddQEvPqabF1SRatQ&language=es';

// request({ url: urlGeocoding, json:true }, (error, response) => {
//     if(error){
//         console.log('Unable to connet to weather service!')
//     } else if (response.body.features.length === 0) {
//         console.log('unable to find location')

//     } else {
//         const latitude = response.body.features[0].geometry.coordinates[0];
//         const longitude = response.body.features[0].geometry.coordinates[1];
//         console.log('Get Latitude in Geomtry coordinates: '+ latitude)//latitude
//         console.log('Get Longitude in Geomtry coordinates: '+ longitude) //longitude
    
//         //is Equal
//         const latitudeCenter = response.body.features[0].center[0];
//         const longitudeCenter = response.body.features[0].center[1];
//         console.log('Get Latitude in Center coordinates: '+latitudeCenter) //latitude
//         console.log('Get Longitude in Center coordinates: '+longitudeCenter) //longitude
//     }
    
// })


    // if(error) {
    //     console.error(error)
    // } else {
    //     console.table(data)
    // }



//Geocoding
// Address -> Lat/Long

// const urlGeocoding = 'https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoia2VuamlvbnUiLCJhIjoiY2wxM3ZiODBkMjBoMDNpcWhlamo0MHRuMSJ9.VtiUQ2ddQEvPqabF1SRatQ&language=es';

// request({ url: urlGeocoding, json:true }, (error, response) => {
//     const latitude = response.body.features[0].geometry.coordinates[0];
//     const longitude = response.body.features[0].geometry.coordinates[1];
//     console.log('Get Latitude in Geomtry coordinates: '+ latitude)//latitude
//     console.log('Get Longitude in Geomtry coordinates: '+ longitude) //longitude

//     //is Equal
//     const latitudeCenter = response.body.features[0].center[0];
//     const longitudeCenter = response.body.features[0].center[1];
//     console.log('Get Latitude in Center coordinates: '+latitudeCenter) //latitude
//     console.log('Get Longitude in Center coordinates: '+longitudeCenter) //longitude
    
// })

